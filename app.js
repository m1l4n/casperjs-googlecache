// var casper = require('casper').create();
var express = require('express');
var app = express();

casper.start();

casper.then(function() {
    this.thenOpen('www.google.sk', function() {
        this.echo('KONTROLA -> google.sk');
        console.log('KONTROLA -> google.sk');
    });
});

casper.run();
