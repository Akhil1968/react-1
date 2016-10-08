var ComponentOne = React.createClass({
  getInitialState: function() {
    return {
      fname: "Chacha",
      lname: "Chaudhary",
      age: 53
    }
  },

  handleClick: function() {
    if(this.state.fname === "Saboo" && this.state.lname === "The Assistant") {
      this.setState({
        fname: "Chacha",
        lname: "Chaudhary",
        age: 55
      });
    } else {
      this.setState({
        fname: "Saboo",
        lname: "The Assistant",
        age: 34
      });
    }
  },

  onHandleChange: function(e) {
    e.preventDefault();
    this.setState({
      input_text: e.target.value
    });

  },
  render: function() {
    return (
      <div className="well well-lg">
        <div>
          <h3 className="state-example">This is where all our component state will go </h3>
          <p>
            firstname : {this.state.fname}
            &nbsp; lastname: {this.state.lname}
            &nbsp; age: {this.state.age}
          </p>
          <button className="bth btn-success" onClick={this.handleClick}>
            Change</button>
        </div>



        <div>
          <h5>
            Display state change of rendering
          </h5>
          <form >
            <input
              type="text"
              onChange={ this.onHandleChange }
              placeholder="type something"
              />
            &nbsp;{this.state.input_text}
          </form>
        </div>


      <ComponentTwo
            propString="this is string from ComponentOne"
            propObject={ { name: 'Tomy', type:"dog"} }
            propArray={ [ { name: 'Tom', type:"Cat"},
            { name: 'Jerry', type:"Mouse"},
            { name: 'Butch', type:"Dog"}
          ] }
          />

      <ComponentThree thisState={this.state}/>
    </div>
  );
}
});

var ComponentTwo = React.createClass({
  render: function() {
    return (
      <div className="well">
        <h3>ComponentTwo</h3>
        <p>
          {this.props.propString}
        </p>
        <p>
          {this.props.propObject.name}
          &nbsp; {this.props.propObject.type}
        </p>
        <p>
          {this.props.propArray[0].name}
          &nbsp; {this.props.propArray[1].name}
          &nbsp; {this.props.propArray[2].name}
        </p>
      </div>
    )
  }
});



var ComponentThree = React.createClass({
render: function() {
  return (
    <div className="well">
      <h3>Props from ComponentThree </h3>
      <p> Firstname: {this.props.thisState.fname}
      &nbsp; Lastname: {this.props.thisState.lname} </p>
    </div>
  );
}
});

ReactDOM.render(
  <ComponentOne/>,
  document.getElementById("mountpoint")
);
