var MyComponent = React.createClass({
    render: function(){
        return (
            <h3>Good {this.props.hour}!</h3>
        );
    }
});

ReactDOM.render(
  <MyComponent hour="Morning"/>,  document.getElementById('myDiv1')
);

ReactDOM.render(
  <MyComponent hour="Evening"/>,  document.getElementById('myDiv2')
);

ReactDOM.render(
  <MyComponent hour="Night"/>,  document.getElementById('myDiv3')
);
