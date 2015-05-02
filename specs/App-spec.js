var React = require("react"),
	TestUtils = require('react/addons').addons.TestUtils,
	App = require('./../jsx/components/App.js');

describe("App", function() {

  it("should be wrapped with a div", function() {
    var app = TestUtils.renderIntoDocument(
    	React.createElement(App, {
  			initialState: {messages: []}
		}));
    expect(app.getDOMNode().tagName).toEqual('DIV');
  });
});
