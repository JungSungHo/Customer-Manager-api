(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\r\n    <cm-navbar></cm-navbar>\r\n    <router-outlet></router-outlet>\r\n    <cm-growler position=\"top-right\" timeout=\"2000\"></cm-growler>\r\n    <cm-modal></cm-modal>\r\n    <cm-overlay delay=\"300\">\r\n        <span class=\"spinner\"></span>&nbsp;&nbsp;&nbsp;Loading\r\n    </cm-overlay>\r\n</main>\r\n<br /><br />"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/modal/modal.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/modal/modal.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': modalVisibleAnimate}\"\r\n    [ngStyle]=\"{'display': modalVisible ? 'block' : 'none', 'opacity': modalVisibleAnimate ? 1 : 0}\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"cancel()\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <h4 class=\"modal-title\">{{ modalContent.header }}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                {{ modalContent.body }}\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\" *ngIf=\"modalContent.cancelButtonVisible\">{{ modalContent.cancelButtonText }}</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"ok()\">{{ modalContent.OKButtonText }}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inner navbar-fixed-top\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" \r\n                    (click)=\"isCollapsed = !isCollapsed\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" routerLink=\"/customers\">\r\n                <img src=\"assets/images/people.png\" alt=\"logo\" />\r\n                <span class=\"app-title\">顧客管理</span>\r\n            </a>\r\n            <span class=\"navbar-collapse\" [attr.data-collapse]=\"isCollapsed\">\r\n                <ul class=\"nav navbar-nav nav-pills navBarPadding\">\r\n                    <li routerLinkActive=\"active\"><a routerLink=\"/customers\">顧客情報</a></li>\r\n                    <li routerLinkActive=\"active\"><a routerLink=\"/orders\">注文情報</a></li>\r\n                    <!-- <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li> -->\r\n                    <li routerLinkActive=\"active\" (click)=\"loginOrOut()\"><a>{{ loginLogoutText }}</a></li>\r\n                </ul>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/overlay/overlay.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/overlay/overlay.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" [class.active]=\"enabled\">\r\n    <div class=\"overlay-background\"></div>\r\n    <div class=\"overlay-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\r\n    <div class=\"container\">\r\n        <header>\r\n            <h3><span class=\"glyphicon glyphicon-lock\"></span> ログイン</h3>\r\n        </header>\r\n        <br />\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm)\" class=\"login-form\" novalidate>\r\n            <div class=\"login\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        メールアドレス:\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"email\" name=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n                        <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.email.untouched || loginForm.controls.email.valid\">\r\n                            メールアドレスを正しく入力してください。\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        パスワード:\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\" />\r\n                        <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.password.untouched || loginForm.controls.password.valid\">\r\n                            パスワードを正しく入力してください。 (６桁以上の数字と英文字を指定してください。)\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">ログイン</button>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <div class=\"statusRow\">\r\n                    <br />\r\n                    <div class=\"label label-important\" *ngIf=\"errorMessage\">\r\n                        <span class=\"glyphicon glyphicon-thumbs-down icon-white\"></span>&nbsp;&nbsp;エラー情報: {{ errorMessage }}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/filter-textbox/filter-textbox.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/filter-textbox/filter-textbox.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n        Filter:\r\n        <input type=\"text\" name=\"filter\"\r\n            [(ngModel)]=\"model.filter\" \r\n            (keyup)=\"filterChanged($event)\"  />\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/map/map.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/map/map.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapContainer [style.height]=\"mapHeight\" [style.width]=\"mapWidth\">Map Loading....</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"!isVisible\">\r\n  <ul class=\"pagination\">\r\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\r\n      <a aria-label=\"Previous\">\r\n        <span aria-hidden=\"true\">&laquo;</span>\r\n      </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\r\n      <a>{{ page }}</a>\r\n    </li>\r\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\r\n      <a aria-label=\"Next\">\r\n        <span aria-hidden=\"true\">&raquo;</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/strategies/preload-modules.strategy */ "./src/app/core/strategies/preload-modules.strategy.ts");




const app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', data: { preload: true }, loadChildren: () => __webpack_require__.e(/*! import() | customer-customer-module */ "customer-customer-module").then(__webpack_require__.bind(null, /*! ./customer/customer.module */ "./src/app/customer/customer.module.ts")).then(m => m.CustomerModule) },
    { path: 'customers', loadChildren: () => __webpack_require__.e(/*! import() | customers-customers-module */ "customers-customers-module").then(__webpack_require__.bind(null, /*! ./customers/customers.module */ "./src/app/customers/customers.module.ts")).then(m => m.CustomersModule) },
    { path: 'orders', data: { preload: true }, loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/orders/orders.module.ts")).then(m => m.OrdersModule) },
    { path: 'about', loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutModule) },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(app_routes, { preloadingStrategy: _core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_3__["PreloadModulesStrategy"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_core_strategies_preload_modules_strategy__WEBPACK_IMPORTED_MODULE_3__["PreloadModulesStrategy"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-app-component',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"] // Shared (multi-instance) objects
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _growler_growler_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./growler/growler.module */ "./src/app/core/growler/growler.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/core/modal/modal.module.ts");
/* harmony import */ var _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlay/overlay.module */ "./src/app/core/overlay/overlay.module.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var _services_sorter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/sorter.service */ "./src/app/core/services/sorter.service.ts");
/* harmony import */ var _services_trackby_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/trackby.service */ "./src/app/core/services/trackby.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/core/services/dialog.service.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");


















let CoreModule = class CoreModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_14__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _growler_growler_module__WEBPACK_IMPORTED_MODULE_5__["GrowlerModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"]],
        exports: [_growler_growler_module__WEBPACK_IMPORTED_MODULE_5__["GrowlerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]],
        providers: [_services_sorter_service__WEBPACK_IMPORTED_MODULE_11__["SorterService"], _services_filter_service__WEBPACK_IMPORTED_MODULE_10__["FilterService"], _services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _services_trackby_service__WEBPACK_IMPORTED_MODULE_12__["TrackByService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_event_bus_service__WEBPACK_IMPORTED_MODULE_16__["EventBusService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                multi: true,
            },
            { provide: 'Window', useFactory: () => window }
        ] // these should be singleton
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/ensure-module-loaded-once.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/ensure-module-loaded-once.guard.ts ***!
  \*********************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}
EnsureModuleLoadedOnceGuard.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/core/growler/growler.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/growler/growler.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .growler {\r\n      position: fixed;\r\n      z-index: 999999;\r\n    }\r\n    \r\n    .growler.close-button:focus {\r\n      outline: 0;\r\n    }\r\n    \r\n    .growler.top-left {\r\n      top: 12px;\r\n      left: 12px;\r\n    }\r\n    \r\n    .growler.top-right {\r\n      top: 12px;\r\n      right: 12px;\r\n    }\r\n    \r\n    .growler.bottom-right {\r\n      bottom: 12px;\r\n      right: 12px;\r\n    }\r\n    \r\n    .growler.bottom-left {\r\n      bottom: 12px;\r\n      left: 12px;\r\n    }\r\n    \r\n    .growler.top-center {\r\n      top: 12px;\r\n      left: 50%;\r\n      -webkit-transform: translate(-50%, 0%);\r\n              transform: translate(-50%, 0%);\r\n    }\r\n    \r\n    .growler.bottom-center {\r\n      bottom: 12px;\r\n      left: 50%;\r\n      -webkit-transform: translate(-50%, 0%);\r\n              transform: translate(-50%, 0%);\r\n    }\r\n    \r\n    .growl {\r\n      cursor: pointer;\r\n      padding: 5;\r\n      width: 285px;\r\n      height: 65px; \r\n      opacity: 0;      \r\n      display: -webkit-box;      \r\n      display: flex;\r\n      -webkit-box-align: center;\r\n              align-items: center;\r\n      -webkit-box-pack: center;\r\n              justify-content: center;\r\n      \r\n      -webkit-transition: opacity 1s;\r\n      transition: opacity 1s;        \r\n    }\r\n    \r\n    .growl.active {        \r\n      opacity: 1;\r\n    }\r\n    \r\n    .growl-message {\r\n\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ncm93bGVyL2dyb3dsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtNQUNFLGVBQWU7TUFDZixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsU0FBUztNQUNULFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxZQUFZO01BQ1osV0FBVztJQUNiOztJQUVBO01BQ0UsWUFBWTtNQUNaLFVBQVU7SUFDWjs7SUFFQTtNQUNFLFNBQVM7TUFDVCxTQUFTO01BQ1Qsc0NBQXNDO2NBQzlCLDhCQUE4QjtJQUN4Qzs7SUFFQTtNQUNFLFlBQVk7TUFDWixTQUFTO01BQ1Qsc0NBQXNDO2NBQzlCLDhCQUE4QjtJQUN4Qzs7SUFFQTtNQUNFLGVBQWU7TUFDZixVQUFVO01BQ1YsWUFBWTtNQUNaLFlBQVk7TUFDWixVQUFVO01BQ1Ysb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix3QkFBdUI7Y0FBdkIsdUJBQXVCOztNQUV2Qiw4QkFBOEI7TUFHOUIsc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBOztJQUVBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ncm93bGVyL2dyb3dsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuZ3Jvd2xlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3Jvd2xlci5jbG9zZS1idXR0b246Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3Jvd2xlci50b3AtbGVmdCB7XHJcbiAgICAgIHRvcDogMTJweDtcclxuICAgICAgbGVmdDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdyb3dsZXIudG9wLXJpZ2h0IHtcclxuICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdyb3dsZXIuYm90dG9tLXJpZ2h0IHtcclxuICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdyb3dsZXIuYm90dG9tLWxlZnQge1xyXG4gICAgICBib3R0b206IDEycHg7XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ncm93bGVyLnRvcC1jZW50ZXIge1xyXG4gICAgICB0b3A6IDEycHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3Jvd2xlci5ib3R0b20tY2VudGVyIHtcclxuICAgICAgYm90dG9tOiAxMnB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdyb3dsIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwYWRkaW5nOiA1O1xyXG4gICAgICB3aWR0aDogMjg1cHg7XHJcbiAgICAgIGhlaWdodDogNjVweDsgXHJcbiAgICAgIG9wYWNpdHk6IDA7ICAgICAgXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7IFxyXG4gICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzOyAgICAgICAgXHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIC5ncm93bC5hY3RpdmUgeyAgICAgICAgXHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAuZ3Jvd2wtbWVzc2FnZSB7XHJcblxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/core/growler/growler.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/growler/growler.component.ts ***!
  \***************************************************/
/*! exports provided: GrowlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerComponent", function() { return GrowlerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");




let GrowlerComponent = class GrowlerComponent {
    constructor(growlerService, logger) {
        this.growlerService = growlerService;
        this.logger = logger;
        this.growlCount = 0;
        this.growls = [];
        this.position = 'bottom-right';
        this.timeout = 3000;
        growlerService.growl = this.growl.bind(this);
    }
    ngOnInit() { }
    /**
    * Displays a growl message.
    *
    * @param {string} message - The message to display.
    * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
    * @return {number} id - Returns the ID for the generated growl
    */
    growl(message, growlType) {
        this.growlCount++;
        const bootstrapAlertType = _growler_service__WEBPACK_IMPORTED_MODULE_2__["GrowlerMessageType"][growlType].toLowerCase();
        const messageType = `alert-${bootstrapAlertType}`;
        const growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    }
    removeGrowl(id) {
        this.growls.forEach((growl, index) => {
            if (growl.id === id) {
                this.growls.splice(index, 1);
                this.growlCount--;
                this.logger.log('removed ' + id);
            }
        });
    }
};
GrowlerComponent.ctorParameters = () => [
    { type: _growler_service__WEBPACK_IMPORTED_MODULE_2__["GrowlerService"] },
    { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrowlerComponent.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GrowlerComponent.prototype, "timeout", void 0);
GrowlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-growler',
        template: `
    <div [ngClass]="position" class="growler">
      <div *ngFor="let growl of growls" [ngClass]="{active: growl.enabled}"
          class="growl alert {{ growl.messageType }}">
          <span class="growl-message">{{ growl.message }}</span>
      </div>
    </div>
  `,
        styles: [__webpack_require__(/*! ./growler.component.css */ "./src/app/core/growler/growler.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_growler_service__WEBPACK_IMPORTED_MODULE_2__["GrowlerService"],
        _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
], GrowlerComponent);

class Growl {
    constructor(id, message, messageType, timeout, growlerContainer) {
        this.id = id;
        this.message = message;
        this.messageType = messageType;
        this.timeout = timeout;
        this.growlerContainer = growlerContainer;
        this.show();
    }
    show() {
        window.setTimeout(() => {
            this.enabled = true;
            this.setTimeout();
        }, 0);
    }
    setTimeout() {
        window.setTimeout(() => {
            this.hide();
        }, this.timeout);
    }
    hide() {
        this.enabled = false;
        window.setTimeout(() => {
            this.growlerContainer.removeGrowl(this.id);
        }, this.timeout);
    }
}
Growl.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: String },
    { type: Number },
    { type: GrowlerComponent }
];


/***/ }),

/***/ "./src/app/core/growler/growler.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/growler/growler.module.ts ***!
  \************************************************/
/*! exports provided: GrowlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerModule", function() { return GrowlerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _growler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growler.component */ "./src/app/core/growler/growler.component.ts");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");






let GrowlerModule = class GrowlerModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
GrowlerModule.ctorParameters = () => [
    { type: GrowlerModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
GrowlerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"]],
        providers: [_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"]],
        declarations: [_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [GrowlerModule])
], GrowlerModule);



/***/ }),

/***/ "./src/app/core/growler/growler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/growler/growler.service.ts ***!
  \*************************************************/
/*! exports provided: GrowlerService, GrowlerMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerService", function() { return GrowlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerMessageType", function() { return GrowlerMessageType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GrowlerService = class GrowlerService {
    constructor() { }
};
GrowlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GrowlerService);

var GrowlerMessageType;
(function (GrowlerMessageType) {
    GrowlerMessageType[GrowlerMessageType["Success"] = 0] = "Success";
    GrowlerMessageType[GrowlerMessageType["Danger"] = 1] = "Danger";
    GrowlerMessageType[GrowlerMessageType["Warning"] = 2] = "Warning";
    GrowlerMessageType[GrowlerMessageType["Info"] = 3] = "Info";
})(GrowlerMessageType || (GrowlerMessageType = {}));


/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthInterceptor = class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        // Get the auth header (fake value is shown here)
        const authHeader = '49a5kdkv409fd39'; // this.authService.getAuthHeader();
        const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        return next.handle(authReq);
    }
};
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthInterceptor);



/***/ }),

/***/ "./src/app/core/modal/modal.component.css":
/*!************************************************!*\
  !*** ./src/app/core/modal/modal.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n  background: rgba(0,0,0,0.6);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/modal/modal.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/modal/modal.component.ts ***!
  \***********************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/modal/modal.service.ts");



let ModalComponent = class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.modalVisible = false;
        this.modalVisibleAnimate = false;
        this.modalContent = {};
        this.defaultModalContent = {
            header: 'Please Confirm',
            body: 'Are you sure you want to continue?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'OK',
            cancelButtonVisible: true
        };
        modalService.show = this.show.bind(this);
        modalService.hide = this.hide.bind(this);
    }
    ngOnInit() {
    }
    show(modalContent) {
        this.modalContent = Object.assign(this.defaultModalContent, modalContent);
        this.modalVisible = true;
        setTimeout(() => this.modalVisibleAnimate = true);
        const promise = new Promise((resolve, reject) => {
            this.cancel = () => {
                this.hide();
                resolve(false);
            };
            this.ok = () => {
                this.hide();
                resolve(true);
            };
        });
        return promise;
    }
    hide() {
        this.modalVisibleAnimate = false;
        setTimeout(() => this.modalVisible = false, 300);
    }
};
ModalComponent.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/core/modal/modal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/core/modal/modal.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/modal/modal.module.ts ***!
  \********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/core/modal/modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/modal/modal.service.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");






let ModalModule = class ModalModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_5__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
ModalModule.ctorParameters = () => [
    { type: ModalModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
        providers: [_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ModalModule])
], ModalModule);



/***/ }),

/***/ "./src/app/core/modal/modal.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/modal/modal.service.ts ***!
  \*********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalService = class ModalService {
    constructor() { }
};
ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalService);



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");






let NavbarComponent = class NavbarComponent {
    constructor(router, authservice, growler, logger) {
        this.router = router;
        this.authservice = authservice;
        this.growler = growler;
        this.logger = logger;
        this.loginLogoutText = 'ログイン';
    }
    ngOnInit() {
        this.sub = this.authservice.authChanged
            .subscribe((loggedIn) => {
            this.setLoginLogoutText();
        }, (err) => this.logger.log(err));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    loginOrOut() {
        const isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe((status) => {
                this.setLoginLogoutText();
                this.growler.growl('ログアウト', _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerMessageType"].Info);
                this.router.navigate(['/customers']);
                return;
            }, (err) => this.logger.log(err));
        }
        this.redirectToLogin();
    }
    redirectToLogin() {
        this.router.navigate(['/login']);
    }
    setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'ログアウト' : 'ログイン';
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"] },
    { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _growler_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"],
        _services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/core/overlay/overlay-request-response.interceptor.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/overlay/overlay-request-response.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: OverlayRequestResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRequestResponseInterceptor", function() { return OverlayRequestResponseInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");






let OverlayRequestResponseInterceptor = class OverlayRequestResponseInterceptor {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    intercept(req, next) {
        const randomTime = this.getRandomIntInclusive(0, 1500);
        const started = Date.now();
        this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["Events"].httpRequest));
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(randomTime), // Simulate random Http call delays
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                const elapsed = Date.now() - started;
                this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["Events"].httpResponse));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["Events"].httpResponse));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    }
};
OverlayRequestResponseInterceptor.ctorParameters = () => [
    { type: _services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EventBusService"] }
];
OverlayRequestResponseInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_5__["EventBusService"]])
], OverlayRequestResponseInterceptor);



/***/ }),

/***/ "./src/app/core/overlay/overlay.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n  display:none;\r\n}\r\n\r\n.overlay.active {        \r\n  display: block;\r\n}\r\n\r\n.overlay-background {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: block;\r\n  overflow: hidden;\r\n  -webkit-overflow-scrolling: touch;\r\n  outline: 0;\r\n  background-color:rgba(0,0,0,0.6);\r\n}\r\n\r\n.overlay-content {\r\n\r\n}\r\n\r\n.overlay-content {\r\n  position: fixed;\r\n  z-index: 999999;\r\n  top: 50%;\r\n  left: 50%;\r\n  background-color: white;\r\n  border: 1px solid rgb(94, 94, 94);\r\n  -webkit-transform: translate(-50%, 0%);\r\n          transform: translate(-50%, 0%);\r\n\r\n  cursor: pointer;\r\n  padding: 5;\r\n  width: 285px;\r\n  height: 100px;    \r\n  display: -webkit-box;    \r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  \r\n  \r\n  -webkit-transition: opacity 1s;\r\n  transition: opacity 1s;        \r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsc0NBQXNDO1VBQzlCLDhCQUE4Qjs7RUFFdEMsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1Qjs7O0VBR3ZCLDhCQUE4QjtFQUc5QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL292ZXJsYXkvb3ZlcmxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHsgICAgICAgIFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59IFxyXG5cclxuLm92ZXJsYXktYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNik7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG5cclxufVxyXG5cclxuLm92ZXJsYXktY29udGVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk0LCA5NCwgOTQpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNTtcclxuICB3aWR0aDogMjg1cHg7XHJcbiAgaGVpZ2h0OiAxMDBweDsgICAgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gIFxyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcclxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXM7IFxyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxczsgICAgICAgIFxyXG59IFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/core/overlay/overlay.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.ts ***!
  \***************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");



let OverlayComponent = class OverlayComponent {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.enabled = false;
        this.queue = [];
        this.timerId = null;
        this.timerHideId = null;
        this.delay = 500;
    }
    ngOnInit() {
        // Handle request
        this.httpRequestSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["Events"].httpRequest, (() => {
            this.queue.push({});
            if (this.queue.length === 1) {
                // Only show if we have an item in the queue after the delay time
                setTimeout(() => {
                    if (this.queue.length) {
                        this.enabled = true;
                    }
                }, this.delay);
            }
        }));
        // Handle response
        this.httpResponseSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["Events"].httpResponse, (() => {
            this.queue.pop();
            if (this.queue.length === 0) {
                // Since we don't know if another XHR request will be made, pause before
                // hiding the overlay. If another XHR request comes in then the overlay
                // will stay visible which prevents a flicker
                setTimeout(() => {
                    // Make sure queue is still 0 since a new XHR request may have come in
                    // while timer was running
                    if (this.queue.length === 0) {
                        this.enabled = false;
                    }
                }, this.delay);
            }
        }));
    }
    ngOnDestroy() {
        this.httpRequestSub.unsubscribe();
        this.httpResponseSub.unsubscribe();
    }
};
OverlayComponent.ctorParameters = () => [
    { type: _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OverlayComponent.prototype, "delay", void 0);
OverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-overlay',
        template: __webpack_require__(/*! raw-loader!./overlay.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/overlay/overlay.component.html"),
        styles: [__webpack_require__(/*! ./overlay.component.css */ "./src/app/core/overlay/overlay.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__["EventBusService"]])
], OverlayComponent);



/***/ }),

/***/ "./src/app/core/overlay/overlay.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/overlay/overlay.module.ts ***!
  \************************************************/
/*! exports provided: OverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay-request-response.interceptor */ "./src/app/core/overlay/overlay-request-response.interceptor.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlay.component */ "./src/app/core/overlay/overlay.component.ts");
/* harmony import */ var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ensure-module-loaded-once.guard */ "./src/app/core/ensure-module-loaded-once.guard.ts");







let OverlayModule = class OverlayModule extends _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_6__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
OverlayModule.ctorParameters = () => [
    { type: OverlayModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
OverlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]],
        declarations: [_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_4__["OverlayRequestResponseInterceptor"],
                multi: true,
            }
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [OverlayModule])
], OverlayModule);



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(http, window) {
        this.http = http;
        this.window = window;
        // Can use /api/auth below when running locally
        // Full domain/port is included for Docker example or if it were to run in the cloud
        this.port = (this.window.location.port) ? ':' + this.window.location.port : '';
        this.baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}${this.port}`;
        this.authUrl = this.baseUrl + '/api/auth';
        this.isAuthenticated = false;
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    userAuthChanged(status) {
        this.authChanged.emit(status); // Raise changed event
    }
    login(userLogin) {
        return this.http.post(this.authUrl + '/login', userLogin)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(loggedIn => {
            this.isAuthenticated = loggedIn;
            this.userAuthChanged(loggedIn);
            return loggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    logout() {
        return this.http.post(this.authUrl + '/logout', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(loggedOut => {
            this.isAuthenticated = !loggedOut;
            this.userAuthChanged(!loggedOut); // Return loggedIn status
            return loggedOut;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['Window',] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AuthService.prototype, "authChanged", void 0);
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('Window')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Window])
], AuthService);



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DataService = class DataService {
    constructor(http, window) {
        this.http = http;
        this.window = window;
        // Can use /api/customers and /api/orders below when running locally
        // Full domain/port is included for Docker example or if it were to run in the cloud
        this.port = (this.window.location.port) ? ':' + this.window.location.port : '';
        this.baseUrl = `${this.window.location.protocol}//${this.window.location.hostname}${this.port}`;
        this.customersBaseUrl = this.baseUrl + '/api/customers';
        this.ordersBaseUrl = this.baseUrl + '/api/orders';
    }
    getCustomersPage(page, pageSize) {
        return this.http.get(`${this.customersBaseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            const totalRecords = +res.headers.get('X-InlineCount');
            const customers = res.body;
            this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomers() {
        return this.http.get(this.customersBaseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(customers => {
            this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomer(id) {
        return this.http.get(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(customer => {
            this.calculateCustomersOrderTotal([customer]);
            return customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    insertCustomer(customer) {
        return this.http.post(this.customersBaseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateCustomer(customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCustomer(id) {
        return this.http.delete(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getStates() {
        return this.http.get('/api/states')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Node.js server error');
    }
    calculateCustomersOrderTotal(customers) {
        for (const customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (const order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['Window',] }] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('Window')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Window])
], DataService);



/***/ }),

/***/ "./src/app/core/services/dialog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DialogService = class DialogService {
    constructor() {
        this.message = 'Is it OK?';
    }
    confirm(message) {
        if (message) {
            this.message = message;
        }
        this.promise = new Promise(this.resolver);
        return this.promise;
    }
    resolver(resolve) {
        return resolve(window.confirm('Is it OK?'));
    }
};
DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DialogService);



/***/ }),

/***/ "./src/app/core/services/event-bus.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/event-bus.service.ts ***!
  \****************************************************/
/*! exports provided: EventBusService, EmitEvent, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEvent", function() { return EmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let EventBusService = class EventBusService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    on(event, action) {
        return this.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((e) => {
            return e.name === event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
            return e.value;
        }))
            .subscribe(action);
    }
    emit(event) {
        this.subject.next(event);
    }
};
EventBusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EventBusService);

class EmitEvent {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}
EmitEvent.ctorParameters = () => [
    { type: undefined },
    { type: undefined }
];
var Events;
(function (Events) {
    Events[Events["httpRequest"] = 0] = "httpRequest";
    Events[Events["httpResponse"] = 1] = "httpResponse";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/app/core/services/filter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/property-resolver */ "./src/app/core/services/property-resolver.ts");



let FilterService = class FilterService {
    constructor() { }
    filter(items, data, props) {
        return items.filter((item) => {
            let match = false;
            for (const prop of props) {
                if (prop.indexOf('.') > -1) {
                    const value = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__["PropertyResolver"].resolve(prop, item);
                    if (value && value.toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                    continue;
                }
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                }
            }
            return match;
        });
    }
};
FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FilterService);



/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



let LoggerService = class LoggerService {
    constructor() { }
    log(msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            console.log(msg);
        }
    }
    logError(msg) {
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            console.error(msg);
        }
    }
};
LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoggerService);



/***/ }),

/***/ "./src/app/core/services/property-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/property-resolver.ts ***!
  \****************************************************/
/*! exports provided: PropertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResolver", function() { return PropertyResolver; });
class PropertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


/***/ }),

/***/ "./src/app/core/services/sorter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/sorter.service.ts ***!
  \*************************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/property-resolver */ "./src/app/core/services/property-resolver.ts");



let SorterService = class SorterService {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(collection, prop) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort((a, b) => {
            let aVal;
            let bVal;
            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__["PropertyResolver"].resolve(prop, a);
                bVal = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_2__["PropertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }
            if (this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
};
SorterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SorterService);



/***/ }),

/***/ "./src/app/core/services/trackby.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/trackby.service.ts ***!
  \**************************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackByService = class TrackByService {
    customer(index, customer) {
        return customer.id;
    }
    order(index, order) {
        return index;
    }
};
TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrackByService);



/***/ }),

/***/ "./src/app/core/services/validation.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/validation.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
class ValidationService {
    static getValidatorErrorMessage(code) {
        const config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
}


/***/ }),

/***/ "./src/app/core/strategies/preload-modules.strategy.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/strategies/preload-modules.strategy.ts ***!
  \*************************************************************/
/*! exports provided: PreloadModulesStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadModulesStrategy", function() { return PreloadModulesStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");
// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading




let PreloadModulesStrategy = class PreloadModulesStrategy {
    constructor(logger) {
        this.logger = logger;
    }
    preload(route, load) {
        if (route.data && route.data['preload']) {
            this.logger.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
    }
};
PreloadModulesStrategy.ctorParameters = () => [
    { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] }
];
PreloadModulesStrategy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
], PreloadModulesStrategy);



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




const routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule.components = [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]];
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form input[type='text'], \r\n.login-form input[type='email'],\r\n.login-form input[type='password'] {\r\n    width:75%;\r\n}\r\n\r\n.login-form .ng-invalid {\r\n  border-left: 5px solid #a94442;\r\n}\r\n\r\n.login-form .ng-valid {\r\n  border-left: 5px solid #42A948;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0lBR0ksU0FBUztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgXHJcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXHJcbi5sb2dpbi1mb3JtIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10ge1xyXG4gICAgd2lkdGg6NzUlO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSAubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSAubmctdmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/validation.service */ "./src/app/core/services/validation.service.ts");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");








let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authService, growler, logger) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.logger = logger;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].passwordValidator]]
        });
    }
    submit({ value, valid }) {
        this.authService.login(value)
            .subscribe((status) => {
            if (status) {
                this.growler.growl('ログイン中', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Info);
                if (this.authService.redirectUrl) {
                    const redirectUrl = this.authService.redirectUrl;
                    this.authService.redirectUrl = '';
                    this.router.navigate([redirectUrl]);
                }
                else {
                    this.router.navigate(['/customers']);
                }
            }
            else {
                const loginError = 'ログインを失敗しました。';
                this.errorMessage = loginError;
                this.growler.growl(loginError, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerMessageType"].Danger);
            }
        }, (err) => this.logger.log(err));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerService"] },
    { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_6__["GrowlerService"],
        _core_services_logger_service__WEBPACK_IMPORTED_MODULE_7__["LoggerService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");





let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]],
        declarations: [_login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"].components]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/shared/directives/sortby.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/sortby.directive.ts ***!
  \*******************************************************/
/*! exports provided: SortByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDirective", function() { return SortByDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortByDirective = class SortByDirective {
    constructor() {
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set sortBy(value) {
        this.sortProperty = value;
    }
    onClick() {
        event.preventDefault();
        this.sorted.next(this.sortProperty); // Raise clicked event
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SortByDirective.prototype, "sorted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cmSortBy'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], SortByDirective.prototype, "sortBy", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SortByDirective.prototype, "onClick", null);
SortByDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[cmSortBy]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SortByDirective);



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "cm-filter-textbox {\r\n    margin-top: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpbHRlci10ZXh0Ym94L2ZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpbHRlci10ZXh0Ym94L2ZpbHRlci10ZXh0Ym94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjbS1maWx0ZXItdGV4dGJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTextboxComponent = class FilterTextboxComponent {
    constructor() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); // Raise changed event
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], FilterTextboxComponent.prototype, "changed", void 0);
FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-filter-textbox',
        template: __webpack_require__(/*! raw-loader!./filter-textbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/filter-textbox/filter-textbox.component.html"),
        styles: [__webpack_require__(/*! ./filter-textbox.component.css */ "./src/app/shared/filter-textbox/filter-textbox.component.css")]
    })
], FilterTextboxComponent);



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.module.ts ***!
  \****************************************************************/
/*! exports provided: FilterTextboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxModule", function() { return FilterTextboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");





let FilterTextboxModule = class FilterTextboxModule {
};
FilterTextboxModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxComponent"]],
        declarations: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxComponent"]]
    })
], FilterTextboxModule);



/***/ }),

/***/ "./src/app/shared/map/map.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _mapPoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapPoint.component */ "./src/app/shared/map/mapPoint.component.ts");
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />




let MapComponent = class MapComponent {
    constructor() {
        this.markers = [];
        this.latitude = 34.5133;
        this.longitude = -94.1629;
        this.markerText = 'Your Location';
        this.zoom = 8;
    }
    // Necessary since a map rendered while container is hidden
    // will not load the map tiles properly and show a grey screen
    get enabled() {
        return this.isEnabled;
    }
    set enabled(isEnabled) {
        this.isEnabled = isEnabled;
        this.init();
    }
    ngOnInit() {
        if (this.latitude && this.longitude) {
            if (this.mapHeight && this.mapWidth) {
                this.mapHeight = this.height + 'px';
                this.mapWidth = this.width + 'px';
            }
            else {
                const hw = this.getWindowHeightWidth(this.mapDiv.nativeElement.ownerDocument);
                this.mapHeight = hw.height / 2 + 'px';
                this.mapWidth = hw.width + 'px';
            }
        }
    }
    ngAfterContentInit() {
        this.mapPoints.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .subscribe(() => {
            if (this.enabled) {
                this.renderMapPoints();
            }
        });
    }
    init() {
        // Need slight delay to avoid grey box when google script has previously been loaded.
        // Otherwise map <div> container may not be visible yet which causes the grey box.
        setTimeout(() => {
            this.ensureScript();
        }, 200);
    }
    getWindowHeightWidth(document) {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        const height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if (width > 900) {
            width = 900;
        }
        return { height: height, width: width };
    }
    ensureScript() {
        this.loadingScript = true;
        const document = this.mapDiv.nativeElement.ownerDocument;
        const script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            if (this.isEnabled) {
                this.renderMap();
            }
        }
        else {
            const mapsScript = document.createElement('script');
            mapsScript.id = 'googlemaps';
            mapsScript.type = 'text/javascript';
            mapsScript.async = true;
            mapsScript.defer = true;
            mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCG1KDldeF_2GzaTXrEHR0l6cyCS7AnmBw';
            mapsScript.onload = () => {
                this.loadingScript = false;
                if (this.isEnabled) {
                    this.renderMap();
                }
            };
            document.body.appendChild(mapsScript);
        }
    }
    renderMap() {
        const latlng = this.createLatLong(this.latitude, this.longitude);
        const options = {
            zoom: this.zoom,
            center: latlng,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
        if (this.mapPoints && this.mapPoints.length) {
            this.renderMapPoints();
        }
        else {
            this.createMarker(latlng, this.map, this.markerText);
        }
    }
    createLatLong(latitude, longitude) {
        return (latitude && longitude) ? new google.maps.LatLng(latitude, longitude) : null;
    }
    renderMapPoints() {
        if (this.map) {
            this.clearMapPoints();
            this.mapPoints.forEach((point) => {
                const mapPointLatlng = this.createLatLong(point.latitude, point.longitude);
                this.createMarker(mapPointLatlng, this.map, point.markerText);
            });
        }
    }
    clearMapPoints() {
        this.markers.forEach((marker) => {
            marker.setMap(null);
        });
        this.markers = [];
    }
    createMarker(position, map, title) {
        const infowindow = new google.maps.InfoWindow({
            content: title
        });
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MapComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MapComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapComponent.prototype, "latitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapComponent.prototype, "longitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapComponent.prototype, "markerText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapComponent.prototype, "zoom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], MapComponent.prototype, "enabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapContainer', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapComponent.prototype, "mapDiv", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_mapPoint_component__WEBPACK_IMPORTED_MODULE_3__["MapPointComponent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], MapComponent.prototype, "mapPoints", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/map/map.component.html"),
        // When using OnPush detectors, then the framework will check an OnPush
        // component when any of its input properties changes, when it fires
        // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapComponent);



/***/ }),

/***/ "./src/app/shared/map/map.module.ts":
/*!******************************************!*\
  !*** ./src/app/shared/map/map.module.ts ***!
  \******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.component */ "./src/app/shared/map/map.component.ts");
/* harmony import */ var _mapPoint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapPoint.component */ "./src/app/shared/map/mapPoint.component.ts");





let MapModule = class MapModule {
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _mapPoint_component__WEBPACK_IMPORTED_MODULE_4__["MapPointComponent"]],
        declarations: [_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _mapPoint_component__WEBPACK_IMPORTED_MODULE_4__["MapPointComponent"]]
    })
], MapModule);



/***/ }),

/***/ "./src/app/shared/map/mapPoint.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/map/mapPoint.component.ts ***!
  \**************************************************/
/*! exports provided: MapPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPointComponent", function() { return MapPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapPointComponent = class MapPointComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MapPointComponent.prototype, "longitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MapPointComponent.prototype, "latitude", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MapPointComponent.prototype, "markerText", void 0);
MapPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-map-point',
        template: ``
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapPointComponent);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination>.active>a, \r\n.pagination>.active>a:focus, \r\n.pagination>.active>a:hover, \r\n.pagination>.active>span, \r\n.pagination>.active>span:focus, \r\n.pagination>.active>span:hover {\r\n  background-color: #027FF4;\r\n  border-color: #027FF4;\r\n}\r\n\r\n.pagination a {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uPi5hY3RpdmU+YSwgXHJcbi5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgXHJcbi5wYWdpbmF0aW9uPi5hY3RpdmU+YTpob3ZlciwgXHJcbi5wYWdpbmF0aW9uPi5hY3RpdmU+c3BhbiwgXHJcbi5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgXHJcbi5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZGNDtcclxuICBib3JkZXItY29sb3I6ICMwMjdGRjQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction === -1) {
            if (page > 1) {
                page--;
            }
        }
        else {
            if (page < this.totalPages) {
                page++;
            }
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], PaginationComponent.prototype, "pageSize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], PaginationComponent.prototype, "totalItems", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cm-pagination',
        template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pagination/pagination.component.html"),
        styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.module.ts ***!
  \********************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.component */ "./src/app/shared/pagination/pagination.component.ts");




let PaginationModule = class PaginationModule {
};
PaginationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
        declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]]
    })
], PaginationModule);



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
    }
};
CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrimPipe = class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
};
TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
], TrimPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.module */ "./src/app/shared/filter-textbox/filter-textbox.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.module */ "./src/app/shared/map/map.module.ts");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination/pagination.module */ "./src/app/shared/pagination/pagination.module.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/sortby.directive */ "./src/app/shared/directives/sortby.directive.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_8__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_9__["SortByDirective"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_4__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"]],
        declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_7__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_8__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_9__["SortByDirective"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jungs\Angular-AIS-api\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map