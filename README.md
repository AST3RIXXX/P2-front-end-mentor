# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://github.com/AST3RIXXX/Projet-personnel-front-end](https://github.com/AST3RIXXX/Projet-personnel-front-end)
- Live Site URL: [https://ast3rixxx.github.io/Projet-personnel-front-end-mentor/](https://ast3rixxx.github.io/Projet-personnel-front-end-mentor/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In html it was nothing new, however I use an svg instead of a img. I leaned to better use the variable in css to surpass the chalenge of multiple color scheme. I also used animation to animate the chekedbox.

```css
:root {
  --degrade-body: linear-gradient(180deg, #040918 0%, #091540 100%);
  --couleur-nav: rgba(255, 255, 255, 0.1);
  --couleur-text: white;
  --nav: #091540;
  --nav-hover: hsl(3, 86%, 64%);
  --bordure-card: #ccc;
  --header-color: white;
  --couleur-nav-link: white;
  --couleur-switch: rgba(255, 255, 255, 0.1);
  --logo-text: white;
  --nav-box-shadow: 0 0 0.5px 0.5px rgb(255, 255, 255);
  
}
body.lightmode{
  --degrade-body: linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%);
  --couleur-nav: hsl(200, 60%, 99%);
  --couleur-text: hsl(226, 11%, 37%);
  --nav: white;
  --nav-hover: hsl(3, 86%, 64%);
  --bordure-card: #ccc;
  --header-color: #091540;
  --couleur-nav-link: #091540;
  --couleur-switch: #ccc;
  --logo-text: #091540;
  --nav-box-shadow: 0 0 2px 2px rgb(230, 230, 230);

}
