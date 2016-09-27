var QuadraticCalculator = React.createClass({
  getInitialState: function() {
    return {
      a: 1,
      b: 3,
      c: -4
    };
  },

  /**
   * This function will be re-bound in render multiple times. Each .bind() will
   * create a new function that calls this with the appropriate key as well as
   * the event. The key is the key in the state object that the value should be
   * mapped from.
   */
  handleInputChange: function(key, event) {
    var partialState = {};
    partialState[key] = parseFloat(event.target.value);
    this.setState(partialState);
  },

  render: function() {
    var a = this.state.a;
    var b = this.state.b;
    var c = this.state.c;
    var root = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    var denominator = 2 * a;
    var x1 = (-b + root) / denominator;
    var x2 = (-b - root) / denominator;
    return (
      <div >
        <strong>
          <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
        </strong>

        <p>
          <label>
            a: <input type="number" value={a} onChange={this.handleInputChange.bind(null, 'a')} />
          </label>
          &nbsp;&nbsp;
          <label>
            b: <input type="number" value={b} onChange={this.handleInputChange.bind(null, 'b')} />
          </label>
          &nbsp;&nbsp;
          <label>
            c: <input type="number" value={c} onChange={this.handleInputChange.bind(null, 'c')} />
          </label>
          <br/>
           <h4>x = {x1}, {x2}</h4>
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('qdr')
);
