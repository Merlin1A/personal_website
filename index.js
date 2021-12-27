'use strict';

import * as http from 'http';
import * as fs from 'fs';
import { createHash } from 'crypto';
import express from 'express';
import passport from 'passport';
import expressSession from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3000;
const headerText = { 'Content-Type': 'application/json;charset=utf-8' };
const session = {
  secret: process.env.SECRET || 'SECRET', 
  resave: false,
  saveUninitialized: false
};

app.use(express.json()); 
app.use(express.urlencoded({ 'extended': true })); 
app.use(expressSession(session));
passport.use(authStrat);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((uid, done) => {
  done(null, uid);
});


















// // http is an inbuilt module in Node.js
// const http = require('http');

// // createServer method takes a callback function as argument
// // the callback function takes two arguments req and re
// const server = http.createServer(function (req, res) {
//     console.log(`${req.method} request received at ${req.url}`);
//     if (req.url === '/html') {
//         res.setHeader('Content-Type', 'text/html');
//         res.statusCode = 200; // 200 = OK
//         res.write("<h1>Demo page</h1>");
//         res.end();
//     } else if (req.url === '/plain') {
//         res.setHeader('Content-Type', 'text/plain');
//         res.statusCode = 200; // 200 = OK
//         res.write("<h1>Demo page</h1>");
//         res.end();
//     } else if (req.url === '/json') {
//         res.setHeader('Content-Type', 'application/json');
//         res.statusCode = 200; // 200 = OK
//         res.write(JSON.stringify({"firstName": "Harry", "lastName": "Potter"}));
//         res.end();
//     } else {
//         res.setHeader('Content-Type', 'text/html');
//         res.statusCode = 400; // 400 = Bad request
//         res.write("<h1>Sorry, this page is not available</h1>");
//         res.end();
//     }
// });

// const PORT = process.env.PORT || 9000;

// // server is listening to incoming requests on port 3000 on localhost
// server.listen(PORT, function () {
//     console.log("Listening on port http://localhost:" + PORT);
// });