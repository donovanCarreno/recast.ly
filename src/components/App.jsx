var App = (props) => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={props.data[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={props.data}/>
    </div>
  </div>

);


// subclass version...
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(window.exampleVideoData);
//     return (
//       <div>
//         <Nav />
//         <div className="col-md-7">
//           <VideoPlayer video={this.props.something}/>
//         </div>
//         <div className="col-md-5">
//         <VideoList videos={window.exampleVideoData}/>
//         </div>
//       </div>
//     );
//   }
// }


// react.createClass version... this version uses 'this' before props
// var App = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Nav />
//         <div className="col-md-7">
//           <VideoPlayer video={this.props.data}/>
//         </div>
//         <div className="col-md-5">
//         <VideoList videos={this.props.data}/>
//         {console.log(this.props.data)}
//         </div>
//       </div>
//     );
//   }
// });

// App.propTypes = {
//   something: React.PropTypes.array.isRequired
// };



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
