class ComponentOne extends React.Component{
  render() {
    return (
      <div className="well">
        <h3> This is component one </h3>
        <ComponentTwo
          propString="this is string from ComponentOne"
          propObject={ { name: 'Bravo', type:"DOG"} }
          propArray={ [ { name: 'Tom', type:"Cat"},
                        { name: 'Jerry', type:"Mouse"},
                        { name: 'Donald', type:"Duck"}
                      ] }
          />
      </div>
    );
  }
}

class ComponentTwo extends React.Component{
  render() {
    return (
      <div className="well">
        <h3> this is component two </h3>
        <p>{this.props.propString}</p>
        <p>{this.props.propObject.name} is a {this.props.propObject.type}</p>
        <p>{this.props.propArray[0].name}&nbsp;{this.props.propArray[0].type}</p>
        <p>{this.props.propArray[1].name}&nbsp;{this.props.propArray[1].type}</p>
        <p>{this.props.propArray[2].name}&nbsp;{this.props.propArray[2].type}</p>
        
      </div>
    )
  }
};

ReactDOM.render(
  <ComponentOne/>,
  document.getElementById("mountpoint")
);
