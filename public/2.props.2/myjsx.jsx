var ComponentOne = React.createClass({
  render: function() {
    return (
      <div>
        <h1> This is component one </h1>
        <ComponentTwo
          propString="this is string from ComponentOne"
          propObject={ { name: 'Tomy', type:"dog"} }
          propArray={ [ { name: 'Tom', type:"Cat"},
                        { name: 'Jerry', type:"Mouse"},
                        { name: 'Butch', type:"Dog"}
                      ] }
          />
      </div>
    );
  }
});

var ComponentTwo = React.createClass({
  render: function() {
    return (
      <div>
        <h3> this is component two </h3>
        <p>{this.props.propString}</p>
        <p>{this.props.propObject.name}
          &nbsp; {this.props.propObject.type}</p>
        <p>{this.props.propArray[0].name}
          &nbsp; {this.props.propArray[1].name}
          &nbsp; {this.props.propArray[2].name}
        </p>
      </div>
    )
  }
});

ReactDOM.render(
  <ComponentOne/>,
  document.getElementById("mountpoint")
);
