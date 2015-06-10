# ultimate-website-boilerplate
*by Digitale Substanz*

## What's that?

A website skeleton which utilizes Twitter Bootstrap, LESS and GRUNT to start with. Great starting point for a single page website. 

**Features:**

- file structure ready for frontend development workflow using GRUNT as build system
- LESS for rapid CSS3 development
- GRUNT for building the website
- ready-to-use index.html featuring basic HTML layout, external file includes and 
- pre-defined off-canvas menu written in CSS3 only, no JavaScript needed

## Getting started

1. Install [Node.js](https://nodejs.org) on your machine if you don't have already.
1. Install [GRUNT](http://gruntjs.com/getting-started) on your machine globally, if you don't have already.
1. Clone this repository to your local hard drive.
1. Open console and browse to root directory of your new project. Build your initial environment by typing `$ npm install` in your console. This will install Grunt locally in your project plus the neccessary Grunt plugins.
1. [Download](http://getbootstrap.com/getting-started/#download) latest version of Twitter Bootstrap (*Source Code*)
1. Replace `src/bootstrap/*` with the latest equivalent files corresponding to the originally included ones. Don't need the whole bootstrap source tree, though.
1. Open console, navigate to the root of your project folder (th cloned repository) and start the Grunt watch task via `$ grunt` command.
1. Open `public/index.html` in your favourite editor and write your markup.
1. Add styles in `src/less` only. Don't touch `public/css/styles.css` manually. It will be build out off the `src/less/*.less` files. Each time, any of the *.less source files changes, `public/css/styles.css` will be built. 

## LESS file hierarchy

We won't touch any Bootstrap sources directly. Thus, we can always replace the existing installation with the sources of the latest Bootstrap version. 

**`src/less/styles.less`**: The central *.less file, includes all others.

**`src/less/variables.less`**: A copy of Bootstrap's variables.less. Used to override default settings and add custom values for colors, typography, padding e.t.c.

**`src/less/mixins.less`**: Holds all your global mixins.

**`src/less/offcanvas-menu.less`**: Styles and functionality of the off-canvas menu.

**`src/less/main.less`**: Includes all your custom styles.


