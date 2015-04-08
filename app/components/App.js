/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li>I left a message</li>
          <li>I left a second message</li>
        </ul>
      </div>
    );
  }
});

module.exports = App;
