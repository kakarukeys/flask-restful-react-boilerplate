"use strict";

/* event handlers: modify app state and return the new one */

var handlers = {
  filterChange: function(appState, eventArgs) {
    appState.filters[eventArgs.name] = eventArgs.value;
    return appState;
  },

  route: function(appState, eventArgs) {
    appState.activeRoute = eventArgs;
    return appState;
  }
};

function process(appState, eventName, eventArgs) {
  /* dispatch to individual event handler */
  return handlers[eventName](appState, eventArgs);
}

module.exports = process;
