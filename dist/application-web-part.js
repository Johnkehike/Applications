define("cf8a2e70-6a16-45b7-95c8-52ecc55ef82a_0.0.1", ["@microsoft/sp-property-pane","ApplicationWebPartStrings","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-webpart-base"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_KI9e__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "ngvn");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "AWKX":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/application/ApplicationWebPart.module.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".application_c4ef26cb .container_c4ef26cb{width:100%;margin:2px auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.application_c4ef26cb .row_c4ef26cb{margin:0 -8px;box-sizing:border-box;color:\"[theme:white, default: #ffffff]\";background-color:#14279b;padding:20px}.application_c4ef26cb .row_c4ef26cb:after,.application_c4ef26cb .row_c4ef26cb:before{display:table;content:\"\";line-height:0}.application_c4ef26cb .row_c4ef26cb:after{clear:both}.application_c4ef26cb .column_c4ef26cb{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .application_c4ef26cb .column_c4ef26cb{float:left}[dir=rtl] .application_c4ef26cb .column_c4ef26cb{float:right}.application_c4ef26cb .column_c4ef26cb .ms-Grid_c4ef26cb{padding:0}@media (min-width:640px){.application_c4ef26cb .column_c4ef26cb{width:83.33333333333334%}}@media (min-width:1024px){.application_c4ef26cb .column_c4ef26cb{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .application_c4ef26cb .column_c4ef26cb{left:16.66667%}[dir=rtl] .application_c4ef26cb .column_c4ef26cb{right:16.66667%}}@media (min-width:640px){[dir=ltr] .application_c4ef26cb .column_c4ef26cb{left:8.33333%}[dir=rtl] .application_c4ef26cb .column_c4ef26cb{right:8.33333%}}.application_c4ef26cb .title_c4ef26cb{font-size:21px;font-weight:100;color:\"[theme:white, default: #ffffff]\";font-weight:700;text-align:center}.application_c4ef26cb .subTitle_c4ef26cb{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\";font-weight:700;text-align:center;margin:0 auto}.application_c4ef26cb .description_c4ef26cb{font-size:17px;font-weight:300;color:\"[theme:white, default: #ffffff]\"}.application_c4ef26cb .button_c4ef26cb{text-decoration:none;width:200px;border-color:#5c7aea;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-weight:400;border-width:0;text-align:center;padding:0 16px;margin:2px 0}.application_c4ef26cb .button_c4ef26cb,.application_c4ef26cb .button_c4ef26cb .label_c4ef26cb{height:32px;background-color:#5c7aea;color:\"[theme:white, default: #ffffff]\";font-size:14px;cursor:pointer;display:inline-block}.application_c4ef26cb .button_c4ef26cb .label_c4ef26cb{font-weight:600;line-height:32px;margin:0 4px;vertical-align:top;border:none}.application_c4ef26cb .button_c4ef26cb .child_c4ef26cb{text-align:center;margin:0 auto}", ""]);


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "KI9e":
/*!********************************************!*\
  !*** external "ApplicationWebPartStrings" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_KI9e__;

/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "bZ5J":
/*!********************************************************************!*\
  !*** ./lib/webparts/application/ApplicationWebPart.module.scss.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ApplicationWebPart.module.css */ "ivKG");
var styles = {
    application: 'application_c4ef26cb',
    container: 'container_c4ef26cb',
    row: 'row_c4ef26cb',
    column: 'column_c4ef26cb',
    'ms-Grid': 'ms-Grid_c4ef26cb',
    title: 'title_c4ef26cb',
    subTitle: 'subTitle_c4ef26cb',
    description: 'description_c4ef26cb',
    button: 'button_c4ef26cb',
    label: 'label_c4ef26cb',
    child: 'child_c4ef26cb'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "ivKG":
/*!****************************************************************!*\
  !*** ./lib/webparts/application/ApplicationWebPart.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src??postcss!./ApplicationWebPart.module.css */ "AWKX");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ngvn":
/*!********************************************************!*\
  !*** ./lib/webparts/application/ApplicationWebPart.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApplicationWebPart.module.scss */ "bZ5J");
/* harmony import */ var ApplicationWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ApplicationWebPartStrings */ "KI9e");
/* harmony import */ var ApplicationWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ApplicationWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var ApplicationWebPart = /** @class */ (function (_super) {
    __extends(ApplicationWebPart, _super);
    function ApplicationWebPart() {
        // public render(): void {
        //   this.domElement.innerHTML = `
        //   <div>
        //   <div>
        //   <table border='10' bgcolor='blue'>
        //   <tr>
        //   <td>Customer Name</td>
        //   <td> <input type='text' id='textcustomername' /> </td>
        //   </tr>
        //   <tr>
        //   <td>Customer Complaint</td>
        //   <td><textarea rows='3' cols='10' type='text' id='textcustomercomplaint'></textarea>
        //   </td>
        //   </tr>
        //   <tr>
        //   <td>Customer email</td><td><input type='text' id='textcustomeremail' /></td>
        //   </tr>
        //   <tr>
        //   <td>Customer location</td><td>
        //   <select id='textcustomerlocation'>
        //   <option value='Lagos'>Lagos</option>
        //   <option value='Benin'>Benin</option>
        //   <option value='Portharcourt'>Portharcourt</option>
        //   <option value='Accra'>Accra</option>
        //   </select>
        //   </td>
        //   </tr>
        //   <td>
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function (ev) {
            ev.preventDefault();
            console.log('clicked event');
        };
        return _this;
    }
    //   </td>
    //   <td>
    //   <input type='submit' value='Submit Item' id='btnsubmit'>
    //   </td>
    //   </table>
    //   </div>
    //   <div id='divstatus'></div>
    //   </div>
    //   `;
    //   this.bindevents;
    // }
    // private bindevents(): void{
    //   this.domElement.querySelector('#btnsubmit').addEventListener('click', () => { this.addlistitem ();});
    // }
    // private addlistitem(): void {
    //   var customerName = document.getElementById("#textcustomername")["value"];
    //   var customerComplaint = document.getElementById("#textcustomercomplaint")["value"];
    //   var customerEmail = document.getElementById("#textcustomeremail")["value"];
    //   var customerLocation = document.getElementById("#textcustomerlocation")["value"];
    //   const siteurl: string= this.context.pageContext.site.absoluteUrl + "/_api/web/lists/getByTitle('Sabi')/items";
    //   const itembody: any={
    //   "Customer Name": customerName,
    //   "Customer complain": customerComplaint,
    //   "customer_email": customerEmail,
    //    "Location": customerLocation,
    //   };
    //   const sphttpClientOptions: ISPHttpClientOptions={
    //     "body": JSON.stringify(itembody)
    //   };
    //   this.context.spHttpClient.post(siteurl, SPHttpClient.configurations.v1, sphttpClientOptions)
    //   .then((response: SPHttpClientResponse) => {
    //     if (response.status === 201){
    //       let statusmessage: Element = this.domElement.querySelector('#divstatus');
    //       statusmessage.innerHTML = "List Item has been added successully";
    //       this.clear();
    //     }else {
    //       let statusmessage: Element = this.domElement.querySelector('#divstatus');
    //       statusmessage.innerHTML = "An error has occured i.e"+ response.status + " "+ response.statusText;
    //     }
    //   });
    // }
    //    private clear(): void {
    //     document.getElementById("#textcustomername")["value"]=' ';
    //     document.getElementById("#textcustomercomplaint")["value"]='';
    //     document.getElementById("#textcustomeremail")["value"]='';
    // //     document.getElementById("#textcustomerlocation")["value"]='Accra';
    // }
    ApplicationWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n    <div class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].application + "\">\n    <div class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].container + "\">\n      <div class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].row + "\">\n        <div class=\"\" >\n        <P class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].title + "\">APPLICATION PORTAL</p>\n        <p class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].subTitle + "\">\n        <p class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].description + "\">" + Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["escape"])(this.properties.description) + "</p>\n        <a href=\"http://2faapp:8080/Vasco2FAService/GlobalSearch\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">2FA</button></a>\n\n        <a href=\"https://devops-server2/AccountEnquiry\" onClick={this.onClick} class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\" onClick={this.onClick} >ACCOUNT ENQUIRY</button></a>\n\n        <a href=\"https://appserver2/ATMCustodian\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">ATM CUSTODIAN PORTAL</button></a>\n\n        <a href=\"http://cognos/Reports/Pages/Folder.aspx?ItemPath=%2fBranch+Reports&ViewMode=Detail\" onClick={this.onClick} class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\" onClick={this.onClick} >BRANCH REPORT</button></a>\n\n        <a href=\"https://appserver-ii:8181/UpdateBVNtoNIBSSR\" onClick={this.onClick} class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\" onClick={this.onClick} >BVN UPDATE PORTAL</button></a>\n\n        <a href=\"https://172.18.192.100:8443/bvnvalidation/login\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">BVN VALIDATION</button></a>\n\n        <a href=\"https://devops-server2/carp\" onClick={this.onClick} class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">CARP</button></a>\n\n        <a href=\"http://appprod-java1:8080/Diesel_Monitoring_Solution/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n        <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">DIESEL MONITORING</button></a>\n\n        <a href=\"https://docapproval/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\"  data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">DOCUMENT APPROVAL</button></a>\n\n          <a href=\"https://unioncollect:7057/OfflineEnvelopeDepositPortalWebLogic\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\"  data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">ENVELOP DEPOSIT PORTAL</button></a>\n\n          <a href=\"https://erequest/login.php?msg=Your%20Session%20Has%20Expired%3C/br%3E2021-01-05%2010:42:25\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\" onClick={this.onClick} data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">EREQUEST</button></a>\n\n          <a href=\"https://etzubn/Console/disable_chrome.jsp\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\"  data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">ETRANZACT</button></a>\n\n          <a href=\"https://appprod-java1/FakeNotesRegisterPortal\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\" onClick={this.onClick} data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">FAKE NOTE REGISTER</button></a>\n\n          <a href=\"https://ubn-fcubslive:9094/FCJNeoWebLive/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">FCUBS</button></a>\n\n         <a href=\"http://cpcibps.unionbank-ng.unionbankgroup.local:9080/omniapp/pages/login/loginapp.jsf\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\"  onClick={this.onClick} data-interception=\"off\">\n          <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">IBPS</button></a>\n\n          <a href=\"https://devops-server2/InstantAccountOpening/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\"  data-interception=\"off\">\n            <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">INSTANT ACC OPENING</button></a>\n\n            <a href=\"https://unioninstant.unionbankng.com/UBNPortal/LoginPage.aspx?ReturnUrl=%2FUBNPortal%2F\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" target=\"_blank\" onClick={this.onClick} data-interception=\"off\">\n            <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">INSTANT CARD</button></a>\n\n            <a href=\"https://service-desk.unionbankng.com/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n            <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">MANAGE ENGINE</button></a>\n\n            <a href=\"http://10.8.1.210:8001/mobileadminportal/cevaappl.action\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n            <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">MOBILE BANKING ADMIN</button></a>\n\n            <a href=\"https://eas-server6:8181/MGAgentConnect/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n            <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">MONEYGRAM</button></a>\n\n            <a href=\"http://172.16.10.133/mybankstatement/Login.aspx\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n              <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">MY BANK STATEMENT</button></a>\n\n              <a href=\"https://login.microsoftonline.com/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n              <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">OFFICE365</button></a>\n\n              <a href=\"https://uniononline.unionbankng.com/OnlineBanking/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n              <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">ONLINE BANKING</button></a>\n\n             <a href=\"https://fep-server3:9191/OnlineBankingAdmin/admin/index2.jsp\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n              <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">ONLINE BANKING ADMIN</button></a>\n\n              <a href=\"http://erp_app2_prod.unionbank-ng.unionbankgroup.local:8099/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">ORACLE ERP</button></a>\n\n                <a href=\"https://devops-server2/POS\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">POS TERMINAL</button></a>\n\n                <a href=\"https://postilion:8443/portal/Login.faces\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">POSTILLON</button></a>\n  \n                <a href=\"https://devops-server2/PTAPurchase\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                  <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">PTA APPLICATION PORTAL</button></a>\n\n                <a href=\"https://star.unionbankng.com/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">STAR</button></a>\n\n                <a href=\"https://10.8.4.46:7506/ubn-treasurybill-portal/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">TBILLS</button></a>\n\n                <a href=\"https://fbti-app:9443/tiplus2-global/login\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                  <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">TI PlUS</button></a>\n\n                  <a href=\"https://unioncollectservice/UIP/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                  <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">    UIP    </button></a>\n                  \n                  <a href=\"https://unioncollect:7010/UnionCollectOnline/\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                  <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">UNION COLLECT</button></a>\n\n                  <a href=\"https://union360.unionbankng.com/uonline/login\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                  <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">UNION360</button></a>\n\n                  <a href=\"https://ureview/login\" class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].button + "\" onClick={this.onClick} target=\"_blank\" data-interception=\"off\">\n                  <button class=\"" + _ApplicationWebPart_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].label + "\">UREVIEW</button></a></p>\n        </div>\n      </div>\n    </div>\n  </div>";
    };
    Object.defineProperty(ApplicationWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ApplicationWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: ApplicationWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: ApplicationWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])('description', {
                                    label: ApplicationWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ApplicationWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (ApplicationWebPart);


/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=application-web-part.js.map