"use strict";

var process = require("./../jsx/handlers");

describe("handlers", function() {
  it("includes a filterChange handler", function() {
    expect(process(
      {filters: {company: ''}},
      "filterChange",
      {name: "company", value: "Xiami"})
    ).toEqual({filters: {company: 'Xiami'}});
  });
});
