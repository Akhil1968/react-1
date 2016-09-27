//CommentBox
var CommentBox = React.createClass({
  loadCommentsFromServer: function() {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    console.log("executing CommentBox:getInitialState");
    return {data: [{id: "0", author: "Authorname", text: "Book"}]};
  },
  componentDidMount: function() {
    console.log("executing CommentBox:componentDidMount");
    //this.loadCommentsFromServer(); // to fetch data in the begining
    setInterval(this.loadCommentsFromServer, this.props.pollInterval); // to keep fatching at intervals
  },
  render: function() {
    console.log("CommentBox:render");
    return (
      <div>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
      </div>
    );
  }
});


// CommentList
var CommentList = React.createClass({
  render: function() {
    var commentHTMLNodes = this.props.data.map(function(comment) {
          return (
            <Comment
              author={comment.author}
              id={comment.id}
              book={comment.text}
              >
            </Comment>
          );
        });
    return (
      <div>
            {commentHTMLNodes}
      </div>
    );
  }
});

// Comment
var Comment = React.createClass({

  render: function() {
    return (
      <div>
        <h5>
          {this.props.id}&nbsp;{this.props.author}&nbsp;{this.props.book}
        </h5>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="/commentsData.json" pollInterval={1000} />,
  document.getElementById('content')
);
