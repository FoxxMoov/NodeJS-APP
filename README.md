# Hello World Server

===============

## Setup

```
$ git clone https://gitlab.eemi.tech/corentin.ravet/node-app.git
$ cd node-app
$ npm install
$ DEBUG="node-app:server" npm start
```

# What it is, what it does

Server that displays "Node App" on a single page.

# Usage

============

# Exercice 1

### Deploy it on your own **heroku server** :

```
$ heroku login
$ heroku create name-of-your-app
$ git add .
$ git commit -m "initial commit"
$ git push heroku master"
$ heroku logout
```

See the result on my own server :

[https://node-app-corentin.herokuapp.com/](https://node-app-corentin.herokuapp.com/)

Server displays "**Node App**" on the landing page

============

# Exercice 2

Go to this URL : [https://node-app-corentin.herokuapp.com/](https://node-app-corentin.herokuapp.com/)

Server displays "**Node App**" on the landing page + form to enter a city. When the city is enter => redirect to `/ville` page with the name of city pre-enter.

============

# Exercice 4.1

To test the routes, please follow the steps: 

```
npm start
```
Open a new termial or console 
```
npm test
```
