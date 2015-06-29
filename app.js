var casper = require('casper').create();
var fs = require('fs');
var dname = 'defaults.txt';
var dsave = fs.pathJoin(fs.workingDirectory, '', dname);

casper.start();

casper.then(function() {
    this.thenOpen('www.google.sk', function() {
        this.echo('KONTROLA -> google.sk');
        console.log('KONTROLA -> google.sk');
        fs.write(dsave, 'adsadsa', 'w');
    });
});

casper.run();
