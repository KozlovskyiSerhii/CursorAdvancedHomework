"use strict";

require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.string.replace-all.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
(() => {
  "use strict";

  var _s;
  const s = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  console.log(function () {
    return (this.tax * this.middleSalary).toFixed(2);
  }.call({
    tax: .195,
    middleSalary: 1789,
    vacancies: 11476
  })), console.log((s => {
    const e = [];
    return e.push([s[0], s[2]]), e.push([s[1], s[3]]), e.push([s[4], s[5]]), e;
  })(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]));
  let e = new (_s = /*#__PURE__*/new WeakMap(), class {
    constructor(s, e, t) {
      _classPrivateFieldInitSpec(this, _s, {
        writable: true,
        value: void 0
      });
      this.university = s, this.course = e, this.fullName = t, _classPrivateFieldSet(this, _s, [5, 4, 4, 5]), this.dismiss = !1;
    }
    getInfo() {
      return "\u0421\u0442\u0443\u0434\u0435\u043D\u0442 ".concat(this.course, "\u0433\u043E \u043A\u0443\u0440\u0441\u0443 ").concat(this.university, " \u043C.\u041E\u0434\u0435\u0441\u0430, ").concat(this.fullName);
    }
    getAverage() {
      return this.dismiss ? null : (_classPrivateFieldGet(this, _s).reduce((s, e) => s + e, 0) / _classPrivateFieldGet(this, _s).length).toFixed(1);
    }
    dismissed() {
      this.dismiss = !0, console.log("студента виключили");
    }
    recover() {
      this.dismiss = !1, console.log("студента поновили");
    }
    get getMarks() {
      return !0 !== this.dismiss ? _classPrivateFieldGet(this, _s) : null;
    }
    set addMarks(s) {
      return !0 !== this.dismiss ? _classPrivateFieldGet(this, _s).push(s) : null;
    }
  })("Національний Університет Львівська Політехніка", 3, "Козловський Сергій Олександрович");
  console.log(e.getInfo()), console.log(function (s) {
    const e = [];
    for (let t = 0; t < s.length; t++) s[t] % 5 == 0 && e.push(s[t]);
    return e;
  }([6, 2, 55, 11.1, 78, 2, 55.1, 77, 57, 87, 23, 2, 56, 25, 45, 5, 85, 95, 5, 35, 25, 20, 40, 50, 100, 3, 2, 43, 34, 36, 86, 89, 23, 12, 15, 10, 1, 44, 46])), console.log(function (s) {
    let e = 0;
    for (; s > 0;) {
      const t = s % 10;
      t > e && (e = t), s = Math.floor(s / 10);
    }
    return e;
  }(7973710130127499e13)), console.log("Повертає список предметів для конкретного студента. Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл:", function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : s[0];
    return Object.keys(e.subjects).map(s => s.toUpperCase().slice(0, 1) + s.toLowerCase().slice(1).replaceAll("_", " "));
  }(s[1]).join(", "), "\n\n"), function () {
    const s = document.createElement("div");
    function e() {
      let s = "#";
      for (let e = 0; e < 6; e++) s += "0123456789ABCDEF"[Math.floor(16 * Math.random())];
      return s;
    }
    s.style.display = "flex", s.style.flexWrap = "wrap", s.style.width = "250px", s.style.margin = "50px auto";
    for (let t = 0; t < 25; t++) {
      const t = document.createElement("div");
      t.style.width = "50px", t.style.height = "50px", t.style.backgroundColor = e(), s.appendChild(t);
    }
    document.body.appendChild(s), setInterval(() => {
      document.querySelectorAll("div > div").forEach(s => {
        s.style.backgroundColor = e();
      });
    }, 1e3);
  }();
})();
