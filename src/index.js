// TODO: Render the `App` component to the DOM


var app = ReactDOM.render(<App componentDidMount={window.searchYouTube} searchYT={window.searchYouTube} data={window.exampleVideoData} />, document.getElementById('app'));
