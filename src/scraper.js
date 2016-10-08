var scraper = require('website-scraper');
scraper.scrape({
  urls: [
    'https://www.smashingmagazine.com/', // Will be saved with default filename 'index.html'
  ], 
  urlFilter: function(url){
    return url.indexOf('https://www.smashingmagazine.com') === 0;
  },
  directory: '/smashing/',
  subdirectories: [{
    directory: 'img',
    extensions: ['.jpg', '.png', '.svg']
  }, {
    directory: 'js',
    extensions: ['.js']
  }, {
    directory: 'css',
    extensions: ['.css']
  }],
  sources: [{
    selector: 'img',
    attr: 'src'
  }, {
    selector: 'link[rel="stylesheet"]',
    attr: 'href'
  }, {
    selector: 'script',
    attr: 'src'
  }],
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
    }
  }
}).then((result) => {
  console.info("success:", result[0]);
}).catch((err) => {
  console.warn("error:", err);
});
console.info('started...');