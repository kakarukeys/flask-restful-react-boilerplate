"use strict";

var React = require("react"),
    dispatcher = require("./../dispatcher");

/* radiobox to select company */

var CompanyFilter = React.createClass({
  handleChange: function(event) {
    // push to global event bus
    dispatcher.trigger("filterChange", {name: "company", value: event.target.value});
  },

  render: function() {
    var that = this,
        options = [
          {value: "", label: "All"},
          {value: "Apple", label: "Apple"},
          {value: "Samsung", label: "Samsung"},
          {value: "Xiaomi", label: "Xiaomi"},
          {value: "HTC", label: "HTC"},
          {value: "BlackBerry", label: "BlackBerry"},
          {value: "LG", label: "LG"}
        ];

    return (
      <div>
        {_.map(options, function(opt, i) {
          var checked = (opt.value === that.props.selected);

          return (
            <div className="radio-inline" key={i}>
              <label>
                <input type="radio" name="company" value={opt.value} defaultChecked={checked} onChange={that.handleChange} />
                {opt.label}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = CompanyFilter;
