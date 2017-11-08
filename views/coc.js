var html = require('choo/html')

var TITLE = 'nodeschool berlin - code of conduct'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="sans-serif bg-light-yellow">
      <div class="tc pv4 center">
        <h1 class="b f1 f-headline-ns db mt0 mb0">nodeschool</h1>
        <h2 class="f2 f1-ns mt0 mb0">berlin</h2>
      </div>
      <article class="cf mw8 center pb5">
        <h3 class="f2">Code of Conduct</h3>
        <p>All attendees, speakers, sponsors and volunteers at NodeSchool Berlin are required to agree
        with the following code of conduct. Organizers will enforce this code throughout the event.
        We are expecting cooperation from all participants to help ensuring a safe environment for everybody.</p>
        <p><em>tl:dr: Do not harass people. Be awesome to each other.</em></p>
        <h4 class="f3">Need Help? Contact Finn</h4>
        <table>
          <thead>
            <tr>
              <th  class="bb b--black-20 pv2 pr2 tl">Contact</th>
              <th  class="bb b--black-20 pv2 pr2 tl">Finn Pauls</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bb b--black-20 pv2 pr2">Twitter</td>
              <td class="bb b--black-20 pv2 pr2"><a href="https://twitter.com/finnpauls">@finnpauls</a></td>
            </tr>
            <tr>
              <td class="bb b--black-20 pv2 pr2">Email</td>
              <td class="bb b--black-20 pv2 pr2">derfinn[at]gmail.com</td>
            </tr>
            <tr>
              <td class="bb b--black-20 pv2 pr2">Phone</td>
              <td class="bb b--black-20 pv2 pr2">+4915732650702</td>
            </tr>
          </tbody>
        </table>
        <h4 class="f3">The Quick Version</h4>
        <p>NodeSchool Berlin is dedicated to providing a harassment-free conference experience for
        everyone, regardless of gender, sexual orientation, disability, physical appearance, body size,
        race, or religion. We do not tolerate harassment of participants in any form. Conference
        participants violating these rules may be sanctioned or expelled from the event at the
        discretion of the organizers.</p>
        <h4 class="f3">The Less Quick Version</h4>
        <p>Harassment includes offensive verbal comments related to gender, sexual orientation,
        disability, physical appearance, body size, race, religion, sexual images in
        public spaces, deliberate intimidation, stalking, following, harassing photography
        or recording, sustained disruption of talks or other events, inappropriate physical
        contact, and unwelcome sexual attention.</p>
        <p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
        <p>If a participant engages in harassing behavior, the organizers may take any action
        they deem appropriate, including warning the offender or expulsion from the event.</p>
        <p>If you are being harassed, notice that someone else is being harassed, or have any
        other concerns, please conctact an organizer or mentor. We will tell you who are
        responsible at the beginning of the event. You can also contact Finn directly (info above).</p>
        <p>We are happy to help participants contact venue security or local law enforcement,
        provide escorts, or otherwise assist those experiencing harassment to feel safe.
        We value your attendance.</p>
        <p>We expect participants to follow these rules at the event and related social events.</p>
        <p>This Code of Conduct was adapted from the <a href="http://2014.jsconf.eu/code-of-conduct.html">JSConf.eu Code of Conduct</a>.</p>
        </article>
      </body>
  `
}
