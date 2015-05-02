/** @jsx React.DOM */
var React = require("react"),
    _ = require("underscore"),
    handlers = require("./../handlers");

var App = React.createClass({
  getInitialState: function() {
    return this.props.initialState;
  },

  componentWillMount: function() {
    var that = this;

    handlers.loadData().then(function(response) {
      that.setState(response);
    });
  },

  render: function() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <h3>Messages from the back:</h3>
            <ul>
              {_.map(this.state.messages, function(msg, i) {
                return (<li key={ i }>{ msg }</li>);
              })}
            </ul>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
