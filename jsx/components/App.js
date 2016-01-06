"use strict";

var React = require("react"),
    dispatcher = require("./../dispatcher"),
    process = require("./../handlers"),
    Viz = require("./Viz");

/* The primary app component */

var App = React.createClass({
  getInitialState: function() {
    return this.props.initialState;
  },

  componentWillMount: function() {
    var that = this;

    // update app state on all events
    dispatcher.on("all", function(eventName, eventArgs) {
      that.setState(process(that.state, eventName, eventArgs));
    });
  },

  render: function() {
    return React.createElement(Viz, _.pick(this.state, "filters", "data"));
  }
});

module.exports = App;
