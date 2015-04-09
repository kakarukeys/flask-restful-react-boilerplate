var $ = require("jquery");

var handlers = {
	loadData: function() {
		return $.get("/api/query");
	}
};

module.exports = handlers;
