// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
getCss.onclick = function () {
  var re = new XMLHttpRequest();
  re.open("GET", "/style.css");

  re.onreadystatechange = function () {
    // 下载完成，但是不一定成功，成功是2xx，失败是3xx 4xx 5xx
    if (re.readyState === 4) {
      if (re.status >= 200 && re.status < 300) {
        var style = document.createElement("style");
        style.innerHTML = re.response;
        document.head.appendChild(style);
      } else {
        alert("下载css失败");
      }
    }
  }; //   无效
  //   re.onerror = () => {
  //     console.log("请求css失败");
  //   };


  re.send();
};

getJS.onclick = function () {
  var re = new XMLHttpRequest();
  re.open("GET", "/2.js");

  re.onload = function () {
    var script = document.createElement("script");
    script.innerHTML = re.response;
    document.body.appendChild(script);
  };

  re.onerror = function () {
    console.log("请求失败");
  };

  re.send();
};

getHTML.onclick = function () {
  var re = new XMLHttpRequest();
  re.open("get", "/3.html");

  re.onload = function () {
    var div = document.createElement("div");
    div.innerHTML = re.response;
    document.body.appendChild(div);
  };

  re.onerror = function () {
    console.log("请求html失败");
  };

  re.send();
};

getXML.onclick = function () {
  var re = new XMLHttpRequest();
  re.open("get", "./4.xml");

  re.onreadystatechange = function () {
    if (re.readyState === 4 && re.status >= 200 && re.status < 300) {
      var dom = re.responseXML;
      var text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text);
    }
  };

  re.send();
};

getJSON.onclick = function () {
  var re = new XMLHttpRequest();
  re.open("get", "../5.json");

  re.onreadystatechange = function () {
    if (re.readyState === 4 && re.status >= 200 && re.status < 300) {
      var object = JSON.parse(re.response);
      myName.textContent = object.name;
    }
  };

  re.send();
}; // 默认第一页


var n = 1;

getPage.onclick = function () {
  var re = new XMLHttpRequest();
  re.open("get", "/page".concat(n + 1));

  re.onreadystatechange = function () {
    if (re.readyState === 4 && re.status >= 200 && re.status < 300) {
      var arr = JSON.parse(re.response);
      console.log(arr);
      arr.forEach(function (element) {
        var li = document.createElement("li");
        li.textContent = element.id;
        pageData.appendChild(li);
      });
      n += 1;
    }
  };

  re.send();
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.94c07fc7.js.map