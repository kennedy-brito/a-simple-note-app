[ANGULAR__BADGE]: https://img.shields.io/badge/Angular-red?style=for-the-badge&logo=angular
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript

<h1 align="center" >A Simple Note App </h1>

![angular][ANGULAR__BADGE]
![typescript][TYPESCRIPT__BADGE]

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a>
</p>

<h2 id="started">📌 About</h2>

This is a simple project used to study the basics of Angular, Typescript and consuming API's in Angular.

<h2 id="started">🚀 Getting started</h2>
To run this project locally you should clone the project:

```bash
git clone git@github.com:kennedy-brito/a-simple-note-app.git
```

Now run the following comands:
```bash
cd a-simple-note-app
npm install
json-server --watch notesdb.json
ng serve
```

Acess the port that Angular is using, normally it is the 4200 port
<h3>Prerequisites</h3>

- [NodeJS](https://github.com/)

<h2 id="routes">📍 Application Routes</h2>

Here you can list the main routes of your API, and what are their expected request bodies.
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>/notes</kbd>     | page that list all notes of the user
| <kbd>/add</kbd>     | page to add notes
| <kbd>/edit/:id</kbd>     | page to edit a existing note

