# Landing page Bookmark--CTD
![bookmarg-landingpg](https://user-images.githubusercontent.com/97140968/220505400-75eb7b8e-1133-4cba-85f1-28261039d250.png)
<p align="center"> See in the <a href="https://lucaso-silva.github.io/landg-pg-bookmark--CTD/" > link </a></p>

## Overview
This Landing Page is part of the CTD project and it was developed seeking to improve my abilities with HTML, CSS, and JavaScript programming.

It was based in a model by [frontendmentor.io](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).  

> Status: Developing ⚠️
---

### The challenge
Your users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

## Built with
- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties
- Flexbox
- JavaScript

## What I learned 💡
- During the development of this project, I could consolidate more knowledge about CSS, which was helpful to use with the visibility of cards and sections. 
Use of `:nth-child()` pseudo-class to select elements based on their position among a group of siblings.
```CSS
.intro-links a:nth-child(2) {
  background-color: var(--second-btn);
  color: var(--very-dark-blue);
}

.intro-links a:nth-child(2):hover {
  background-color: var(--bg-color);
  color: var(--very-dark-blue);
  border: .15em solid var(--very-dark-blue);
}
```
- Programming with JavaScript was challenging and extremely necessary to implement visibility of cards in the main section and show the answers to each question in the FAQ section.

### 🛠️ Continued development
The next step will be focused on the following:
- Improvements in the contact form section (validation using JavaScript and error messages that are shown to the user). 
- Refactoring JavaScript functions
- Layout improvements

---
👨🏻‍💻 Developed by Lucas Oliveira
