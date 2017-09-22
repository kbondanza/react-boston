"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","964417443a6438398fb74d90f1091bac"],["static/css/main.25d17f2e.css","54cade6d8d63598a7454df3de9a52a5f"],["static/js/main.d6eb864f.js","717aa1688b5c9bba5c7c9833f0e8a7ee"],["static/media/ari_rizzitano.6dc91e58.jpg","6dc91e58f9666d478df4321e0a7acf04"],["static/media/ben_briggs.4577fa93.jpg","4577fa936ccea37ff6f1ae302fa4a93b"],["static/media/ben_ilegbodu.d1a3f900.jpg","d1a3f9007db5dd757b3142ab50618006"],["static/media/brendan_mcloughlin.18989742.jpg","189897420a443d90858a4c6e58333f95"],["static/media/brian_hough.f6c2b87e.jpg","f6c2b87e1d9917d3f3e8cee609eb732b"],["static/media/carly_litchfield.455d18d7.jpg","455d18d7d4f9e44456e94dde37bbbcb8"],["static/media/christina_holland.4e37d11b.jpg","4e37d11b4ca8e978b3063320c41f7b6a"],["static/media/copley.8aea849b.jpg","8aea849be4ebb49b3f0c8ab00d5a110e"],["static/media/dhaivat_pandya.f8cff767.jpg","f8cff767a41acebf9059bcc9a7ffb476"],["static/media/divya_sasidharan.1a25b752.jpg","1a25b752609fe65ef958416f690722d8"],["static/media/henry_zhu.f0d0aa2c.jpg","f0d0aa2c02f613de3d69fbf1406560c9"],["static/media/hero.21de8e70.jpg","21de8e702a76c9e506abd9c24b8bbc12"],["static/media/jason_clark.79bad419.jpg","79bad4196f07ba4d5f6ad792e5ada689"],["static/media/kaylie_alexa_kwon.ba33ebc3.jpg","ba33ebc35c9710c9a0d5f3c5d221a09b"],["static/media/ken_wheeler.2ca232a9.jpg","2ca232a95d7a0b087cea8eed434da112"],["static/media/kenton_jacobson.56b8653d.jpg","56b8653d03e568c30a6a9bceaae5b5da"],["static/media/latin@s_in_tech.00ac493f.jpg","00ac493f6c7a90f612006e7b13ffdde4"],["static/media/marcel_cutts.067a42f7.jpg","067a42f7baf54fda29dff67fce8fe33a"],["static/media/mark_erikson.8983c702.jpg","8983c702f4375a4facc0e43ae3b42e5f"],["static/media/matt_degennaro.1b5bf8db.jpg","1b5bf8dbd41ab7a29ffe5f1c826812a1"],["static/media/natalie_qabazard.398aa0a6.jpg","398aa0a677952e382b719034fe30b09a"],["static/media/pluralsight.b17db68c.png","b17db68c409ecf4d9fde93341538ae22"],["static/media/sasha_aickin.6b830684.jpg","6b830684e8de125d350767697be5d1cb"],["static/media/sgo.9b2a3727.png","9b2a3727f5e4e1382fa080a7e405dd64"],["static/media/stan_bershadskiy.abfd1d26.jpg","abfd1d26f4e371cccdd03e4e4c4b0d74"],["static/media/theo_pak.7121da37.jpg","7121da3726bde846f188b407874ebfcb"],["static/media/thomas_marek.ec6cb23a.jpg","ec6cb23a8652fd117b5311adec0eb1d9"],["static/media/vincent_riemer.cdeb1f9c.jpg","cdeb1f9c75af486ea8d55bc2f317ab44"],["static/media/vladimir_novick.a6823027.jpg","a68230274587c8d037445fb5ba86d243"],["static/media/wayfair.6d61bd01.png","6d61bd016a464fe9906c3cf50ab5067c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});