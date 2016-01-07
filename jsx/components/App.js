"use strict";

var dispatcher = require("../backbone/dispatcher"),
    router = require("../backbone/router"),
    React = require("react"),
    process = require("../handlers"),
    routes = require("../routes"),
    Landing = require("./Landing"),
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

    // intialize router
    _.each(routes, function(name, route) {
      router.route(route, name);
    });

    // update app state on all routes
    router.on("route", function(name, routeParams) {
      that.setState(process(that.state, "route", {name: name, routeParams: routeParams}));
    });

    // begin monitoring hashchange events, and dispatching routes
    Backbone.history.start({pushState: true});

    // prevent hyperlink from causing request to server, use client-side routing instead
    $(document).on("click", "a:not([data-bypass])", function(e) {
      var href = $(this).attr('href'),
          protocol = this.protocol + '//';

      if (href.slice(0, protocol.length) !== protocol) {
        e.preventDefault();
        router.navigate(href, true);
      }
    });
  },

  render: function() {
    if (this.state.activeRoute.name === "viz") {
      return React.createElement(Viz, _.pick(this.state, "filters", "data"));
    } else {
      return (<Landing />);
    }
  }
});

module.exports = App;
