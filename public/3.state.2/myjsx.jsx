var ComponentOne = React.createClass({
  getInitialState: function() {
    return {
      firstname: "Chacha",
      lastname: "Chaudhary",
      age: 53
    }
  },

  handleClick: function() {
    if(this.state.firstname === "Gabbar" && this.state.lastname === "Singh") {
      this.setState({
        firstname: "Chacha",
        lastname: "Chaudhary",
        age: 55
      });
    } else {
      this.setState({
        firstname: "Gabbar",
        lastname: "Singh",
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
      <div>

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

      <div>
        <h3 className="state-example">This is where all our component state will go </h3>
        <p>
          firstname : {this.state.firstname}
        </p>
        <p>
          lastname: {this.state.lastname}
        </p>
        <p>
          age: {this.state.age}
        </p>
      </div>
      <DataFromState thisState={this.state}/>
      <div>
        <button onClick={this.handleClick}>
          Click Me!
        </button>
      </div>
      <div className="input-box">
        <h3>
          Display state change of rendering
        </h3>
        <form>
          <input
            type="text"
            onChange={ this.onHandleChange }
            placeholder="type something here"
            />
        </form>
        <p>
          {this.state.input_text}
        </p>
      </div>


    </div> 
  );
}
});

var ComponentTwo = React.createClass({
  render: function() {
    return (
      <div>

        <h3> this is component two </h3>
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



var DataFromState = React.createClass({

render: function() {
  return (
    <div>
      <h3>Our props from SampleOneComponent state</h3>
      <p>firstname from SampleOneComponent state: {this.props.thisState.firstname}</p>
    </div>
  );
}
});

ReactDOM.render(
  <ComponentOne/>,
  document.getElementById("mountpoint")
);
