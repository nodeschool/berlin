nodeschool berlin :school::bear:
======

[![Slack](https://img.shields.io/badge/slack-%20%23nodeschool-orange.svg)](https://berlinjs-slack.herokuapp.com/)
[![IRC Freenode](https://img.shields.io/badge/freenode-%23nodeschool--berlin-green.svg)](https://webchat.freenode.net/?channels=nodeschool-berlin)

## :star: welcome!

Welcome to NodeSchool Berlin, a bi-weekly [NodeSchool] chapter dedicated to helping people learn [Node.js]! You can RSVP for one of our meetups on the [OpenTechSchool Berlin] meetup page. We usually meet up every 2 weeks at the Mozilla Berlin offices in Berlin-Kreuzberg. Drinks are on us, and sometimes we even have pizza!

This repository hosts our website (http://nodeschool.io/berlin), which is built with [Choo], as well as our presentation slides we present at the start of each meetup. If you want to contribute to our website, you only need to run the following commands:

```sh
git clone https://github.com/nodeschool/berlin nodeschool-berlin
cd nodeschool-berlin
npm install
npm start
```

This will launch a development server. After making your changes, be sure to open a new pull request to this repository!

## Build commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`        | Start the development server
`$ npm test`         | Lint, validate deps & run tests
`$ npm run build`    | Compile all files into `dist/`
`$ npm run inspect`  | Inspect the bundle's dependencies
`$ npm run publish`  | Publish to gh-pages

[NodeSchool]: http://nodeschool.io
[Node.js]: https://nodejs.org
[OpenTechSchool Berlin]: https://www.meetup.com/opentechschool-berlin
[Choo]: http://choo.io
