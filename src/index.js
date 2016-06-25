// TODO: Render the `App` component to the DOM


var app = ReactDOM.render(<App searchYT={window.searchYouTube} data={window.exampleVideoData} />, document.getElementById('app'));


// var options = {};

// searchYouTube(options, function(data) {
//   app.setState({
//     videoPlayer: data[0],
//     videoList: data
//   });
// });