var casper = require('casper').create();

var original = [];
var changed_cache = [];
var changed_url = [];

casper.start();

casper.then(function() {
    this.thenOpen('www.google.sk', function() {
        this.echo('KONTROLA -> google.sk');
        console.log('KONTROLA -> google.sk');
    });
});

casper.run();