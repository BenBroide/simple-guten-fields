/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./src/ColorPicker.js":
/*!****************************!*\
  !*** ./src/ColorPicker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);


var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var ColorPicker = wp.components.ColorPicker;


var ColorPickerComponent = function ColorPickerComponent(_ref) {
  var field = _ref.field;
  var meta_key = field.meta_key,
      label = field.label;
  var FieldControl = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
    showPicker: false
  })(function (_ref2) {
    var showPicker = _ref2.showPicker,
        setState = _ref2.setState,
        handleValueChange = _ref2.handleValueChange;
    var color = select('core/editor').getEditedPostAttribute('meta')[meta_key];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        margin: '20px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      onClick: function onClick() {
        setState({
          showPicker: !showPicker
        });
      },
      style: {
        display: 'flex'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", null, "Pick Color for ", label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        height: '22px',
        width: '200px',
        backgroundColor: color
      }
    })), showPicker && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPicker, {
      color: color,
      onChangeComplete: function onChangeComplete(value) {
        handleValueChange(value);
      }
    }));
  });
  FieldControl = withSelect(function (select) {
    return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, select('core/editor').getEditedPostAttribute('meta')[meta_key]);
  })(FieldControl);
  FieldControl = withDispatch(function (dispatch) {
    return {
      handleValueChange: function handleValueChange(value) {
        dispatch('core/editor').editPost({
          meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, value.hex)
        });
      }
    };
  })(FieldControl);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FieldControl, null));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPickerComponent);

/***/ }),

/***/ "./src/MediaUpload.js":
/*!****************************!*\
  !*** ./src/MediaUpload.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



var Button = wp.components.Button;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    useSelect = _wp$data.useSelect;
var ALLOWED_MEDIA_TYPES = ['image'];

var ImagePlaceholder = function ImagePlaceholder() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    style: {
      width: '100%',
      height: '100px',
      backgroundColor: 'gray',
      border: '1px solid black',
      padding: '5px',
      color: '#fff',
      textAlign: 'center'
    }
  }, "SET IMAGE");
};

var mediaUpload = function mediaUpload(_ref) {
  var field = _ref.field;
  var meta_key = field.meta_key,
      label = field.label;
  var imageId = useSelect(function (select) {
    var _select$getEditedPost;

    return (_select$getEditedPost = select('core/editor').getEditedPostAttribute('meta')) === null || _select$getEditedPost === void 0 ? void 0 : _select$getEditedPost[meta_key];
  });
  var imageUrl = useSelect(function (select) {
    var _select$getEntityReco;

    return (_select$getEntityReco = select('core').getEntityRecord('postType', 'attachment', imageId)) === null || _select$getEntityReco === void 0 ? void 0 : _select$getEntityReco.source_url;
  }, [imageId]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: function onSelect(media) {
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, media.id)
      });
    },
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: imageId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        onClick: open
      }, !imageUrl ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ImagePlaceholder, null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        style: {
          textAlign: 'center'
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
        style: {
          maxWidth: '200px'
        },
        src: imageUrl
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        className: 'components-button is-secondary'
      }, "Click to Select ", label));
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (mediaUpload);

/***/ }),

/***/ "./src/RepeaterControl.js":
/*!********************************!*\
  !*** ./src/RepeaterControl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controlsIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlsIndex */ "./src/controlsIndex.js");



var _wp$data = wp.data,
    select = _wp$data.select,
    withDispatch = _wp$data.withDispatch,
    useSelect = _wp$data.useSelect;

var InnerControlComponent = function InnerControlComponent(props) {
  var _select$getEditedPost;

  var key = props.key,
      field = props.field,
      row_index = props.row_index,
      property_key = props.property_key,
      repeater_record_label = props.repeater_record_label;
  var ControlField = _controlsIndex__WEBPACK_IMPORTED_MODULE_2__["default"]['text'];
  var repeaterValues = (_select$getEditedPost = select('core/editor').getEditedPostAttribute('meta')) === null || _select$getEditedPost === void 0 ? void 0 : _select$getEditedPost[props.meta_key];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ControlField, {
    key: key,
    field: field,
    row_index: row_index,
    property_key: property_key,
    repeater_record_label: repeater_record_label,
    repeater_values: repeaterValues
  });
};

var ControlField = function ControlField(_ref) {
  var _show_in_rest$schema, _show_in_rest$schema$;

  var addItem = _ref.addItem,
      removeItem = _ref.removeItem,
      field = _ref.field,
      controlsIndex = _ref.controlsIndex;
  var meta_key = field.meta_key,
      label = field.label,
      show_in_rest = field.show_in_rest;
  var properties = show_in_rest === null || show_in_rest === void 0 ? void 0 : (_show_in_rest$schema = show_in_rest.schema) === null || _show_in_rest$schema === void 0 ? void 0 : (_show_in_rest$schema$ = _show_in_rest$schema.items) === null || _show_in_rest$schema$ === void 0 ? void 0 : _show_in_rest$schema$.properties;
  var propertiesKeys = Object.entries(properties).map(function (item) {
    return item[0];
  });
  var repeaterValues = useSelect(function (select) {
    var _select$getEditedPost2;

    return (_select$getEditedPost2 = select('core/editor').getEditedPostAttribute('meta')) === null || _select$getEditedPost2 === void 0 ? void 0 : _select$getEditedPost2[meta_key];
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, "".concat(label), " (Repeater field):"), Array.isArray(repeaterValues) && repeaterValues.map(function (row, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      key: "repeaterValues".concat(index).concat(meta_key)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("b", null, "Repeater Record ", index + 1, ":")), propertiesKeys.map(function (property_key, innerIndex) {
      var innerField = properties[property_key];
      innerField.meta_key = meta_key;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerControlComponent, {
        key: index + property_key,
        field: innerField,
        row_index: index,
        property_key: property_key,
        repeater_record_label: "".concat(label, " ").concat(property_key),
        repeater_values: repeaterValues,
        control_index: controlsIndex
      });
    }), index > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      onClick: function onClick() {
        removeItem(meta_key, index, repeaterValues);
      }
    }, "Remove line ", index + 1), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    style: {
      marginTop: '10px'
    },
    onClick: function onClick() {
      addItem(meta_key, repeaterValues);
    }
  }, "Add Item"));
};

ControlField = withDispatch(function (dispatch) {
  return {
    addItem: function addItem(meta_key, repeaterValues) {
      repeaterValues.push({});
      var repeaterValuesCopy = repeaterValues.splice(0);
      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, repeaterValuesCopy)
      });
    },
    removeItem: function removeItem(meta_key, index, repeaterValues) {
      if (confirm("Confirm delete")) {
        repeaterValues = repeaterValues.filter(function (obj, loopIndex) {
          return loopIndex !== index;
        });
        dispatch('core/editor').editPost({
          meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, repeaterValues)
        });
      }
    }
  };
})(ControlField);

var RepeaterControl = function RepeaterControl(_ref2) {
  var field = _ref2.field,
      controlsIndex = _ref2.controlsIndex;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ControlField, {
    field: field,
    controlsIndex: controlsIndex
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RepeaterControl);

/***/ }),

/***/ "./src/SelectControl.js":
/*!******************************!*\
  !*** ./src/SelectControl.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;
var SelectControl = wp.components.SelectControl;

var SelectControlComponent = function SelectControlComponent(_ref) {
  var field = _ref.field;
  var meta_key = field.meta_key,
      options = field.options,
      label = field.label;

  var SelectControlField = function SelectControlField(_ref2) {
    var value = _ref2.value,
        handleSelectChange = _ref2.handleSelectChange;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Set ".concat(label),
      value: select('core/editor').getEditedPostAttribute('meta')[meta_key],
      onChange: function onChange(value) {
        return handleSelectChange(value);
      },
      options: options
    });
  };

  SelectControlField = withSelect(function (select) {
    return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, select('core/editor').getEditedPostAttribute('meta')[meta_key]);
  })(SelectControlField);
  SelectControlField = withDispatch(function (dispatch) {
    return {
      handleSelectChange: function handleSelectChange(value) {
        dispatch('core/editor').editPost({
          meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, value)
        });
      }
    };
  })(SelectControlField);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControlField, null));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectControlComponent);

/***/ }),

/***/ "./src/TextControl.js":
/*!****************************!*\
  !*** ./src/TextControl.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select,
    withDispatch = _wp$data.withDispatch,
    useSelect = _wp$data.useSelect;
var TextControl = wp.components.TextControl;
var ControlField = withSelect(function (select, props) {
  var _props$field = props.field,
      label = _props$field.label,
      meta_key = _props$field.meta_key;
  var row_index = props.row_index,
      property_key = props.property_key;
  var value = select('core/editor').getEditedPostAttribute('meta')[meta_key];
  var key = meta_key + row_index + property_key;

  if (typeof row_index === 'undefined') {
    return {
      value: value,
      key: key,
      label: "Set ".concat(label)
    };
  }

  return {
    value: value[row_index][property_key],
    key: key,
    label: "Set ".concat(property_key.replace('_', ' '))
  };
})(TextControl);
/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch, props) {
  var meta_key = props.field.meta_key;
  var row_index = props.row_index,
      property_key = props.property_key;
  return {
    onChange: function onChange(value) {
      var newValue = value;

      if (typeof row_index !== 'undefined') {
        var _select$getEditedPost;

        var repeaterValues = (_select$getEditedPost = select('core/editor').getEditedPostAttribute('meta')) === null || _select$getEditedPost === void 0 ? void 0 : _select$getEditedPost[meta_key];
        newValue = repeaterValues.map(function (row, innerIndex) {
          return innerIndex === row_index ? _objectSpread(_objectSpread({}, row), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, property_key, value)) : row;
        });
      }

      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, newValue)
      });
    }
  };
})(ControlField));

/***/ }),

/***/ "./src/TextareaControl.js":
/*!********************************!*\
  !*** ./src/TextareaControl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    select = _wp$data.select,
    withDispatch = _wp$data.withDispatch,
    useSelect = _wp$data.useSelect;
var TextareaControl = wp.components.TextareaControl;
var ControlField = withSelect(function (select, props) {
  var _props$field = props.field,
      label = _props$field.label,
      meta_key = _props$field.meta_key;
  var row_index = props.row_index,
      property_key = props.property_key;
  var value = select('core/editor').getEditedPostAttribute('meta')[meta_key];
  var key = meta_key + row_index + property_key;
  var rows = 20;

  if (typeof row_index === 'undefined') {
    return {
      value: value,
      key: key,
      rows: rows,
      label: "Set ".concat(label)
    };
  }

  return {
    value: value[row_index][property_key],
    key: key,
    rows: rows,
    label: "Set ".concat(property_key.replace('_', ' '))
  };
})(TextareaControl);
/* harmony default export */ __webpack_exports__["default"] = (withDispatch(function (dispatch, props) {
  var meta_key = props.field.meta_key;
  var row_index = props.row_index,
      property_key = props.property_key;
  return {
    onChange: function onChange(value) {
      var newValue = value;

      if (typeof row_index !== 'undefined') {
        var _select$getEditedPost;

        var repeaterValues = (_select$getEditedPost = select('core/editor').getEditedPostAttribute('meta')) === null || _select$getEditedPost === void 0 ? void 0 : _select$getEditedPost[meta_key];
        newValue = repeaterValues.map(function (row, innerIndex) {
          return innerIndex === row_index ? _objectSpread(_objectSpread({}, row), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, property_key, value)) : row;
        });
      }

      dispatch('core/editor').editPost({
        meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, newValue)
      });
    }
  };
})(ControlField));

/***/ }),

/***/ "./src/controlsIndex.js":
/*!******************************!*\
  !*** ./src/controlsIndex.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextControl */ "./src/TextControl.js");
/* harmony import */ var _TextareaControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextareaControl */ "./src/TextareaControl.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker */ "./src/ColorPicker.js");
/* harmony import */ var _SelectControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectControl */ "./src/SelectControl.js");
/* harmony import */ var _MediaUpload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaUpload */ "./src/MediaUpload.js");
/* harmony import */ var _RepeaterControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RepeaterControl */ "./src/RepeaterControl.js");






var controlsIndex = {
  text: _TextControl__WEBPACK_IMPORTED_MODULE_0__["default"],
  textarea: _TextareaControl__WEBPACK_IMPORTED_MODULE_1__["default"],
  color: _ColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"],
  select: _SelectControl__WEBPACK_IMPORTED_MODULE_3__["default"],
  media: _MediaUpload__WEBPACK_IMPORTED_MODULE_4__["default"],
  repeater: _RepeaterControl__WEBPACK_IMPORTED_MODULE_5__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (controlsIndex);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextControl */ "./src/TextControl.js");
/* harmony import */ var _TextareaControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextareaControl */ "./src/TextareaControl.js");
/* harmony import */ var _SelectControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectControl */ "./src/SelectControl.js");
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ColorPicker */ "./src/ColorPicker.js");
/* harmony import */ var _MediaUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MediaUpload */ "./src/MediaUpload.js");
/* harmony import */ var _RepeaterControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RepeaterControl */ "./src/RepeaterControl.js");









var controlsIndex = {
  text: _TextControl__WEBPACK_IMPORTED_MODULE_3__["default"],
  textarea: _TextareaControl__WEBPACK_IMPORTED_MODULE_4__["default"],
  color: _ColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"],
  select: _SelectControl__WEBPACK_IMPORTED_MODULE_5__["default"],
  media: _MediaUpload__WEBPACK_IMPORTED_MODULE_7__["default"],
  repeater: _RepeaterControl__WEBPACK_IMPORTED_MODULE_8__["default"]
};

var CustomFieldsPanel = function CustomFieldsPanel() {
  var fields = window.sgf_data.fields;
  var currentCpt = wp.data.select('core/editor').getCurrentPostType();

  if (!fields.map(function (field) {
    return field.post_type;
  }).includes(currentCpt)) {
    return null;
  }

  if (fields) {
    fields = fields.filter(function (field) {
      return field.post_type == currentCpt;
    });
  }

  var panels = fields.map(function (field) {
    return field.panel;
  }).filter(function (item, i, array) {
    return array.indexOf(item) === i;
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, panels.map(function (panel, panelIndex) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: panelIndex
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__["PluginDocumentSettingPanel"], {
      name: panel,
      title: panel.replace('-', ' ').replace('_', ' '),
      className: "custom-panel"
    }, fields.filter(function (field) {
      return field.panel === panel;
    }).map(function (field, index) {
      var ControlHoc = controlsIndex[field.control];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ControlHoc, {
        key: index,
        field: field,
        controlsIndex: controlsIndex
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null));
    })));
  }));
};

Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__["registerPlugin"])('plugin-document-setting-panel-demo', {
  render: CustomFieldsPanel
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editPost"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map