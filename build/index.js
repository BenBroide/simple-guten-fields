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

/***/ "./src/ColorPickerHoc.js":
/*!*******************************!*\
  !*** ./src/ColorPickerHoc.js ***!
  \*******************************/
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


var ColorPickerHoc = function ColorPickerHoc(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (ColorPickerHoc);

/***/ }),

/***/ "./src/MediaUploadHoc.js":
/*!*******************************!*\
  !*** ./src/MediaUploadHoc.js ***!
  \*******************************/
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

var mediaUploadHoc = function mediaUploadHoc(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (mediaUploadHoc);

/***/ }),

/***/ "./src/RepeaterControlHoc.js":
/*!***********************************!*\
  !*** ./src/RepeaterControlHoc.js ***!
  \***********************************/
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
    useSelect = _wp$data.useSelect;
var TextControl = wp.components.TextControl;

var RepeaterControlHoc = function RepeaterControlHoc(_ref) {
  var _show_in_rest$schema, _show_in_rest$schema$;

  var field = _ref.field;
  var meta_key = field.meta_key,
      label = field.label,
      show_in_rest = field.show_in_rest;
  var properties = show_in_rest === null || show_in_rest === void 0 ? void 0 : (_show_in_rest$schema = show_in_rest.schema) === null || _show_in_rest$schema === void 0 ? void 0 : (_show_in_rest$schema$ = _show_in_rest$schema.items) === null || _show_in_rest$schema$ === void 0 ? void 0 : _show_in_rest$schema$.properties;
  var propertiesKeys = Object.entries(properties).map(function (item) {
    return item[0];
  });

  var ControlField = function ControlField(_ref2) {
    var value = _ref2.value,
        handleFieldChange = _ref2.handleFieldChange,
        addItem = _ref2.addItem,
        removeItem = _ref2.removeItem;
    var arrayValues = useSelect(function (select) {
      var _select$getEditedPost;

      return (_select$getEditedPost = select('core/editor').getEditedPostAttribute('meta')) === null || _select$getEditedPost === void 0 ? void 0 : _select$getEditedPost[meta_key];
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, label, ":"), arrayValues.map(function (row, index) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        key: "arrayValues".concat(index)
      }, propertiesKeys.map(function (propertyKey, innerIndex) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
          key: index + propertyKey,
          label: "Set ".concat(label, " ").concat(propertyKey, " ").concat(index + 1),
          value: arrayValues[index][propertyKey],
          onChange: function onChange(value) {
            handleFieldChange(arrayValues, index, propertyKey, value);
          }
        });
      }), index > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
        onClick: function onClick() {
          removeItem(index, arrayValues);
        }
      }, "Remove line ", index + 1), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null));
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      style: {
        marginTop: '10px'
      },
      onClick: function onClick() {
        addItem(arrayValues);
      }
    }, "Add Item"));
  };

  ControlField = withDispatch(function (dispatch) {
    return {
      handleFieldChange: function handleFieldChange(arrayValues, index, propertyKey, value) {
        arrayValues[index] = arrayValues[index];
        arrayValues[index][propertyKey] = value;
        var arrayValuesCopy = arrayValues.splice(0);
        dispatch('core/editor').editPost({
          meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, arrayValuesCopy)
        });
      },
      addItem: function addItem(arrayValues) {
        arrayValues.push({});
        var arrayValuesCopy = arrayValues.splice(0);
        dispatch('core/editor').editPost({
          meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, arrayValuesCopy)
        });
      },
      removeItem: function removeItem(index, arrayValues) {
        if (confirm("Confirm delete")) {
          delete arrayValues[index];
          arrayValues = arrayValues.filter(function (obj) {
            return typeof obj !== 'undefined';
          });
          dispatch('core/editor').editPost({
            meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, arrayValues)
          });
        }
      }
    };
  })(ControlField);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ControlField, null));
};

/* harmony default export */ __webpack_exports__["default"] = (RepeaterControlHoc);

/***/ }),

/***/ "./src/SelectControlHoc.js":
/*!*********************************!*\
  !*** ./src/SelectControlHoc.js ***!
  \*********************************/
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

var SelectControlHoc = function SelectControlHoc(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (SelectControlHoc);

/***/ }),

/***/ "./src/TextControlHoc.js":
/*!*******************************!*\
  !*** ./src/TextControlHoc.js ***!
  \*******************************/
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
    useSelect = _wp$data.useSelect,
    select = _wp$data.select;
var TextControl = wp.components.TextControl;

var TextFieldHoc = function TextFieldHoc(_ref) {
  var field = _ref.field;
  var meta_key = field.meta_key,
      label = field.label;

  var FieldControl = function FieldControl(_ref2) {
    var value = _ref2.value,
        handleValueChange = _ref2.handleValueChange;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      label: "Set ".concat(label),
      value: value,
      onChange: function onChange(value) {
        return handleValueChange(value);
      }
    });
  };

  FieldControl = withSelect(function (select) {
    return {
      value: select('core/editor').getEditedPostAttribute('meta')[meta_key]
    };
  })(FieldControl);
  FieldControl = withDispatch(function (dispatch) {
    return {
      handleValueChange: function handleValueChange(value) {
        dispatch('core/editor').editPost({
          meta: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, meta_key, value)
        });
      }
    };
  })(FieldControl);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FieldControl, null));
};

/* harmony default export */ __webpack_exports__["default"] = (TextFieldHoc);

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
/* harmony import */ var _TextControlHoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextControlHoc */ "./src/TextControlHoc.js");
/* harmony import */ var _SelectControlHoc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectControlHoc */ "./src/SelectControlHoc.js");
/* harmony import */ var _ColorPickerHoc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorPickerHoc */ "./src/ColorPickerHoc.js");
/* harmony import */ var _MediaUploadHoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MediaUploadHoc */ "./src/MediaUploadHoc.js");
/* harmony import */ var _RepeaterControlHoc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RepeaterControlHoc */ "./src/RepeaterControlHoc.js");








var controlsIndex = {
  text: _TextControlHoc__WEBPACK_IMPORTED_MODULE_3__["default"],
  color: _ColorPickerHoc__WEBPACK_IMPORTED_MODULE_5__["default"],
  select: _SelectControlHoc__WEBPACK_IMPORTED_MODULE_4__["default"],
  media: _MediaUploadHoc__WEBPACK_IMPORTED_MODULE_6__["default"],
  repeater: _RepeaterControlHoc__WEBPACK_IMPORTED_MODULE_7__["default"]
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

  console.log(fields);
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
        field: field
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