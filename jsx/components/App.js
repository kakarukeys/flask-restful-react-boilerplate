"use strict";

var React = require("react"),
    dispatcher = require("./../dispatcher"),
    process = require("./../handlers"),
    CompanyFilter = require("./CompanyFilter"),
    rd3 = require('react-d3');

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

  filterData: function(data, filters) {
    var applicableFilters = _.object(_.filter(_.pairs(filters), 1));

    return _.where(data, applicableFilters);
  },

  render: function() {
    var Treemap = rd3.Treemap;

    return (
      <div className="container">
        <div className="row">
          <h2>Handphone sales volume in last 24 hours</h2>

          <CompanyFilter selected={this.state.filters.company} />

          <Treemap
            data={this.filterData(this.state.data, this.state.filters)}
            width={1000}
            height={400}
            textColor="#484848"
            fontSize="12px"
          />
        </div>
      </div>
    );
  }
});

module.exports = App;
