(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clientes.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/clientes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      clientes: [],
      cliente: {
        id: null,
        identificacion: null,
        nombres: "",
        apellidos: ""
      }
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    obtenerClientes: 'obtenerClientes'
  })), {}, {
    cargarClientes: function cargarClientes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.obtenerClientes().then(function (response) {
                  _this.clientes = response.data;
                })["catch"](function (error) {
                  console.error(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setClienteToUpdate: function setClienteToUpdate(cliente) {
      this.cliente.id = cliente.id;
      this.cliente.identificacion = cliente.identificacion;
      this.cliente.nombres = cliente.nombres;
      this.cliente.apellidos = cliente.apellidos;
    },
    unSetCliente: function unSetCliente() {
      this.cliente.id = null;
      this.cliente.identificacion = null;
      this.cliente.nombres = '';
      this.cliente.apellidos = '';
    },
    guardarCliente: function guardarCliente() {
      var _this2 = this;

      if (!this.cliente.id) {
        axios.post("../api/clientes", this.cliente).then(function (response) {
          alert('Se ha guardado correctamente el cliente.');

          _this2.clientes.push(response.data);

          $("#modalGuardarCliente").modal("hide");

          _this2.unSetCliente();
        })["catch"](function (error) {
          console.error(error);
          alert(error);
        });
      } else {
        axios.put("../api/clientes/".concat(this.cliente.id), this.cliente).then(function (response) {
          alert('Se ha editado la información del cliente correctamente.');
          $("#modalGuardarCliente").modal("hide");

          var index = _this2.clientes.findIndex(function (cliente) {
            return cliente.id == response.data.id;
          });

          _this2.clientes[index] = response.data;

          _this2.unSetCliente();
        })["catch"](function (error) {
          console.error(error);
          alert(error);
        });
      }
    },
    deleteCliente: function deleteCliente(id) {
      var _this3 = this;

      if (confirm("\xBFEst\xE1 seguro de eliminar el cliente?")) {
        axios["delete"]("../api/clientes/".concat(id)).then(function (response) {
          alert('Se ha elminado el cliente correctamente.');

          var index = _this3.clientes.findIndex(function (cliente) {
            return cliente.id == id;
          });

          _this3.clientes.splice(index, 1);
        })["catch"](function (error) {
          console.error(error);
          alert(error);
        });
      }
    }
  }),
  mounted: function mounted() {
    this.cargarClientes();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clientes.vue?vue&type=template&id=0a846538&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/clientes.vue?vue&type=template&id=0a846538& ***!
  \******************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-lg-10 offset-1 mb-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-success float-right",
          attrs: {
            "data-toggle": "modal",
            "data-target": "#modalGuardarCliente",
          },
          on: { click: _vm.unSetCliente },
        },
        [
          _c("i", { staticClass: "fa fa-plus" }),
          _vm._v(" Agregar cliente\n\t\t"),
        ]
      ),
    ]),
    _vm._v(" "),
    _vm.clientes.length === 0
      ? _c("div", { staticClass: "col-lg-12" }, [
          _c(
            "div",
            {
              staticClass: "alert alert-warning text-center",
              attrs: { role: "alert" },
            },
            [_vm._v("\n\t\t\tNo se han registrado clientes.\n\t\t")]
          ),
        ])
      : _c("div", { staticClass: "col-lg-10 offset-1" }, [
          _c(
            "table",
            {
              staticClass:
                " table table-sm table-bordered table-striped table-hover",
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.clientes, function (cliente) {
                  return _c("tr", { key: cliente.id }, [
                    _c("td", {
                      domProps: { textContent: _vm._s(cliente.identificacion) },
                    }),
                    _vm._v(" "),
                    _c("td", {
                      domProps: { textContent: _vm._s(cliente.nombres) },
                    }),
                    _vm._v(" "),
                    _c("td", {
                      domProps: { textContent: _vm._s(cliente.apellidos) },
                    }),
                    _vm._v(" "),
                    _c("td", { staticClass: "justify-content-center" }, [
                      _c("div", { staticClass: "dropdown" }, [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown-menu",
                            attrs: { "aria-labelledby": "dropdownMenuButton" },
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: {
                                  href: "#",
                                  "data-toggle": "modal",
                                  "data-target": "#modalGuardarCliente",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.setClienteToUpdate(cliente)
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "fa fa-pencil" }),
                                _vm._v(" Editar"),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteCliente(cliente.id)
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "fa fa-trash" }),
                                _vm._v(" Eliminar"),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ])
                }),
                0
              ),
            ]
          ),
        ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalGuardarCliente",
          tabindex: "-1",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "form",
              {
                attrs: { action: "" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.guardarCliente.apply(null, arguments)
                  },
                },
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body container-fluid" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Número de identificación")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.cliente.identificacion,
                            expression: "cliente.identificacion",
                            modifiers: { trim: true },
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          required: "",
                          min: "1",
                          max: "999999999999",
                        },
                        domProps: { value: _vm.cliente.identificacion },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.cliente,
                              "identificacion",
                              $event.target.value.trim()
                            )
                          },
                          blur: function ($event) {
                            return _vm.$forceUpdate()
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Nombres")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.cliente.nombres,
                            expression: "cliente.nombres",
                            modifiers: { trim: true },
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.cliente.nombres },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.cliente,
                              "nombres",
                              $event.target.value.trim()
                            )
                          },
                          blur: function ($event) {
                            return _vm.$forceUpdate()
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [_vm._v("Apellidos")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.cliente.apellidos,
                            expression: "cliente.apellidos",
                            modifiers: { trim: true },
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.cliente.apellidos },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.cliente,
                              "apellidos",
                              $event.target.value.trim()
                            )
                          },
                          blur: function ($event) {
                            return _vm.$forceUpdate()
                          },
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(6),
              ]
            ),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-dark text-center" }, [
      _c("tr", [
        _c("th", [_vm._v("Identificación")]),
        _vm._v(" "),
        _c("th", [_vm._v("Nombres")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apellidos")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "10px" } }, [
          _c("i", { staticClass: "fa fa-cogs" }),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm btn-light dropdown-toggle",
        attrs: {
          type: "button",
          id: "dropdownMenuButton",
          "data-toggle": "dropdown",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "fa fa-cogs" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header text-center" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Guardar cliente")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close",
          },
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-hashtag" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-keyboard-o" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fa fa-keyboard-o" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary float-left",
          attrs: { type: "button", "data-dismiss": "modal" },
        },
        [_c("i", { staticClass: "fa fa-close" }), _vm._v(" Cerrar")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-success float-right",
          attrs: { type: "submit" },
        },
        [_c("i", { staticClass: "fa fa-floppy-o" }), _vm._v(" Guardar")]
      ),
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

/***/ "./resources/js/views/clientes.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/clientes.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clientes_vue_vue_type_template_id_0a846538___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clientes.vue?vue&type=template&id=0a846538& */ "./resources/js/views/clientes.vue?vue&type=template&id=0a846538&");
/* harmony import */ var _clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clientes.vue?vue&type=script&lang=js& */ "./resources/js/views/clientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _clientes_vue_vue_type_template_id_0a846538___WEBPACK_IMPORTED_MODULE_0__["render"],
  _clientes_vue_vue_type_template_id_0a846538___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/clientes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/clientes.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/clientes.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./clientes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clientes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_clientes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/clientes.vue?vue&type=template&id=0a846538&":
/*!************************************************************************!*\
  !*** ./resources/js/views/clientes.vue?vue&type=template&id=0a846538& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clientes_vue_vue_type_template_id_0a846538___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./clientes.vue?vue&type=template&id=0a846538& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/clientes.vue?vue&type=template&id=0a846538&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clientes_vue_vue_type_template_id_0a846538___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_clientes_vue_vue_type_template_id_0a846538___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);