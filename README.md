# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./design/screenshot.png)

### Links

- Solution URL: [Solution]()
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- TailwindCSS - For styles

### What I learned

Background images positioning

```css
body {
  background-image: url(../assets/images/bg-pattern-top.svg),
    url(../assets/images/bg-pattern-bottom.svg);
  background-repeat: no-repeat no-repeat;
  background-position: -730px -880px, 600px 300px;
  background-size: cover, cover;
}
@media only screen and (max-width: 1024px) {
  body {
    background-position: -600px -500px, 600px 300px;
  }
}
@media only screen and (max-width: 640px) {
  body {
    background-position: -450px -400px, 150px 300px;
  }
}
```

### Continued development

Styling background images

## Author

- Frontend Mentor - [@Fejiro001](https://www.frontendmentor.io/profile/Fejiro001)
- Twitter - [@aberefejiro](https://www.twitter.com/aberefejiro)

