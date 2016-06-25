var searchYouTube = (options, callback) => {
  
  options.query = options.query || 'cats';
  options.max = options.max || 5;
  options.key = options.key || window.YOUTUBE_API_KEY;

  console.log('searching for: ', options);
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + options.query + '&type=video&key=' + options.key + '&maxResults=' + options.max + '&videoEmbeddable=true',
    type: 'GET',
    error: function(data) {
      console.log('ERROR!!!');
    }
  })

  .done(function(data) {
    callback(data.items);
  });

};

window.searchYouTube = searchYouTube;
