var cacheName = 'static-content-v1';
var dataCache= 'dynamic-content-v1';
var filesToCache = [
  './src/style.css',
  './src/code.js',
  './index.html',
  './vex/dist/css/vex-theme-os.css',
  './vex/dist/css/vex.css',
  './vex/dist/js/vex.combined.min.js',
  './assets/favicon.png',
  './',
];


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }).then(function(){
      self.skipWaiting();
    })
  );
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName&&key !== dataCache) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});




self.addEventListener('fetch', function(e) {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
   console.log(e.request);
  e.respondWith(
      caches.match(e.request).then(function(response){
        if (response) {
          console.log('getting from cache');
          return response;
        }
        else{
          return fetch(e.request).then(function(response){
            if ((e.request.url.startsWith('https://api.github.com')&&response.status==200)||/githubusercontent/.test(e.request.url)){
              var clonedResponse=response.clone();
              caches.open(dataCache).then(function(cache){
                console.log('cloning network req. response in cache');
                cache.put(e.request,clonedResponse);
              });
            }
            console.log('getting from network');
            return response;
          });
        }
      })
  );
});


/*self.addEventListener('fetch', function(e) {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
  //console.log(e.request);
  e.respondWith(
    fetch(e.request).then(function(response){
      if ((e.request.url.startsWith('https://api.github.com')&&response.status==200)||/githubusercontent/.test(e.request.url)){
        var clonedResponse=response.clone();
        caches.open(dataCache).then(function(cache){
          console.log('cloning network req. response in cache');
          cache.put(e.request,clonedResponse);
        });
      }
      console.log('getting from network');
      return response;
    }).catch(function(){
      return caches.match(e.request).then(function(response){
        if(response){
          console.log('getting from cache');
          return response;
        }
      });
    })
  );
});*/



      /*caches.match(e.request).then(function(response){
        if (response) {
          console.log('getting from cache');
          return response;
        }
        //else{
         
        //}
      })*/






/*self.addEventListener('fetch', function(e) {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
   console.log(e.request);
  if(e.request.url.startsWith('https://api.github.com')){
      console.log('in if');
    e.respondWith(
      caches.open(dataCache).then(function(cache){
       return fetch(e.request).then(function(response){
        console.log(response);
          cache.put(e.request,response.clone());
          return response;
        });
      })
    );
  }

  else{
    e.respondWith(
    caches.match(e.request).then(function(response){
      console.log('in else');
      console.log(response);
      return response||fetch(e.request);
    })

    );
  }   
});*/





/*self.addEventListener('fetch', function(e) {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if(response){
        return response;
      }
      else{
        return fetch(e.request).then(function(response){
          return response;
        });
      } 
    })
  );
});*/


/*self.addEventListener('fetch', function(e) {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') return;
  
  e.respondWith(
    fetch(e.request).then(function(response){
      console.log(e.request);
      console.log(response);
      console.log(response.ok);
      if(!response.ok&&e.request.url.startsWith('https://jsonplaceholder.typicode.com')){
        console.log('response not ok from fetch');
        console.log('checking request in cahce');
        return caches.match(e.request);
      }
      else{
        if(e.request.url.startsWith('https://jsonplaceholder.typicode.com')){
          console.log('cloning');
          var res=response.clone();
          caches.open(dataCache).then(function(cache){
            cache.put(e.request,res);
          });
        }
        console.log('response is ok from fetch');
        return response;
      }
    }).catch(function(err){
      console.log('return offline page');
      return caches.match('/offline.html');
    })

 );
   
});*/



