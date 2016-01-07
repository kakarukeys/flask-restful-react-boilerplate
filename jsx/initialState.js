"use strict";

/* the initial app state */

var initialState = {
  data: [
    {company: "Apple", label: "Iphone 6", value: 300000},
    {company: "Apple", label: "Iphone 6 Plus", value: 200000},
    {company: "Apple", label: "Iphone 5S", value: 60000},
    {company: "Apple", label: "Iphone 5C", value: 50000},
    {company: "Samsung", label: "Galaxy S6", value: 700000},
    {company: "Samsung", label: "Galaxy Note", value: 530000},
    {company: "Samsung", label: "Galaxy Note 4", value: 20000},
    {company: "Samsung", label: "Galaxy S5", value: 400000},
    {company: "Xiaomi", label: "Mi4", value: 19000},
    {company: "Xiaomi", label: "Mi3", value: 7000},
    {company: "Xiaomi", label: "Mi Note", value: 6500},
    {company: "HTC", label: "HTC One", value: 15000},
    {company: "BlackBerry", label: "BlackBerry Passport", value: 7000},
    {company: "LG", label: "LG G Flex2", value: 8000}
  ],
  filters: {company: ''},
  activeRoute: {name: "landing", routeParams: []}
};

module.exports = initialState;
