var casper = require('casper').create();
var express = require('express');
var app = express();

var original = [];
var changed_cache = [];
var changed_url = [];

app.set('port', (process.env.PORT || 5000));

// casper.start();

// casper.then(function() {
//     this.thenOpen('www.google.sk', function() {
//         this.echo('KONTROLA -> google.sk');
//         console.log('KONTROLA -> google.sk');
//     });
// });

// casper.run();

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});