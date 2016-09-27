
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, It is {this.props.myDate.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <HelloWorld myDate={new Date()} />,
    document.getElementById('example')
  );
}, 500);
