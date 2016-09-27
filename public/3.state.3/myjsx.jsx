      var Timer = React.createClass({

        getInitialState() {
          return {
            time: 0
          };
        },

        componentDidMount() {
          this.timer = setInterval(this.tick, 1000);
        },

        componentWillUnmount() {
          this.timer && clearInterval(this.timer);
        },

        tick() {
          this.setState({time: this.state.time + 1});
        },


        render() {
          return <div>Time: {this.state.time}</div>;
        }
      });

      ReactDOM.render(
        <Timer />,
        document.getElementById("container")
      );
