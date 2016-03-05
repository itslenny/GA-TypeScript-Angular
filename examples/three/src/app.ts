/// <reference path="../typings/tsd.d.ts" />

// import * as express from "express";

import express = require('express');
// import Reddit = require('./Reddit');

import {Reddit, something} from "./Reddit";

var app = express();

app.get('/', function(req, res){
    var r = new Reddit('typescript');
    r.load((error) => {
       if(error) return res.send(error);
       res.send(r.topPost); 
    });
});

app.listen(3000, function(){
    console.log('listening on port 3000!');
});