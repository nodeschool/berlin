var css = require('sheetify')
var choo = require('choo')
var websiteConfig = require('./website.json')

css('tachyons')

var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(function (state, emitter) {
  state = Object.assign(state, websiteConfig)
})

app.route('/', require('./views/main'))
app.route('/berlin', require('./views/main'))
app.route('/berlin/coc', require('./views/coc'))

if (!module.parent) app.mount('body')
else module.exports = app
