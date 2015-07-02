var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


try {
    var Spooky = require('spooky');
} catch (e) {
    var Spooky = require('../lib/spooky');
}

var spooky = new Spooky({
        // child: {
        //     transport: 'http'
        // },
        // casper: {
        //     logLevel: 'debug',
        //     verbose: true
        // }
    }, function (err) {
        if (err) {
            e = new Error('Failed to initialize SpookyJS');
            e.details = err;
            throw e;
        }

        spooky.start('www.google.sk');
        spooky.then(function () {
            this.emit('hello', 'Hello, from ' + this.evaluate(function () {
                return document.title;
            }));
        });
        spooky.then(function() {
            this.thenOpen('en.wikipedia.org/wiki/Spooky_the_Tuff_Little_Ghost', function() {
                console.log('Otvorena stranka');
            });
        });
        spooky.run();
    });

spooky.on('error', function (e, stack) {
    console.error(e);

    if (stack) {
        console.log(stack);
    }
});


// Uncomment this block to see all of the things Casper has to say.
// There are a lot.
// He has opinions.
// spooky.on('console', function (line) {
//     console.log(line);
// });


spooky.on('hello', function (greeting) {
    console.log(greeting);
});

spooky.on('test', function () {
    console.log('Spustam test');
    this.thenOpen('en.wikipedia.org/wiki/Spooky_the_Tuff_Little_Ghost', function() {
        console.log('Otvorena stranka');
        if (this.exists('#google-cache-hdr')) {
            console.log(this.getHTML('#google-cache-hdr > div:first-child').replace(/(<([^>]+)>)/ig,""));
        }
    });
});

spooky.on('log', function (log) {
    if (log.space === 'remote') {
        console.log(log.message.replace(/ \- .*/, ''));
    }
});