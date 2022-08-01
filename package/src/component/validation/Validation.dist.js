"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var validate = function validate(type, value) {
  switch (type) {
    case 'email':
      var isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      return isValid ? '' : 'Invalid email';

    default:
      break;
  }
};

var _default = validate;
exports.default = _default;
