"use strict";

var React = require("react"),
    TestUtils = require("react/addons").addons.TestUtils,
    App = require("./../jsx/components/App.js");

describe("App", function() {
  it("render all records in data", function() {
    var app = TestUtils.renderIntoDocument(
      React.createElement(App, {
        initialState: {
          data: [
            {company: "Apple", label: "Iphone 6", value: 300000},
            {company: "Samsung", label: "Galaxy S6", value: 700000},
            {company: "Xiaomi", label: "Mi4", value: 19000}
          ],
          filters: {company: ''}
        }
      })
    );

    var allTextElements = $(app.getDOMNode()).find("text.rd3-treemap-cell-text");
    expect(_.size(allTextElements)).toEqual(4); // one extra, not sure what it is
    expect(allTextElements.text()).toEqual("Iphone 6Galaxy S6Mi4");
  });

  it("should apply filters to data", function() {
    var app = TestUtils.renderIntoDocument(
      React.createElement(App, {
        initialState: {
          data: [
            {company: "Apple", label: "Iphone 6", value: 300000},
            {company: "Samsung", label: "Galaxy S6", value: 700000},
            {company: "Xiaomi", label: "Mi4", value: 19000}
          ],
          filters: {company: "Xiaomi"}
        }
      })
    );

    var $dom = $(app.getDOMNode()),
        allTextElements = $dom.find("text.rd3-treemap-cell-text");
    expect(_.size(allTextElements)).toEqual(2); // one extra, not sure what it is
    expect(allTextElements.text()).toEqual("Mi4");
  });

  it("should handle filterChange event", function() {
    var app = TestUtils.renderIntoDocument(
      React.createElement(App, {
        initialState: {
          data: [
            {company: "Apple", label: "Iphone 6", value: 300000},
            {company: "Samsung", label: "Galaxy S6", value: 700000},
            {company: "Xiaomi", label: "Mi4", value: 19000}
          ],
          filters: {company: ''}
        }
      })
    );

    var $dom = $(app.getDOMNode()),
        filters = $dom.find('input[name="company"]');
    TestUtils.Simulate.change(filters.get(0), {target: {value: "Xiaomi"}});

    var allTextElements = $dom.find("text.rd3-treemap-cell-text");
    expect(_.size(allTextElements)).toEqual(2); // one extra, not sure what it is
    expect(allTextElements.text()).toEqual("Mi4");
  });
});
