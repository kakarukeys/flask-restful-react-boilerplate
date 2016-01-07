"use strict";

var React = require("react"),
    rd3 = require('react-d3'),
    CompanyFilter = require("./CompanyFilter");

/* The visualization component */

var Viz = React.createClass({
  filterData: function(data, filters) {
    var applicableFilters = _.object(_.filter(_.pairs(filters), 1));

    return _.where(data, applicableFilters);
  },

  render: function() {
    var Treemap = rd3.Treemap;

    return (
      <div className="container">
        <a href="">&lt; Home</a>
        <h2>Handphone sales volume in last 24 hours</h2>

        <CompanyFilter selected={this.props.filters.company} />

        <Treemap
          data={this.filterData(this.props.data, this.props.filters)}
          width={1000}
          height={400}
          textColor="#484848"
          fontSize="12px"
        />
      </div>
    );
  }
});

module.exports = Viz;
