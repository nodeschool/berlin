var html = require('choo/html')

var TITLE = 'route not found'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="sans-serif bg-light-yellow">
      <h1 class="f-headline pa3 pa4-ns">
        404 - route not found
      </h1>
    </body>
  `
}
