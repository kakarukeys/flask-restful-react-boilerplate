var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require("./components/App.js"),
    initialState = require("./initialState");

/* bind main app component to DOM */

ReactDOM.render(<App initialState={ initialState } />, document.getElementById("app"));
