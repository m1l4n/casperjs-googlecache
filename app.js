alert('hello');
// var casper = require('casper').create();
// var fs = require('fs');
// var utils = require('utils');
// var fname = 'results.csv';
// var save = fs.pathJoin(fs.workingDirectory, '', fname);
// var dname = 'defaults.txt';
// var dsave = fs.pathJoin(fs.workingDirectory, '', dname);

// var urls = [
//     'http://www.markiza.sk/uvod',
//     'http://videoarchiv.markiza.sk/uvod',
//     'http://www.markiza.sk/relacie',
//     'http://www.markiza.sk/serialy',
//     'http://www.markiza.sk/filmy',
//     'http://www.markiza.sk/tv-program',
//     'http://www.markiza.sk/soubiz',
//     'http://videoarchiv.markiza.sk/najnovsie/zabava',
//     'http://videoarchiv.markiza.sk/najnovsie/show',
//     'http://farma.markiza.sk/',
//     'http://reflex.markiza.sk/',
//     'http://smotanka.markiza.sk/',
//     'http://burlivevino.markiza.sk/',
//     'http://hornadolna.markiza.sk/',
//     'http://www.markiza.sk/filmy-a-serialy/1684658_susedia',
//     'http://www.markiza.sk/filmy-a-serialy/645056_dva-a-pol-chlapa-vii',
//     'http://www.markiza.sk/filmy-a-serialy/644873_kobra-11-xiii',
//     'http://www.markiza.sk/filmy-a-serialy/644726_monk-iv',
//     'http://www.markiza.sk/filmy-a-serialy/643959_star-trek',
//     'http://www.markiza.sk/filmy-a-serialy/1795432_profesor-v-ringu',
//     'http://www.markiza.sk/soubiz/zahranicny/1796825_zahalena-selena-ale-do-oci-sa-jej-aj-tak-nikto-nepozeral',
//     'http://www.markiza.sk/soubiz/zahranicny/1797427_plavky-z-victorias-secret-na-modelkach-a-obycajnych-zenach',
//     'http://rodinnepripady.markiza.sk/aktualne/1795877_rodinne-pripady-obeta',
//     'http://rodinnepripady.markiza.sk/aktualne/1795872_rodinne-pripady-syncek',
//     'http://zamenamanzeliek.markiza.sk/aktualne/1675937_zamena-manzeliek-dvojosobna-povaha',
//     'http://www.markiza.sk/soubiz/zahranicny/1797178_richard-krajco-v-objati-s-krasnou-rysavkou',
//     'http://www.markiza.sk/soubiz/1797390_jeden-den-s-trtom'
// ];
// var original = [];
// var changed_cache = [];
// var changed_url = [];

// casper.start();
// casper.then(function() {
//     var data = fs.read('defaults.txt'),
//         default_data = data.split(';;');
//     for (var i = 0; i < default_data.length; i++) {
//         if (default_data[i] == '') {
//             continue;
//         }
//         original.push(default_data[i]);
//     }
// });


// function sleep (milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//         if ((new Date().getTime() - start) > milliseconds) {
//             break;
//         }
//     }
// }

// var index = 0;
// var cache_urls = [];
// for (var i = 0; i < urls.length; i++) {
//     cache_urls.push('http://webcache.googleusercontent.com/search?q=cache%3A' + urls[i]);
// }
// for (var i = 0; i < urls.length; i++) {
//     casper.then(function() {
//         this.thenOpen(cache_urls[index], function() {
//             this.echo('KONTROLA -> ' + urls[index]);
//             if (this.exists('#google-cache-hdr')) {
//                 var target = this.getHTML('#google-cache-hdr > div:first-child').replace(/(<([^>]+)>)/ig,"");
//                 if (target != original[index]) {
//                     this.echo('ZMENA!');
//                     this.echo('POVODNE: ' + original[index]);
//                     this.echo('NOVE: ' + target);
//                     changed_cache.push(target);
//                     changed_url.push(urls[index]);
//                     original[index] = target;
//                 }
//             }
//             else {
//                 this.echo('CAPTCHA?!!');
//             }
//             index++;
//             sleep(1000 * 60 * 1000);
//         });
//     });
// }

// casper.then(function() {
//     if (changed_cache.length) {
//         this.echo('Zmenilo sa ' + changed_cache.length + ' stranok');
//         for (var i = 0; i < changed_cache.length; i++) {
//             var time = new Date().toLocaleString();
//             fs.write(save, changed_url[i] + ';' + time + ';' + changed_cache[i] + '\n', 'a');
//         }
//         fs.write(dsave, '', 'w');
//         for (var i = 0; i < original.length; i++) {
//             fs.write(dsave, original[i] + ';;', 'a');
//         }
//     }
//     else {
//         this.echo('Nic sa nezmenilo!');
//     }
// });

// casper.run();