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
   

  render() {
    return (
      <div>
        <Nav />
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
