"use strict";

var React = require("react");

/* The landing component */

var Landing = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>React Viz Demo</h1>
          <p>Showcasing the power of FB React with a simple interactive visualization about mobile phone sales.</p>
          <p><a className="btn btn-primary btn-lg" href="viz" role="button">Learn more</a></p>
        </div>
      </div>
    );
  }
});

module.exports = Landing;
