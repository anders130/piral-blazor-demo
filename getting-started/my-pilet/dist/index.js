//@pilet v:2(esbuildpr_mypilet,{})
System.register(["react", "react-router-dom"], function (_export, _context) {
  "use strict";

  var React, Link, Page;
  function setup(app) {
    app.registerPage("/page", Page);
    app.showNotification("Hello from Piral!", {
      autoClose: 2e3
    });
    app.registerMenu(function () {
      return /* @__PURE__ */React.createElement(Link, {
        to: "/page"
      }, "Page");
    });
    app.registerTile(function () {
      return /* @__PURE__ */React.createElement("div", null, "Welcome to Piral!");
    }, {
      initialColumns: 2,
      initialRows: 2
    });
  }
  _export("setup", setup);
  return {
    setters: [function (_react) {
      React = _react;
    }, function (_reactRouterDom) {
      Link = _reactRouterDom.Link;
    }],
    execute: function () {
      // src/index.tsx
      Page = React.lazy(function () {
        return _context["import"]("./Page-KCKSFKMT.js");
      });
    }
  };
});