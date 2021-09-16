URL Shortner
=========
Hosted at [https://url-shortner-tarsh.herokuapp.com/](https://url-shortner-tarsh.herokuapp.com/)

It uses NodeJs for backend and ExpressJS as backend framework

EJS Template engine is used to pass variables from backend to frontend easily

CSS is used for styling.

shortid node module is used to make unique short urls

How to install and run
----------------------

1.  Fork the app and clone it
2.  Make sure you have nodejs installed on your computer
3.  After cloning the repository open it in terminal and run command  ``` npm install ```
4.  In server.js either replace process.env.CONNECTION_URL directly with mongodb connection string from mongodb atlas or create a .env file with variable CONNECTION_URL whose value is mongodb connection url mentioned before. Example CONNECTION_URL=Your Mongodb connection URL
5.  After previous step is completed run command ``` node server.js ```
6. The application will start running on http://localhost:5000/

Functionality
-------------

It takes a URL through input tag , makes a short url for it and displays it on screen.
