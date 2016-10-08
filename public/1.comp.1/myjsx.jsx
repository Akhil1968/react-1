
var MyComponent = React.createClass({
    render: function(){
        var x1 = this.props.first;
        var x2 = this.props.second;
        var z  = x1 + parseInt(x2);
        console.log(z);
        return (
          <div>
            <h1>Is'nt react amazing!</h1>
            <h3>{this.props.msg}</h3>
            <p> {z} </p>
          </div>
        );
    }
});



ReactDOM.render(<MyComponent msg= "Hello" first={4}   second={"5"}/>, document.getElementById('mydiv1') );

ReactDOM.render(<MyComponent msg= "Good Morning" first={5}   second={1}/>, document.getElementById('mydiv2') );
