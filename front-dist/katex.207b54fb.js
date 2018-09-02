// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"C:\\Users\\phyto\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:\\Users\\phyto\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:\\Users\\phyto\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\bundle-url.js"}],"..\\..\\node_modules\\katex\\dist\\katex.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./fonts\\KaTeX_AMS-Regular.woff2":[["KaTeX_AMS-Regular.4c5973e1.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_AMS-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_AMS-Regular.woff2"],"./fonts\\KaTeX_AMS-Regular.woff":[["KaTeX_AMS-Regular.c5b9812e.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_AMS-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_AMS-Regular.woff"],"./fonts\\KaTeX_AMS-Regular.ttf":[["KaTeX_AMS-Regular.80682e16.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_AMS-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_AMS-Regular.ttf"],"./fonts\\KaTeX_Caligraphic-Bold.woff2":[["KaTeX_Caligraphic-Bold.c0dc98f2.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Bold.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Bold.woff2"],"./fonts\\KaTeX_Caligraphic-Bold.woff":[["KaTeX_Caligraphic-Bold.7d767768.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Bold.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Bold.woff"],"./fonts\\KaTeX_Caligraphic-Bold.ttf":[["KaTeX_Caligraphic-Bold.377a9989.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Bold.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Bold.ttf"],"./fonts\\KaTeX_Caligraphic-Regular.woff2":[["KaTeX_Caligraphic-Regular.ab604446.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Regular.woff2"],"./fonts\\KaTeX_Caligraphic-Regular.woff":[["KaTeX_Caligraphic-Regular.f378f219.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Regular.woff"],"./fonts\\KaTeX_Caligraphic-Regular.ttf":[["KaTeX_Caligraphic-Regular.25fb625b.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Caligraphic-Regular.ttf"],"./fonts\\KaTeX_Fraktur-Bold.woff2":[["KaTeX_Fraktur-Bold.3d1540be.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Bold.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Bold.woff2"],"./fonts\\KaTeX_Fraktur-Bold.woff":[["KaTeX_Fraktur-Bold.196a0a81.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Bold.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Bold.woff"],"./fonts\\KaTeX_Fraktur-Bold.ttf":[["KaTeX_Fraktur-Bold.c7635e97.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Bold.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Bold.ttf"],"./fonts\\KaTeX_Fraktur-Regular.woff2":[["KaTeX_Fraktur-Regular.bac9023d.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Regular.woff2"],"./fonts\\KaTeX_Fraktur-Regular.woff":[["KaTeX_Fraktur-Regular.dc3419bd.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Regular.woff"],"./fonts\\KaTeX_Fraktur-Regular.ttf":[["KaTeX_Fraktur-Regular.50d5b3db.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Fraktur-Regular.ttf"],"./fonts\\KaTeX_Main-Bold.woff2":[["KaTeX_Main-Bold.ac6b47f7.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Bold.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Bold.woff2"],"./fonts\\KaTeX_Main-Bold.woff":[["KaTeX_Main-Bold.8c25cd49.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Bold.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Bold.woff"],"./fonts\\KaTeX_Main-Bold.ttf":[["KaTeX_Main-Bold.c572cf0b.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Bold.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Bold.ttf"],"./fonts\\KaTeX_Main-BoldItalic.woff2":[["KaTeX_Main-BoldItalic.8a905cd5.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-BoldItalic.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-BoldItalic.woff2"],"./fonts\\KaTeX_Main-BoldItalic.woff":[["KaTeX_Main-BoldItalic.7d3246b5.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-BoldItalic.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-BoldItalic.woff"],"./fonts\\KaTeX_Main-BoldItalic.ttf":[["KaTeX_Main-BoldItalic.2a7a5c37.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-BoldItalic.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-BoldItalic.ttf"],"./fonts\\KaTeX_Main-Italic.woff2":[["KaTeX_Main-Italic.782c8505.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Italic.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Italic.woff2"],"./fonts\\KaTeX_Main-Italic.woff":[["KaTeX_Main-Italic.75735362.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Italic.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Italic.woff"],"./fonts\\KaTeX_Main-Italic.ttf":[["KaTeX_Main-Italic.a93ae5b4.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Italic.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Italic.ttf"],"./fonts\\KaTeX_Main-Regular.woff2":[["KaTeX_Main-Regular.67742315.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Regular.woff2"],"./fonts\\KaTeX_Main-Regular.woff":[["KaTeX_Main-Regular.bcad6e38.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Regular.woff"],"./fonts\\KaTeX_Main-Regular.ttf":[["KaTeX_Main-Regular.173d25c5.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Main-Regular.ttf"],"./fonts\\KaTeX_Math-BoldItalic.woff2":[["KaTeX_Math-BoldItalic.2f7d02d5.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-BoldItalic.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-BoldItalic.woff2"],"./fonts\\KaTeX_Math-BoldItalic.woff":[["KaTeX_Math-BoldItalic.fa129971.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-BoldItalic.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-BoldItalic.woff"],"./fonts\\KaTeX_Math-BoldItalic.ttf":[["KaTeX_Math-BoldItalic.bebad2a2.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-BoldItalic.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-BoldItalic.ttf"],"./fonts\\KaTeX_Math-Italic.woff2":[["KaTeX_Math-Italic.0313294e.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-Italic.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-Italic.woff2"],"./fonts\\KaTeX_Math-Italic.woff":[["KaTeX_Math-Italic.ad5838a4.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-Italic.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-Italic.woff"],"./fonts\\KaTeX_Math-Italic.ttf":[["KaTeX_Math-Italic.df24d1e6.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-Italic.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Math-Italic.ttf"],"./fonts\\KaTeX_SansSerif-Bold.woff2":[["KaTeX_SansSerif-Bold.50f2d255.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Bold.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Bold.woff2"],"./fonts\\KaTeX_SansSerif-Bold.woff":[["KaTeX_SansSerif-Bold.bbd98fe3.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Bold.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Bold.woff"],"./fonts\\KaTeX_SansSerif-Bold.ttf":[["KaTeX_SansSerif-Bold.2240f13d.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Bold.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Bold.ttf"],"./fonts\\KaTeX_SansSerif-Italic.woff2":[["KaTeX_SansSerif-Italic.7b5487bb.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Italic.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Italic.woff2"],"./fonts\\KaTeX_SansSerif-Italic.woff":[["KaTeX_SansSerif-Italic.ea508c5c.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Italic.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Italic.woff"],"./fonts\\KaTeX_SansSerif-Italic.ttf":[["KaTeX_SansSerif-Italic.dc973123.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Italic.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Italic.ttf"],"./fonts\\KaTeX_SansSerif-Regular.woff2":[["KaTeX_SansSerif-Regular.96f461e9.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Regular.woff2"],"./fonts\\KaTeX_SansSerif-Regular.woff":[["KaTeX_SansSerif-Regular.f032462c.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Regular.woff"],"./fonts\\KaTeX_SansSerif-Regular.ttf":[["KaTeX_SansSerif-Regular.dbd6b88e.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_SansSerif-Regular.ttf"],"./fonts\\KaTeX_Script-Regular.woff2":[["KaTeX_Script-Regular.e8003cc9.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Script-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Script-Regular.woff2"],"./fonts\\KaTeX_Script-Regular.woff":[["KaTeX_Script-Regular.94753a28.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Script-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Script-Regular.woff"],"./fonts\\KaTeX_Script-Regular.ttf":[["KaTeX_Script-Regular.0d38a4de.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Script-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Script-Regular.ttf"],"./fonts\\KaTeX_Size1-Regular.woff2":[["KaTeX_Size1-Regular.821ce73f.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size1-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size1-Regular.woff2"],"./fonts\\KaTeX_Size1-Regular.woff":[["KaTeX_Size1-Regular.f1301c14.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size1-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size1-Regular.woff"],"./fonts\\KaTeX_Size1-Regular.ttf":[["KaTeX_Size1-Regular.da0a201a.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size1-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size1-Regular.ttf"],"./fonts\\KaTeX_Size2-Regular.woff2":[["KaTeX_Size2-Regular.18de27e1.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size2-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size2-Regular.woff2"],"./fonts\\KaTeX_Size2-Regular.woff":[["KaTeX_Size2-Regular.511880cd.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size2-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size2-Regular.woff"],"./fonts\\KaTeX_Size2-Regular.ttf":[["KaTeX_Size2-Regular.9098e79c.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size2-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size2-Regular.ttf"],"./fonts\\KaTeX_Size3-Regular.woff2":[["KaTeX_Size3-Regular.d2a541d8.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size3-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size3-Regular.woff2"],"./fonts\\KaTeX_Size3-Regular.woff":[["KaTeX_Size3-Regular.9cbbb798.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size3-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size3-Regular.woff"],"./fonts\\KaTeX_Size3-Regular.ttf":[["KaTeX_Size3-Regular.f9f4a146.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size3-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size3-Regular.ttf"],"./fonts\\KaTeX_Size4-Regular.woff2":[["KaTeX_Size4-Regular.4b67620b.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size4-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size4-Regular.woff2"],"./fonts\\KaTeX_Size4-Regular.woff":[["KaTeX_Size4-Regular.0f6de2ac.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size4-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size4-Regular.woff"],"./fonts\\KaTeX_Size4-Regular.ttf":[["KaTeX_Size4-Regular.dfa2527b.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size4-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Size4-Regular.ttf"],"./fonts\\KaTeX_Typewriter-Regular.woff2":[["KaTeX_Typewriter-Regular.7e96e38a.woff2","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Typewriter-Regular.woff2"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Typewriter-Regular.woff2"],"./fonts\\KaTeX_Typewriter-Regular.woff":[["KaTeX_Typewriter-Regular.68298930.woff","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Typewriter-Regular.woff"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Typewriter-Regular.woff"],"./fonts\\KaTeX_Typewriter-Regular.ttf":[["KaTeX_Typewriter-Regular.3fcfb3e9.ttf","..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Typewriter-Regular.ttf"],"..\\..\\node_modules\\katex\\dist\\fonts\\KaTeX_Typewriter-Regular.ttf"],"_css_loader":"C:\\Users\\phyto\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\css-loader.js"}],"C:\\Users\\phyto\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '6787' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\phyto\\AppData\\Roaming\\npm\\node_modules\\parcel-bundler\\src\\builtins\\hmr-runtime.js"], null)