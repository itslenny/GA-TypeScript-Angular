/// <reference path="../typings/tsd.d.ts" />
"use strict";
// import * as express from "express";
var express = require('express');
// import Reddit = require('./Reddit');
var Reddit_1 = require("./Reddit");
var app = express();
app.get('/', function (req, res) {
    var r = new Reddit_1.Reddit('typescript');
    r.load(function (error) {
        if (error)
            return res.send(error);
        res.send(r.topPost);
    });
});
app.listen(3000, function () {
    console.log('listening on port 3000!');
});
