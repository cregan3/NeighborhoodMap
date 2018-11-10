var staticCacheName = 'FEWD-static-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(staticCacheName).then((cache) => {
    return cache.addAll(['./',
      'index.html',
      'css/style.css',
      'js/app.js',
      'sw.js',
      'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
      'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
      'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
      'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2',
      'https://maps.googleapis.com/maps/api/js/AuthenticationService.Authenticate?1sfile%3A%2F%2F%2FG%3A%2Fneighborhood%2520map%2FRegan%2520Work%2Findex10.html&4sAIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&callback=_xdc_._iexp2k&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=117808',
      'https://maps.googleapis.com/maps/api/js/QuotaService.RecordEvent?1sfile%3A%2F%2F%2FG%3A%2Fneighborhood%2520map%2FRegan%2520Work%2Findex10.html&3sAIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&7sc0p6p7&10e1&callback=_xdc_._m39nk2&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=126220',
      'https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo?1m6&1m2&1d40.62598161059629&2d-74.25003861385835&2m2&1d40.85567437549297&2d-73.74619641989148&2u13&4sen-US&5e0&6sm%40443000000&7b0&8e0&callback=_xdc_._skocnr&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=39596',
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&v=3&callback=initMap',
      'https://maps.googleapis.com/maps/vt?pb=!1m4!1m3!1i13!2i2410!3i3078!1m4!1m3!1i13!2i2410!3i3079!1m4!1m3!1i13!2i2411!3i3078!1m4!1m3!1i13!2i2411!3i3079!1m4!1m3!1i13!2i2412!3i3078!1m4!1m3!1i13!2i2412!3i3079!1m4!1m3!1i13!2i2413!3i3078!1m4!1m3!1i13!2i2413!3i3079!1m4!1m3!1i13!2i2414!3i3078!1m4!1m3!1i13!2i2414!3i3079!1m4!1m3!1i13!2i2410!3i3080!1m4!1m3!1i13!2i2411!3i3080!1m4!1m3!1i13!2i2412!3i3080!1m4!1m3!1i13!2i2413!3i3080!1m4!1m3!1i13!2i2414!3i3080!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e3!12m1!5b1!23i1301875&callback=_xdc_._5oom5j&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=69500',
      'https://maps.googleapis.com/maps/vt?pb=!1m4!1m3!1i13!2i2410!3i3078!1m4!1m3!1i13!2i2410!3i3079!1m4!1m3!1i13!2i2411!3i3078!1m4!1m3!1i13!2i2411!3i3079!1m4!1m3!1i13!2i2412!3i3078!1m4!1m3!1i13!2i2412!3i3079!1m4!1m3!1i13!2i2413!3i3078!1m4!1m3!1i13!2i2413!3i3079!1m4!1m3!1i13!2i2414!3i3078!1m4!1m3!1i13!2i2414!3i3079!1m4!1m3!1i13!2i2410!3i3080!1m4!1m3!1i13!2i2411!3i3080!1m4!1m3!1i13!2i2412!3i3080!1m4!1m3!1i13!2i2413!3i3080!1m4!1m3!1i13!2i2414!3i3080!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e3!12m1!5b1!23i1301875&callback=_xdc_._5oom5j&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=69500',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2410!3i3078!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=2341',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2410!3i3079!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=81440',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2410!3i3080!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=80022',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2411!3i3078!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=61768',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2411!3i3079!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=9796',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2411!3i3080!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=8378',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2412!3i3078!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=121195',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2412!3i3079!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=69223',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2412!3i3080!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=67805',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2413!3i3078!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=49551',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2413!3i3079!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=128650',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2413!3i3080!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=127232',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2414!3i3078!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=108978',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2414!3i3079!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=57006',
      'https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i13!2i2414!3i3080!4i256!2m3!1e0!2sm!3i443148466!3m9!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0!5m1!5f2!23i1301875&key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&token=55588',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/common.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/controls.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/infowindow.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/map.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/marker.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/onion.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/stats.js',
      'https://maps.googleapis.com/maps-api-v3/api/js/33/10a/util.js',
      'https://maps.gstatic.com/mapfiles/api-3/images/cb_scout5_hdpi.png',
      'https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png',
      'https://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png',
      'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
      'https://maps.gstatic.com/mapfiles/api-3/images/sv9.png',
      'https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4_hdpi.png',
      'https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl_hdpi.png',
      'https://maps.gstatic.com/mapfiles/openhand_8_8.cur',
      'https://maps.gstatic.com/mapfiles/mv/imgs8.png',
      'https://maps.gstatic.com/mapfiles/transparent.png',
      ]);
  }));
});

/**
 * Activate Service worker and delete old cache (if any) add new cache
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((cacheNames) => {
    return Promise.all(cacheNames.filter((cacheName) => {
      return cacheName.startsWith('mws-') && cacheName != staticCacheName;
    }).map((cacheName) => {
      return caches.delete(cacheName);
    }));
  }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((response) => {
    return response ||
    caches.open(staticCacheName).then((cache) => {
      return fetch(event.request).then((response) => {
        if(event.request.url.indexOf('index.html') != -1 ){
          cache.put(event.request, response.clone());
        }
        return response;
      });
    });
  }).catch(function() {
      return new Response("cache fail")
  })
  );
});
