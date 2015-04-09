/** @jsx React.DOM */
var React = require("react"),
    App = require("./components/App.js"),
    initialState = require("./initialState"),
    handlers = require("./handlers");

React.render(<App initialState={ initialState } />, document.getElementById("app"));
