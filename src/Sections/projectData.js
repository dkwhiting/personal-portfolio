class Tech {
  name
  path;
  constructor(name, path) {
    this.name = name
    this.path = path
  }
}

class Project {
  name
  description
  techStack
  imgPath
  repoURL
  liveURL;
  constructor(name, description, techStack, imgPath, repoURL, liveURL) {
    this.name = name
    this.description = description
    this.techStack = techStack
    this.imgPath = imgPath
    this.repoURL = repoURL
    this.liveURL = liveURL
  }
}

const javascript = new Tech('JavaScript', 'skill-icons:javascript')
const typescript = new Tech('TypeScript', 'skill-icons:typescript')
const react = new Tech('React', 'logos:react')
const redux = new Tech('Redux', 'skill-icons:redux')
const nodejs = new Tech('Node.js', 'vscode-icons:file-type-node')
const express = new Tech('Express', 'simple-icons:express')
const html = new Tech('HTML', 'vscode-icons:file-type-html')
const css = new Tech('CSS', 'vscode-icons:file-type-css')
const git = new Tech('Git', 'mdi:git')
const postgresql = new Tech('PostgreSQL', 'logos:postgresql')
const mysql = new Tech('MySQL', 'logos:mysql')
const restapi = new Tech('REST API', 'vscode-icons:file-type-rest')

const flashsheet = new Project(
  'Flashsheet',
  'This full-stack e-commerce website offers a vast selection of high-quality tattoo designs from talented artists, providing customers with a seamless shopping experience and secure payment options.',
  [
    javascript,
    react,
    redux,
    nodejs,
    express,
    postgresql
  ],
  'flashsheet.png',
  'https://github.com/2211-Capstone-Tattoos/tattoo-website',
  'https://flashsheet.fly.dev'
)

const fitnessTracker = new Project(
  'Fitness Tracker',
  'A full-stack fitness tracker web application that enables users to track their fitness goals, log their workout routines, and view their progress over time through an intuitive user interface',
  [
    javascript,
    react,
    nodejs,
    express,
    postgresql
  ],
  'fitness-tracker.png',
  'https://github.com/dkwhiting/fitness-tracker-react/tree/production',
  'https://dkwhiting.github.io/fitness-tracker-react'
)

const scoreKeeper = new Project(
  'Score Keeper',
  'A React-based score keeping app that enables users to easily and efficiently track scores for various games and activities.',
  [
    javascript,
    react
  ],
  '',
  'https://github.com/dkwhiting/score-keeper/tree/production',
  'https://dkwhiting.github.io/score-keeper'
)

const tictactoe = new Project(
  'Tic Tac Toe',
  'A fully functional tic-tac-toe game built with vanilla JavaScript, featuring player vs player and player vs computer modes.',
  [javascript],
  '',
  'https://github.com/dkwhiting/arcade/blob/main/app.js',
  'https://dkwhiting.github.io/arcade'
)

export const projects = [
  flashsheet,
  fitnessTracker,
  scoreKeeper,
  tictactoe
]

export const techs = [
  javascript,
  typescript,
  react,
  redux,
  nodejs,
  express,
  html,
  css,
  git,
  postgresql,
  mysql,
  restapi
]