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
      <div>
        <ul>
          {_.map(this.state.messages, function(msg, i) {
            return (<li key={ i }>{ msg }</li>);
          })}
        </ul>
      </div>
    );
  }
});

module.exports = App;
