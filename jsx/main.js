var React = require("react"),
    App = require("./components/App.js"),
    initialState = require("./initialState");

/* bind main app component to DOM */

React.render(<App initialState={ initialState } />, document.getElementById("app"));
