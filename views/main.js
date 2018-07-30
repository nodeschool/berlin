var html = require('choo/html')
// var differenceInCalendarDays = require('date-fns/difference_in_calendar_days')
// var addWeeks = require('date-fns/add_weeks')
// var dateFormat = require('date-fns/format')

var TITLE = 'nodeschool berlin'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif bg-light-yellow">
      <div class="tc pv4 center">
        <img class="w5" src="assets/logo.png" alt="logo" />
        <h1 class="b f1 f-headline-ns db mt0 mb0">nodeschool</h1>
        <h2 class="f2 f1-ns mt0">berlin</h2>
        ${summerBreak()}
      </div>
      <div class="cf mw8 center pb5">
        <div class="fl ph3 w-100 w-33-ns tc">
          <h3>Learn Coding</h3>
          Join us and learn coding with us. You are going to learn the basics of <a href="https://nodejs.org/">Node.js</a>. It's a plus if you know some JavaScript beforehand, but if not we can help you out.
        </div>
        <div class="fl ph3 w-100 w-33-ns tc">
          <h3>Self-Guided</h3>
          You will go through a set of self-paced challenges. No boring talks. All challenges are Open Source and available online on <a href="https://nodeschool.io" >nodeschool.io</a>. This means you can continue learning after the event.
        </div>
        <div class="fl ph3 w-100 w-33-ns tc">
          <h3>For Everyone</h3>
          We think coding is awesome and everyone should feel welcome at our event. This includes that we are expecting all participants to be awesome to each other and respect the <a href="https://github.com/nodeschool/berlin/blob/master/codeofconduct.md">Code of Conduct</a>.
        </div>
      </div>
      <div class="tc pv4 center mw5">
        <h1 class="f2">Mentors</h1>
        ${state.mentors.map(mentor => {
          return html`
            <a class="f3 fw6 db black link hover-blue mb2 mw10" href="https://github.com/${mentor}">@${mentor}</a>
          `
        })}
      </div>
    </body>
  `

  // function nextEvent () {
  //   var startDate = new Date(state.startDate)
  //   var today = new Date()
  //   var days = differenceInCalendarDays(today, startDate)
  //   var weeks = Math.max(0, Math.ceil(days / 7))
  //   if (weeks % 2 !== 0) weeks++
  //   var nextDate = addWeeks(startDate, weeks)
  //   var formattedDate = dateFormat(nextDate, 'Do MMMM YYYY')
  //   return html`<div>
  //     <div class="f3">We meet Wednesdays every 2 weeks @ Mozilla Berlin</div>
  //     <a href="${state.eventLink}" class="f3 link dim ba bw1 ph3 pv2 mv3 mb2 dib black">RSVP here for ${formattedDate}</a>
  //   </div>`
  // }

  function summerBreak () {
    return html`<div>
      <div class="f3">🏖️ We are on a summer break, see you in October! 🏖️</div>
    </div>`
  }
}
