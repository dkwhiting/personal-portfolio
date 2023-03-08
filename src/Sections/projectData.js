class Tech {
  name
  path;
  constructor(name, path) {
    this.name = name
    this.path = path
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

export const projects = [
  {
    name: 'Flashsheet',
    description: 'A full-stack e-commerce website that features a collection of tattoos from various artists, allowing customers to browse and purchase their favorite designs online',
    techStack: [
      javascript,
      react,
      redux,
      nodejs,
      express,
      postgresql
    ],
    imgPath: 'flashsheet.png',
    repoURL: 'https://github.com/2211-Capstone-Tattoos/tattoo-website',
    liveURL: 'https://flashsheet.fly.dev'
  },
  {
    name: 'Fitness Tracker',
    description: 'A full-stack fitness tracker web application that enables users to track their fitness goals, log their workout routines, and view their progress over time through an intuitive user interface',
    techStack: [
      javascript,
      react,
      nodejs,
      express,
      postgresql
    ],
    imgPath: 'fitness-tracker.png',
    repoURL: '',
    liveURL: ''
  },
]