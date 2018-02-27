'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.isEmpty = void 0

var isEmpty = function isEmpty (obj) {
  return obj == null || obj === ''
}

exports.isEmpty = isEmpty

var _default = function _default (obj, path, defaultValue) {
  if (obj == null) return defaultValue
  if (isEmpty(path)) return obj
  var keys = path.split('.')
  var length = keys.length
  var foundObject = obj
  var index = 0

  while (foundObject != null && index < length) {
    foundObject = foundObject[keys[index++]]
  }

  return foundObject == null ? defaultValue : foundObject
}

exports.default = _default
