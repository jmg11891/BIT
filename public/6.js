(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auto-component.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auto-component.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'auto': Object,
    updateAuto: Function,
    deleteAuto: Function,
    actions: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/venta-detalle-component.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/venta-detalle-component.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_auto_component_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/auto-component.vue */ "./resources/js/components/auto-component.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      venta: Object,
      id: this.$route.params.id
    };
  },
  components: {
    auto: _components_auto_component_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    obtenerDetalleVenta: 'obtenerDetalleVenta'
  })), {}, {
    obtenerVenta: function obtenerVenta() {
      var _this = this;

      console.log(this.id, 'este es el id');
      this.obtenerDetalleVenta(this.id).then(function (response) {
        _this.venta = response.data;
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }),
  mounted: function mounted() {
    this.obtenerVenta();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auto-component.vue?vue&type=template&id=57b435ea&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auto-component.vue?vue&type=template&id=57b435ea& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card m-2" }, [
    _vm.auto.imagen
      ? _c("img", {
          staticClass: "card-img-top",
          staticStyle: { "max-height": "200px" },
          attrs: { src: _vm.auto.imagen },
        })
      : _c("img", {
          staticClass: "card-img-top",
          staticStyle: { "max-height": "200px" },
          attrs: { src: "storage/images/image_not_found.png" },
        }),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("h5", {
        staticClass: "card-title bg-light",
        domProps: {
          textContent: _vm._s(_vm.auto.marca + " - " + _vm.auto.modelo),
        },
      }),
      _vm._v(" "),
      _c("p", { staticClass: "card-text" }, [
        _c("b", [_vm._v("Año: ")]),
        _c("span", { domProps: { textContent: _vm._s(_vm.auto.anio) } }),
        _c("br"),
        _vm._v(" "),
        _c("b", [_vm._v("Valor: ")]),
        _vm._v("$ "),
        _c("span", { domProps: { textContent: _vm._s(_vm.auto.valor) } }),
      ]),
      _vm._v(" "),
      _vm.actions
        ? _c("div", { staticClass: "row" }, [
            _vm.auto.estado == "disponible"
              ? _c("div", { staticClass: "col-12" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success m-1 float-right",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#generarVentaVehiculo",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.updateAuto(_vm.auto)
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-shopping-cart",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: "Vender auto",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-primary m-1 float-right",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#modalGuardarAuto",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.updateAuto(_vm.auto)
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-pencil",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: "Editar información",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger m-1 float-right",
                      on: {
                        click: function ($event) {
                          return _vm.deleteAuto(_vm.auto)
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-trash",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: "Eliminar",
                        },
                      }),
                    ]
                  ),
                ])
              : _c("div", { staticClass: "col-12" }, [
                  _c("b", {
                    staticClass: "text-success",
                    staticStyle: { "text-transform": "uppercase" },
                    domProps: { textContent: _vm._s(_vm.auto.estado) },
                  }),
                ]),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/venta-detalle-component.vue?vue&type=template&id=ad38b12a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/venta-detalle-component.vue?vue&type=template&id=ad38b12a& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-10 offset-1" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-lg-4 col-md-6 col-sm-12" },
              [
                _vm.venta.auto
                  ? _c("auto", {
                      attrs: { auto: _vm.venta.auto, actions: false },
                    })
                  : _vm._e(),
              ],
              1
            ),
            _vm._v(" "),
            Object.keys(_vm.venta).length > 0
              ? _c("div", { staticClass: "col-lg-8 col-md-6 col-sm-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 m-3" }, [
                      _c("p", { staticClass: "h5" }, [
                        _vm._v("Información del vendedor"),
                      ]),
                      _vm._v(" "),
                      _c("b", [_vm._v("Identificación: ")]),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.venta.vendedor.identificacion
                          ),
                        },
                      }),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Nombre: ")]),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.venta.vendedor.apellidos +
                              " " +
                              _vm.venta.vendedor.nombres
                          ),
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 m-3" }, [
                      _c("p", { staticClass: "h5" }, [
                        _vm._v("Información del cliente"),
                      ]),
                      _vm._v(" "),
                      _c("b", [_vm._v("Identificación: ")]),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          textContent: _vm._s(_vm.venta.cliente.identificacion),
                        },
                      }),
                      _c("br"),
                      _vm._v(" "),
                      _c("b", [_vm._v("Nombre: ")]),
                      _vm._v(" "),
                      _c("span", {
                        domProps: {
                          textContent: _vm._s(
                            _vm.venta.cliente.apellidos +
                              " " +
                              _vm.venta.cliente.nombres
                          ),
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 m-3" }, [
                      _c("b", [_vm._v("Fecha: ")]),
                      _vm._v(" "),
                      _c("span", {
                        domProps: { textContent: _vm._s(_vm.venta.fecha) },
                      }),
                    ]),
                  ]),
                ])
              : _vm._e(),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header col-12" }, [
      _c("p", { staticClass: "h4" }, [_vm._v("Reporte de venta")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/auto-component.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/auto-component.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_component_vue_vue_type_template_id_57b435ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-component.vue?vue&type=template&id=57b435ea& */ "./resources/js/components/auto-component.vue?vue&type=template&id=57b435ea&");
/* harmony import */ var _auto_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auto-component.vue?vue&type=script&lang=js& */ "./resources/js/components/auto-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _auto_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _auto_component_vue_vue_type_template_id_57b435ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _auto_component_vue_vue_type_template_id_57b435ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auto-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auto-component.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/auto-component.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./auto-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auto-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auto-component.vue?vue&type=template&id=57b435ea&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/auto-component.vue?vue&type=template&id=57b435ea& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_component_vue_vue_type_template_id_57b435ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./auto-component.vue?vue&type=template&id=57b435ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auto-component.vue?vue&type=template&id=57b435ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_component_vue_vue_type_template_id_57b435ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auto_component_vue_vue_type_template_id_57b435ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/venta-detalle-component.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/venta-detalle-component.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _venta_detalle_component_vue_vue_type_template_id_ad38b12a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./venta-detalle-component.vue?vue&type=template&id=ad38b12a& */ "./resources/js/components/venta-detalle-component.vue?vue&type=template&id=ad38b12a&");
/* harmony import */ var _venta_detalle_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./venta-detalle-component.vue?vue&type=script&lang=js& */ "./resources/js/components/venta-detalle-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _venta_detalle_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _venta_detalle_component_vue_vue_type_template_id_ad38b12a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _venta_detalle_component_vue_vue_type_template_id_ad38b12a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/venta-detalle-component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/venta-detalle-component.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/venta-detalle-component.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_venta_detalle_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./venta-detalle-component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/venta-detalle-component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_venta_detalle_component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/venta-detalle-component.vue?vue&type=template&id=ad38b12a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/venta-detalle-component.vue?vue&type=template&id=ad38b12a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_venta_detalle_component_vue_vue_type_template_id_ad38b12a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./venta-detalle-component.vue?vue&type=template&id=ad38b12a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/venta-detalle-component.vue?vue&type=template&id=ad38b12a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_venta_detalle_component_vue_vue_type_template_id_ad38b12a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_venta_detalle_component_vue_vue_type_template_id_ad38b12a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);