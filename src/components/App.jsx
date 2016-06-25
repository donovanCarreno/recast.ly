class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: props.data,
      videoPlayer: props.data[0]
    };
  }

  clickHandler(thing) {
    this.setState({videoPlayer: thing});
  }



  callback(data) {
    this.setState({
      videoPlayer: data[0],
      videoList: data
    });
  }

  search(options, callback) {
    this.props.searchYT(options, callback);
  }

  handleSearch(e) {
    console.log(e.target.value);
    var options = {};
    options.query = e.target.value;
    var boundSearch = this.search.bind(this);
    boundSearch(options, this.callback.bind(this));
  } 

  render() {
    return (
      <div>
        <Nav onSearch={this.handleSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList onSelect={this.clickHandler.bind(this)}videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
