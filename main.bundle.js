webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login1_login1_component__ = __webpack_require__("../../../../../src/app/component/login1/login1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login2_login2_component__ = __webpack_require__("../../../../../src/app/login2/login2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pic2_pic2_component__ = __webpack_require__("../../../../../src/app/pic2/pic2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pic4_pic4_component__ = __webpack_require__("../../../../../src/app/pic4/pic4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project2_project2_component__ = __webpack_require__("../../../../../src/app/project2/project2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project3_project3_component__ = __webpack_require__("../../../../../src/app/project3/project3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__issue_issue_component__ = __webpack_require__("../../../../../src/app/issue/issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__issue1_issue1_component__ = __webpack_require__("../../../../../src/app/issue1/issue1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__issue2_issue2_component__ = __webpack_require__("../../../../../src/app/issue2/issue2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_user_login_guard__ = __webpack_require__("../../../../../src/app/shared/user/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_private_zone_private_zone_component__ = __webpack_require__("../../../../../src/app/pages/private-zone/private-zone.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login1',
        component: __WEBPACK_IMPORTED_MODULE_3__component_login1_login1_component__["a" /* Login1Component */]
    },
    {
        path: 'login2',
        component: __WEBPACK_IMPORTED_MODULE_4__login2_login2_component__["a" /* Login2Component */]
    },
    {
        path: 'pic2',
        component: __WEBPACK_IMPORTED_MODULE_6__pic2_pic2_component__["a" /* Pic2Component */]
    },
    {
        path: 'pic4',
        component: __WEBPACK_IMPORTED_MODULE_7__pic4_pic4_component__["a" /* Pic4Component */]
    },
    {
        path: 'project2',
        component: __WEBPACK_IMPORTED_MODULE_8__project2_project2_component__["a" /* Project2Component */]
    },
    {
        path: 'project3',
        component: __WEBPACK_IMPORTED_MODULE_9__project3_project3_component__["a" /* Project3Component */]
    },
    {
        path: 'issue',
        component: __WEBPACK_IMPORTED_MODULE_10__issue_issue_component__["a" /* IssueComponent */]
    },
    {
        path: 'issue1',
        component: __WEBPACK_IMPORTED_MODULE_11__issue1_issue1_component__["a" /* Issue1Component */]
    },
    {
        path: 'issue2',
        component: __WEBPACK_IMPORTED_MODULE_12__issue2_issue2_component__["a" /* Issue2Component */]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'private',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_private_zone_private_zone_component__["a" /* PrivateZoneComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__shared_user_login_guard__["a" /* LoginGuard */]],
        children: [
            {
                path: 'login1',
                component: __WEBPACK_IMPORTED_MODULE_3__component_login1_login1_component__["a" /* Login1Component */]
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login1_login1_component__ = __webpack_require__("../../../../../src/app/component/login1/login1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login2_login2_component__ = __webpack_require__("../../../../../src/app/login2/login2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pic2_pic2_component__ = __webpack_require__("../../../../../src/app/pic2/pic2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pic4_pic4_component__ = __webpack_require__("../../../../../src/app/pic4/pic4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project2_project2_component__ = __webpack_require__("../../../../../src/app/project2/project2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project3_project3_component__ = __webpack_require__("../../../../../src/app/project3/project3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__issue_issue_component__ = __webpack_require__("../../../../../src/app/issue/issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__issue1_issue1_component__ = __webpack_require__("../../../../../src/app/issue1/issue1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__issue2_issue2_component__ = __webpack_require__("../../../../../src/app/issue2/issue2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_private_zone_private_zone_component__ = __webpack_require__("../../../../../src/app/pages/private-zone/private-zone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_user_login_guard__ = __webpack_require__("../../../../../src/app/shared/user/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__public_zone_public_zone_component__ = __webpack_require__("../../../../../src/app/public-zone/public-zone.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__component_login1_login1_component__["a" /* Login1Component */],
                __WEBPACK_IMPORTED_MODULE_6__login2_login2_component__["a" /* Login2Component */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pic2_pic2_component__["a" /* Pic2Component */],
                __WEBPACK_IMPORTED_MODULE_10__pic4_pic4_component__["a" /* Pic4Component */],
                __WEBPACK_IMPORTED_MODULE_11__project2_project2_component__["a" /* Project2Component */],
                __WEBPACK_IMPORTED_MODULE_12__project3_project3_component__["a" /* Project3Component */],
                __WEBPACK_IMPORTED_MODULE_13__issue_issue_component__["a" /* IssueComponent */],
                __WEBPACK_IMPORTED_MODULE_14__issue1_issue1_component__["a" /* Issue1Component */],
                __WEBPACK_IMPORTED_MODULE_15__issue2_issue2_component__["a" /* Issue2Component */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_private_zone_private_zone_component__["a" /* PrivateZoneComponent */],
                __WEBPACK_IMPORTED_MODULE_22__public_zone_public_zone_component__["a" /* PublicZoneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__shared_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_21__shared_user_login_guard__["a" /* LoginGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/login1/login1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n   .p1 {\n    margin-left: 250px;\n  }\nimg{\n  margin-left: 250px;\n  \n}\n  div {\n    padding-left: 0px;\n  }\n  \n  /* b{\n    margin-left: 100px;\n    padding: 7px 130px;\n    text-align: center;\n  }   */\n\n\n  /* .login-box {\n    padding-top: 35px;\n}\n\n.login-icon-large {\n    font-size : 12rem;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login1/login1.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <p class=\"p1\">\n<img src=\"assets/image/w4.png\" width=\"90px\" height=\"90px\">\n<br/>\n<hr width=\"100%\">\n\n<!-- <div class=\"row\">\n<form class=\"col s12\"></form>\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <i class=\"material-icons prefix\">account_circle</i>\n      <input placeholder=\"UserCode\" type=\"text\" name=\"userCode\" [(ngModel)]=\"user.userCode\">\n\n\n\n<form class=\"col s12\"> </form>\n  <div class=\"input-field col s12\">\n    <i class=\"material-icons prefix\">lock</i>\n    <input placeholder=\"password\" Password input type=\"password\" name=\"userPwd\" [(ngModel)]=\"user.userPwd\">\n  <div class=\"input-field col s10\">\n       <b class=\"btn\" (click)=\"doLogin()\">Login</b>  -->\n\n       \n<!-- <div class=\"row\">\n  <form class=\"col s12\">\n    <div class=\"row\">\n      <div class=\"input-field col s6\">\n        <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\" name=\"userCode\" [(ngModel)]=\"user.userCode\">\n        <label for=\"first_name\">User</label>\n      </div>\n      <div class=\"input-field col s6\">\n        <input id=\"last_name\" type=\"text\" class=\"validate\">\n        <label for=\"last_name\">Password</label>\n      </div>\n    </div>\n  </form>\n</div> -->\n\n<!-- <div class=\"container login-box\">\n  <form (ngSubmit)=\"doLogin()\" ngNativeValidate materialize>\n    <div class=\"row login-box\">\n      <div class=\"input-field col s12 m6 offset-m3\">\n        <i class=\"material-icons prefix\">account_circle</i>\n        <input id=\"userCode\" name=\"userCode\" [(ngModel)]=\"user.userCode\" required=\"required\" type=\"text\" class=\"validate\">\n        <label for=\"userCode\">User</label>\n      </div>\n      <div class=\"input-field col s12 m6 offset-m3\">\n        <i class=\"material-icons prefix\">lock</i>\n        <input id=\"userPwd\" name=\"userPwd\" [(ngModel)]=\"user.userPwd\" required=\"required\"\n              type=\"password\" class=\"validate\">\n        <label for=\"userPwd\">Password</label>\n      </div>\n      <button type=\"submit\" class=\"col s10 offset-s1 m4 offset-m4 btn blue darken-3\" >Login</button>\n    </div>\n  </form>\n</div>  -->\n\n\n<div class=\"container\">\n    <div class=\"row\">\n      <form class=\"col s12 m12 l12\">\n        <div class=\"row\">\n          <div class=\"input-field col s10\">\n            <i class=\"material-icons prefix\">account_circle</i>\n            <input placeholder=\"UserCode\" type=\"text\" name=\"userCode\" [(ngModel)]=\"user.userCode\">\n    </div>\n    </div>\n  <div class=\"row\">\n    <div class=\"input-field col s10\">\n        <i class=\"material-icons prefix\">lock</i>\n        <input placeholder=\"password\" Password input type=\"password\" name=\"userPwd\" [(ngModel)]=\"user.userPwd\">\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12 center-align\">\n            <button class=\"btn cyan darken-1\">login</button>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/component/login1/login1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_user_user_service__ = __webpack_require__("../../../../../src/app/shared/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_user__ = __webpack_require__("../../../../../src/app/shared/user/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login1Component = (function () {
    function Login1Component(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_user_user__["a" /* User */]();
    }
    Login1Component.prototype.ngOnInit = function () {
    };
    Login1Component.prototype.doLogin = function () {
        var _this = this;
        this.userService.login(this.user).subscribe((function (resp) {
            console.log(resp);
            if (resp.success) {
                _this.router.navigate(['issue2']);
            }
            else {
                alert(resp.message);
            }
        }));
    };
    Login1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login1',
            template: __webpack_require__("../../../../../src/app/component/login1/login1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login1/login1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], Login1Component);
    return Login1Component;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* button {\n    background-color: blue;\n    color: aliceblue;\n    text-align: center;\n    margin-left: 900px;\n} */\n/* .p1{\n   \n    margin-left: 850px;\n } */\n.parallax-container {\n    height: \"your height here\";\n  }\n  body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 100vh;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  main {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n  }\n  /* i{\n    color: rgb(243, 1, 1);\n    font-size: 3rem;\n  } */\n  h5{\n      color: #424242;\n  }\n  h6{\n      color: #004d40;\n  }\n  h3{\n     color: #212121;\n  }\n#team{\n    color: rgb(138, 89, 230);\n}\n#img{\n    margin-left: 200px;\n    margin-top: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n        <div class=\"nav-wrapper\">\n                <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\" class=\"circle\" alt=\"\" id=\"img\">\n                <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n                        <li>\n                                <a href=\"#!\" routerLink=\"/home\">app-home</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/login1\">Login 1</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/login2\">Login 2</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/issue\">issue</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/issue1\">issue 1</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/issue2\">issue 2</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/pic2\">pic 2</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/pic4\">pic 4</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/project2\">project 2</a>\n                        </li>\n                        <li>\n                                <a href=\"#!\" routerLink=\"/project3\">project 3</a>\n                        </li>\n                </ul>\n        </div>\n</nav>\n\n<div class=\"container\">\n<div class=\"slider\">\n        <ul class=\"slides\">\n                <li>\n                        <img src=\"assets/image/w15.jpg\">\n                        <!-- random image -->\n                        <div class=\"caption center-align\">\n                                <h5>Powerful Existence In The World Of Online</h5>\n                                <h6>WEB DESIGNING@DEVELOPMENT</h6>\n                        </div>\n                </li>\n                <li>\n                        <img src=\"assets/image/w14.jpg\">\n                        <!-- random image -->\n                        <div class=\"caption right-align\">\n                                <h3>Applelnsider ios App</h3>\n                                <h5>iPad # iPhone</h5>\n                        </div>\n                </li>\n                <li>\n                        <img src=\"assets/image/w13.jpg\">\n                        <!-- random image -->\n                        <div class=\"caption right-align\">\n                                <h3>Right Aligned Caption</h3>\n                                <h5>Mobile App</h5>\n                        </div>\n                </li>\n                <li>\n                        <img src=\"assets/image/w12.jpg\">\n                        <!-- random image -->\n                        <div class=\"caption left-align\">\n                                <h3>FUN LIFE</h3>\n                                <h5>ipone # ipad</h5>\n                        </div>\n                </li>\n        </ul>\n</div>\n</div>\n\n\n<section class=\"section center grey lighten-2\" id=\"services\">\n        <h2>Our Services</h2>\n        <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col s12 m4\">\n                                <i class=\"large material-icons\">important_devices</i>\n                                <h5>Desktop Development</h5>\n                                <h6>Get guidance, reference info, tutorials, and code examples to help you build your application, whether it’s brand new or ported from another platform.</h6>\n                        </div>                       \n                <div class=\"col s12 m4\">\n                                <i class=\"large material-icons\">developer_mode</i>\n                                <h5>Mobile Development</h5>\n                                <h6>Automate the lifecycle of your iOS, Android, Windows, and macOS apps. Connect your repo and within minutes build in the cloud, test on thousands of real devices, distribute to beta testers and app stores, and monitor real-world usage with crash and analytics data. All in one place.</h6>\n                        </div>                                           \n                <div class=\"col s12 m4\">\n                                <i class=\"large material-icons\">settings_ethernet</i>\n                                <h5>Web Development</h5>\n                                <h6>Welcome to the MDN Learning Area. This set of articles aims to provide complete beginners to web development with all they need to start coding simple websites.</h6>\n                        </div>                        \n                </div>\n        </div>\n</section>\n\n<section class=\"section center\" id=\"team\">\n        <div class=\"parallax-container valign-wrapper\">\n                <div class=\"container valign\">\n                        <h2>Team</h2>\n                        <div class=\"row\">\n                                <div class=\"col s12 m3\">\n                                        <img src=\"assets/image/w17.png\" width=\"200\" height=\"200\" class=\"circle\" alt=\"\">\n                                        <h3 class=\"text-color red\">บอล</h3>\n                                        <span>Web Designer</span>\n                                </div>\n                                <div class=\"col s12 m3\">\n                                        <img src=\"assets/image/w18.jpg\" width=\"200\" height=\"200\" class=\"circle\" alt=\"\">\n                                        <h3 class=\"text-color green\">หม่ำ</h3>\n                                        <span>Web Development</span>\n                                </div>\n                                <div class=\"col s12 m3\">\n                                        <img src=\"assets/image/w19.jpg\" width=\"200\" height=\"200\" class=\"circle\" alt=\"\">\n                                        <h3 class=\"text-color blue\">เท่ง</h3>\n                                        <span>Mobile Development</span>\n                                </div>\n                                <div class=\"col s12 m3\">\n                                        <img src=\"assets/image/w20.png\" width=\"200\" height=\"200\" class=\"circle\" alt=\"\">\n                                        <h3 class=\"text-color white\">โหน่ง</h3>\n                                        <span>Desktop Designer</span>\n                                </div>\n                        </div>\n                </div>\n                <div class=\"parallax\"><img src=\"assets/image/w16.jpg\" width=\"200\" height=\"200\" class=\"responsive-img\">\n                </div>\n        </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div class=\"parallax-container\">\n        <div class=\"parallax\"><img src=\"assets/image/w11.gif\"></div>\n</div>\n        <div class=\"section white\">\n                <div class=\"row container\">\n        </div>\n</div> -->\n<!-- <b class=\"p1\">\n                <img src=\"assets/image/w2.jpg\"width=\"200px\" height=\"150px\">\n<br/> -->\n\n<!-- <button routerLink=\"/home\">app-home</button><i class=\"material-icons prefix\">account_balance</i><br/><br/>\n<button routerLink=\"/login1\" >Login 1</button><i class=\"material-icons prefix\">accessibility</i><br/><br/>\n<button routerLink=\"/login2\" >Login 2</button><i class=\"material-icons prefix\">accessible</i><br/><br/>\n<button routerLink=\"/issue\" >issue</button><i class=\"material-icons prefix\">airline_seat_recline_extra</i><br/><br/>\n<button routerLink=\"/issue1\" >issue 1</button><i class=\"material-icons prefix\">airline_seat_recline_normal</i><br/><br/>\n<button routerLink=\"/issue2\" >issue 2</button><i class=\"material-icons prefix\">directions_walk</i><br/><br/>\n<button routerLink=\"/pic2\" >pic 2</button><i class=\"material-icons prefix\">directions_run</i><br/><br/>\n<button routerLink=\"/pic4\" >pic 4</button><i class=\"material-icons prefix\">directions_bike</i><br/><br/>\n<button routerLink=\"/project2\" >project 2</button><i class=\"material-icons prefix\">rowing</i><br/><br/>\n<button routerLink=\"/project3\" >project 3</button><i class=\"material-icons prefix\">transfer_within_a_station</i><br/><br/> -->\n\n<!-- <div class=\"carousel\">\n                        <a class=\"carousel-item\" href=\"#one!\"><img src=\"https://lorempixel.com/250/250/nature/1\"></a>\n                        <a class=\"carousel-item\" href=\"#two!\"><img src=\"https://lorempixel.com/250/250/nature/2\"></a>\n                        <a class=\"carousel-item\" href=\"#three!\"><img src=\"https://lorempixel.com/250/250/nature/3\"></a>\n                        <a class=\"carousel-item\" href=\"#four!\"><img src=\"https://lorempixel.com/250/250/nature/4\"></a>\n                        <a class=\"carousel-item\" href=\"#five!\"><img src=\"https://lorempixel.com/250/250/nature/5\"></a>\n                      </div> -->\n\n\n<!-- <div class=\"parallax-container\">\n        <div class=\"parallax\">\n        <img src=\"assets/image/w7.jpg\">\n        </div>\n</div> -->\n\n<footer class=\"page-footer  blue-grey darken-4\">\n        <div class=\"container\">\n                <div class=\"row\">\n                        <div class=\"col l6 s12\">\n                                <h3 class=\"black-text\">Wezaball Content</h3>\n                                <h1>FUCK YOU!!!!!!!!!!!!!!!</h1>\n                        </div>\n                        <div class=\"col l4 offset-l2 s12\">\n                                <h5 class=\"white-text\">Links</h5>\n                                <ul>\n                                        <li>\n                                                <a class=\"grey-text text-lighten-3\" href=\"https://www.google.com\">google</a>\n                                        </li>\n                                        <li>\n                                                <a class=\"grey-text text-lighten-3\" href=\"https://www.youtube.com\">youtube</a>\n                                        </li>\n                                        <li>\n                                                <a class=\"grey-text text-lighten-3\" href=\"https://www.facebook.com\">facebook</a>\n                                        </li>\n                                        <li>\n                                                <a class=\"grey-text text-lighten-3\" href=\"http://www.materializecss.com\">materializecss</a>\n                                        </li>\n                                </ul>\n                        </div>\n                </div>\n        </div>\n        <div class=\"footer-copyright\">\n                <div class=\"container\">\n                        © 2018 Copyright Text\n                        <a class=\"grey-text text-lighten-4 right\" href=\"http://localhost:4200/home\">More Links</a>\n                </div>\n        </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/issue/issue.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n  margin-left: 200px;\n  margin-top: 3px;\n}\n\nul{\n  display:inline-block;\n}\n#myInput {\n  \n  border-left: 50px;\n  height: 20px;\n  width: 80%;\n  font-size: 16px;\n  padding:15px;\n  border: 3px solid #ddd;\n  margin-left: 30px;\n}\nimg{\n  margin-left: 50px;\n}\n#a{\n  margin-left: 170px;\n}\ni{\n  color: darkorange;\n}\n#icon{\n  color: deepskyblue;\n}\n#clearfix{\n  margin-left: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue/issue.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n        <div class=\"nav-wrapper\">\n                <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n                <li><a href=\"#!\">Issue</a></li>\n                <li><a href=\"#!\">Project</a></li>\n                <li><a href=\"#!\">PIC</a></li>\n          </ul>\n        </div>\n      </nav>\n<div class=\"container\">\n        <div  class=\"col 12 m12 s12 clearfix\">\n                <input type=\"text\" id=\"myInput\" onkeyup=\"myFunction()\" placeholder=\"Search Criteria.\" title=\"Type in a name\">\n        </div>\n</div>\n\n\n\n<div  class=\"col 12 m12 s12 clearfix\" id=\"clearfix\">   \n                \n                   <ul class=\"row produktliste\">\n                       <li  class=\"col 12 m12 s12 clearfix\">\n                           <div class=\"card\">\n                               <div>\n                                       <img src=\"assets/image/w4.png\"width=\"150px\" height=\"120px\">\n                               </div>\n                               <div class=\"card-content\">\n                                       <a class=\"btn-floating btn-large waves-effect waves-light yellow\"id=\"a\">\n                                               <i class=\"material-icons\">edit</i>\n                                           </a>\n                                   <h6><b>Issue 533</b>:ซ่อน-รายละเอียด-ประโยชน์</h6>\n                                   <h6><b>วันที่</b>:28/11/2018</h6>\n                                   <h6><b>สถานะ</b>:open</h6>\n                               </div>\n                               <div class=\"card-action row\">\n                                       <i class=\"material-icons\">delete</i>REMOVE\n                                       <i class=\"material-icons\" id=\"icon\">attach_file</i>ATTACH\n                               </div>\n                           </div>\n                       </li>\n                   </ul>  \n                 \n                \n         \n                   <ul class=\"row produktliste\">\n                           <li  class=\"col 12 m12 s12 clearfix\">\n                               <div class=\"card\">\n                                   <div>\n                                           <img src=\"assets/image/w4.png\"width=\"150px\" height=\"120px\">\n                                   </div>\n                                   <div class=\"card-content\">\n                                           <a class=\"btn-floating btn-large waves-effect waves-light yellow\"id=\"a\">\n                                                   <i class=\"material-icons\">edit</i>\n                                               </a>\n                                       <h6><b>Issue 531</b>:หลังจากค้นหาเสร็จแล้ว..</h6>\n                                       <h6><b>วันที่</b>:24/11/2017</h6>\n                                       <h6><b>สถานะ</b>:open</h6>\n                                   </div>\n                                   <div class=\"card-action row\">\n                                           <i class=\"material-icons\">delete</i>REMOVE\n                                           <i class=\"material-icons\"id=\"icon\">attach_file</i>ATTACH\n                                   </div>\n                               </div>\n                           </li>\n                   </ul>  \n                                     \n                     \n              \n                   <ul class=\"row produktliste\">\n                               <li  class=\"col 12 m12 s12 clearfix\">\n                                   <div class=\"card\">\n                                       <div>\n                                               <img src=\"assets/image/w4.png\"width=\"150px\" height=\"120px\">\n                                       </div>\n                                       <div class=\"card-content\">\n                                               <a class=\"btn-floating btn-large waves-effect waves-light yellow\"id=\"a\">\n                                                       <i class=\"material-icons\">edit</i>\n                                                   </a>\n                                           <h6><b>Issue 533</b>:ใส่วันเรียนเป็น24-26Jan2..</h6>\n                                           <h6><b>วันที่</b>:24/11/2017</h6>\n                                           <h6><b>สถานะ</b>:open</h6>\n                                       </div>\n                                       <div class=\"card-action row\">\n                                               <i class=\"material-icons\">delete</i>REMOVE\n                                               <i class=\"material-icons\"id=\"icon\">attach_file</i>ATTACH\n                                       </div>\n                                   </div>\n                                   \n                               </li>                   \n                   </ul>  \n            </div>\n        \n                   <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n                     <a class=\"btn-floating btn-large green\">\n                         <i class=\"material-icons\">add</i>\n                     </a>\n                   </div>\n           \n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/issue/issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IssueComponent = (function () {
    function IssueComponent() {
    }
    IssueComponent.prototype.ngOnInit = function () {
    };
    IssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issue',
            template: __webpack_require__("../../../../../src/app/issue/issue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/issue/issue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IssueComponent);
    return IssueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/issue1/issue1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n    margin-left: 200px;\n    margin-top: 3px;\n  }\n  table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 90%;\n}\n\ntd, th {\n    border: 2px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\nbutton {\n    background-color: rgb(3, 130, 248);\n    color: aliceblue;\n    padding: 8px 40px;\n    margin-left: 15px;\n}\n#icon{\n    margin-left: 600px;\n    color: cyan;\n}\ni{\n    color:  rgb(241, 67, 55);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue1/issue1.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n        <div class=\"nav-wrapper\">\n            <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a href=\"#!\">Issue</a></li>\n            <li><a href=\"#!\">Project</a></li>\n            <li><a href=\"#!\">PIC</a></li>\n          </ul>\n        </div>\n      </nav>\n\n      <div class=\"container\">\n      <div class=\"row\">\n            <div class=\"input-field col s10\">\n                <form action=\"#\">\n                    <div class=\"file-field input-field\">\n                        <div class=\"btn\">\n                            <span>File</span>\n                            <input type=\"file\">\n                        </div>\n                        <div class=\"file-path-wrapper\">\n                            <input class=\"file-path validate\" type=\"text\">\n                            <button class=\"btn cyan darken-1\">ATTACH</button>\n                        </div>\n                    </div>\n                </form> \n            </div>\n        \n      <div class=\"container\">\n            <table>\n              <tr>\n                <th><h4>Attach File</h4></th>\n              </tr>\n              <tr>\n                <th><i class=\"material-icons\">delete</i>DevOps.png<i class=\"material-icons\" id=\"icon\">send</i></th>\n              </tr>\n              <tr>\n                <th><i class=\"material-icons\">delete</i>DevOps.png<i class=\"material-icons\"id=\"icon\">send</i></th>\n              </tr>\n              <tr>\n                <th><i class=\"material-icons\">delete</i>DevOps.png<i class=\"material-icons\"id=\"icon\">send</i></th>\n                </tr>\n            </table>\n          </div>\n          <br/>\n          <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col s12 m12 l12 center-align\">\n                <button class=\"btn cyan darken-1\">BACK</button>\n                </div>\n              </div>\n            </div>\n          \n      "

/***/ }),

/***/ "../../../../../src/app/issue1/issue1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Issue1Component = (function () {
    function Issue1Component() {
    }
    Issue1Component.prototype.ngOnInit = function () {
    };
    Issue1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issue1',
            template: __webpack_require__("../../../../../src/app/issue1/issue1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/issue1/issue1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Issue1Component);
    return Issue1Component;
}());



/***/ }),

/***/ "../../../../../src/app/issue2/issue2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n  margin-left: 200px;\n  margin-top: 3px;\n}\nbutton {\n  color: aliceblue;\n  margin-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/issue2/issue2.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n    <div class=\"nav-wrapper\">\n      <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"#!\">Issue</a></li>\n        <li><a href=\"#!\">Project</a></li>\n        <li><a href=\"#!\">PIC</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  \n<div class=\"container\">\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s6\">\n        <select>\n          <option value=\"\" disabled selected>PnP Solution</option>\n          <option value=\"1\">Option 1</option>\n          <option value=\"2\">Option 2</option>\n        </select>\n        <label>Project</label>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Issue Date</label>\n              </div>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s6\">\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Issue Bye</label>\n              </div>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s12\">\n        <select>\n          <option value=\"\" disabled selected>Change Request</option>\n          <option value=\"1\">Option 1</option>\n          <option value=\"2\">Option 2</option>\n        </select>\n        <label>Type</label>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s6\">\n        <select>\n          <option value=\"\" disabled selected>Anon Thaicharoenporn</option>\n          <option value=\"1\">Option 1</option>\n          <option value=\"2\">Option 2</option>\n        </select>\n          <label>PIC</label>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s12\">\n        <select>\n          <option value=\"\" disabled selected>High</option>\n          <option value=\"1\">Option 1</option>\n          <option value=\"2\">Option 2</option>\n        </select>\n          <label>Priority</label>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s12\">\n        <select>\n          <option value=\"\" disabled selected>Open</option>\n          <option value=\"1\">Option 1</option>\n          <option value=\"2\">Option 2</option>\n        </select>\n          <label>Status</label>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Target Date</label>\n              </div>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Module</label>\n              </div>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Close Date</label>\n              </div>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n            <h6>ซ่อน</h6>\n            <h6>-รายละเอียด</h6>\n            <h6>-ประโชยน์ที่ได้รับ</h6>\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Description</label>\n              </div>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <input placeholder=\"Placeholder\" id=\"first_name\" type=\"text\" class=\"validate\">\n            <label for=\"first_name\">Solution</label>\n              </div>                                                                   \n            </div>\n          </form>\n        </div>\n      </div>\n        <br>\n      <button class=\"btn cyan darken-1\">BACK</button>\n      <button class=\"btn cyan darken-1\">SAVE</button>\n    \n            \n                \n                                 \n"

/***/ }),

/***/ "../../../../../src/app/issue2/issue2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Issue2Component = (function () {
    function Issue2Component() {
    }
    Issue2Component.prototype.ngOnInit = function () {
    };
    Issue2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issue2',
            template: __webpack_require__("../../../../../src/app/issue2/issue2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/issue2/issue2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Issue2Component);
    return Issue2Component;
}());



/***/ }),

/***/ "../../../../../src/app/login2/login2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".p1 {\n    margin: 250px;\n}\ntable {\n    margin-left: 200px;\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 70%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\nth{\n    color: cyan;\n}\nbutton {\n    padding: 7px 130px;\n  } \n  i{\n    color: rgb(241, 67, 55);\n    font-size: 15rem;\n    \n  }\n  h4{\n      text-align: center;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login2/login2.component.html":
/***/ (function(module, exports) {

module.exports = "<b class=\"p1\">\n    <img src=\"assets/image/w4.png\" width=\"90px\" height=\"90px\">\n    <br/>\n    <hr width=\"100%\">\n    <br/>\n</b>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12 center-align\">\n        <i class=\"large material-icons\">account_circle</i>\n      </div>\n    </div>\n  </div>\n<h4>ผู้ดูแลระบบ</h4>\n<div class=\"container\">\n  <table>\n    <tr>\n      <th><a href=\"#\">Issue</a></th>\n    </tr>\n    <tr>\n      <th><a href=\"#\">Project</a></th>\n    </tr>\n    <tr>\n      <th><a href=\"#\">PIC</a></th>\n    </tr>\n  </table>\n</div>\n<br/>\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12 m12 l12 center-align\">\n      <button class=\"btn cyan darken-1\">logout</button>\n      </div>\n    </div>\n  </div>\n\n  \n\n    "

/***/ }),

/***/ "../../../../../src/app/login2/login2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Login2Component = (function () {
    function Login2Component() {
    }
    Login2Component.prototype.ngOnInit = function () {
    };
    Login2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login2',
            template: __webpack_require__("../../../../../src/app/login2/login2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login2/login2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Login2Component);
    return Login2Component;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/private-zone/private-zone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/private-zone/private-zone.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/pages/private-zone/private-zone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateZoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateZoneComponent = (function () {
    function PrivateZoneComponent() {
    }
    PrivateZoneComponent.prototype.ngOnInit = function () {
    };
    PrivateZoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-private-zone',
            template: __webpack_require__("../../../../../src/app/pages/private-zone/private-zone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/private-zone/private-zone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateZoneComponent);
    return PrivateZoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pic2/pic2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n  margin-left: 200px;\n  margin-top: 3px;\n}\n\n  button {\n    color: aliceblue;\n    margin-left: 15px;\n  }\n\n\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pic2/pic2.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n    <div class=\"nav-wrapper\">\n      <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"#!\">Issue</a></li>\n        <li><a href=\"#!\">Project</a></li>\n        <li><a href=\"#!\">PIC</a></li>\n      </ul>\n    </div>\n  </nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s8\">\n        <input placeholder=\"Pic Code\" UserCode input type=\"text\" />\n      </div>\n  <div>\n  <form>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s8\">\n        <input placeholder=\"Pic Name\" UserCode input type=\"text\" />\n      </div>\n  <div>\n  <form>\n  <div class=\"row\">\n    <form class=\"col s12\">\n      <div class=\"input-field col s8\">\n        <input placeholder=\"Pic Value\" UserCode input type=\"text\" />\n      </div>\n    </form>\n  </div>\n\n    <br>\n    <br>\n    <br>\n    <button class=\"btn cyan darken-1\">BACK</button>\n    <button class=\"btn cyan darken-1\">SAVE</button>\n  \n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pic2/pic2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pic2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Pic2Component = (function () {
    function Pic2Component() {
    }
    Pic2Component.prototype.ngOnInit = function () {
    };
    Pic2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pic2',
            template: __webpack_require__("../../../../../src/app/pic2/pic2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pic2/pic2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Pic2Component);
    return Pic2Component;
}());



/***/ }),

/***/ "../../../../../src/app/pic4/pic4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n  margin-left: 200px;\n  margin-top: 3px;\n}\n \n  \n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pic4/pic4.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n    <div class=\"nav-wrapper\">\n      <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"#!\">Issue</a></li>\n        <li><a href=\"#!\">Project</a></li>\n        <li><a href=\"#!\">PIC</a></li>\n      </ul>\n    </div>\n  </nav>\n\n<table class=\"striped\">\n  <thead>\n    <tr>\n      <th>Edit</th>\n      <th>Pic Code</th>\n      <th>Pic Name</th>\n      <th>Pic Value</th>\n      <th>Delete</th>\n    </tr>\n  </thead>\n    <tbody class=\"float\">\n      <tr>\n        <td>\n          <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n          <i class=\"material-icons\">edit</i>\n          </a>\n        </td>\n          <td>1</td>\n          <td>Sommai Krangpanich</td>\n          <td>pae</td>\n          <td>\n            <a class=\"btn-floating btn-large waves-effect waves-light red\">\n            <i class=\"material-icons\">delete</i>\n            </a>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n              <i class=\"material-icons\">edit</i>\n            </a>\n            <td>2</td>\n            <td>Chonnisa Thiembundit</td>\n            <td>tiew</td>\n            <td>\n              <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                <i class=\"material-icons\">delete</i>\n              </a>\n            </td>\n        </tr>\n        <tr>\n          <td>\n            <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n              <i class=\"material-icons\">edit</i>\n            </a>\n          </td>\n          <td>3</td>\n          <td>Anon Thaicharoenporn</td>\n          <td>non</td>\n          <td>\n            <a class=\"btn-floating btn-large waves-effect waves-light red\">\n              <i class=\"material-icons\">delete</i>\n            </a>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n    <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\n      <a class=\"btn-floating btn-large green\">\n        <i class=\"material-icons\">add</i>\n      </a>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/pic4/pic4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pic4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Pic4Component = (function () {
    function Pic4Component() {
    }
    Pic4Component.prototype.ngOnInit = function () {
    };
    Pic4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pic4',
            template: __webpack_require__("../../../../../src/app/pic4/pic4.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pic4/pic4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Pic4Component);
    return Pic4Component;
}());



/***/ }),

/***/ "../../../../../src/app/project2/project2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n    margin-left: 200px;\n    margin-top: 3px;\n}\n\nbutton {  \n    color: aliceblue; \n    margin-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project2/project2.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n        <div class=\"nav-wrapper\">\n            <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a href=\"#!\">Issue</a></li>\n            <li><a href=\"#!\">Project</a></li>\n            <li><a href=\"#!\">PIC</a></li>\n          </ul>\n        </div>\n      </nav>\n      <div class=\"container\">\n  <div class=\"row\">\n      <form class=\"col s12\">\n          <div class=\"input-field col s9\">\n              <input placeholder=\"Project Code\" UserCode input type=\"text\" />\n          </div>\n  <div>\n  <form>\n\n  <div class=\"row\">\n      <form class=\"col s12\">\n          <div class=\"input-field col s9\">\n              <input placeholder=\"Project Name\" UserCode input type=\"text\" />\n          </div>\n  <div>\n  <form>\n\n  <div class=\"row\">\n      <div class=\"input-field col s9 \">\n          <form action=\"#\">\n              <div class=\"file-field input-field \">\n                  <div class=\"btn\">\n                      <span>File</span>\n                      <input type=\"file\">\n                  </div>\n                  <div class=\"file-path-wrapper\">\n                      <input class=\"file-path validate\" type=\"text\">\n                  </div>\n              </div>\n          </form>\n          <br>\n\n          <h6>Status</h6>\n\n          <p>\n              <input class=\"with-gap\" name=\"group3\" type=\"radio\" id=\"test5\" checked />\n              <label for=\"test5\">Active</label>\n          </p>\n\n          <p>\n              <input class=\"with-gap\" name=\"group3\" type=\"radio\" />\n              <label for=\"test5\">Inactive</label>\n          </p>\n\n        \n              <br>\n              <br>\n              <br>\n              <button class=\"btn cyan darken-1\">BACK</button>\n              <button class=\"btn cyan darken-1\">SAVE</button>\n            </div>         \n"

/***/ }),

/***/ "../../../../../src/app/project2/project2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Project2Component = (function () {
    function Project2Component() {
    }
    Project2Component.prototype.ngOnInit = function () {
    };
    Project2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project2',
            template: __webpack_require__("../../../../../src/app/project2/project2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project2/project2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Project2Component);
    return Project2Component;
}());



/***/ }),

/***/ "../../../../../src/app/project3/project3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img{\n    margin-left: 200px;\n    margin-top: 3px;\n}\n/* div {\n    width: 2000px;\n    height: 750px;\n    overflow: auto;\n} */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project3/project3.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"grey darken-4\">\n        <div class=\"nav-wrapper\">\n            <img src=\"assets/image/w4.png\" width=\"80px\" height=\"55px\"class=\"circle\" alt=\"\"id=\"img\">\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a href=\"#!\">Issue</a></li>\n            <li><a href=\"#!\">Project</a></li>\n            <li><a href=\"#!\">PIC</a></li>\n          </ul>\n        </div>\n      </nav>\n<div>\n  <table class=\"striped\">\n      <thead>\n          <tr>\n              <th>Edit</th>\n              <th>Project Code</th>\n              <th>Project Name</th>\n              <th>Project Image</th>\n              <th>Active</th>\n              <th>Delete</th>\n          </tr>\n      </thead>\n\n      <tbody>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>CHECKER</td>\n              <td>CHECKER</td>\n              <td>knt_logo.jpg</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>DIS</td>\n              <td>DIS</td>\n              <td>dis_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>JBL</td>\n              <td>Join Big Lot</td>\n              <td>jbl_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>KL</td>\n              <td>KL Project</td>\n              <td>kl_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>KNT</td>\n              <td>Kan Air</td>\n              <td>kanair_logo.jpg</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>PNP</td>\n              <td>PnP Solution</td>\n              <td>pnp_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>PNP</td>\n              <td>PnP Solution</td>\n              <td>pnp_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>PNP</td>\n              <td>PnP Solution</td>\n              <td>pnp_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>PNP</td>\n              <td>PnP Solution</td>\n              <td>pnp_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n          <tr>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light yellow\">\n                            <i class=\"material-icons\">edit</i>\n                            </a>\n              </td>\n              <td>PNP</td>\n              <td>PnP Solution</td>\n              <td>pnp_logo.png</td>\n              <td>Y</td>\n              <td>\n                    <a class=\"btn-floating btn-large waves-effect waves-light red\">\n                            <i class=\"material-icons\">delete</i>\n                            </a>\n              </td>\n          </tr>\n      </tbody>\n  </table>\n</div>\n\n<a class=\"btn-floating btn-large green\">\n        <i class=\"material-icons\">add</i>\n      </a>"

/***/ }),

/***/ "../../../../../src/app/project3/project3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Project3Component = (function () {
    function Project3Component() {
    }
    Project3Component.prototype.ngOnInit = function () {
    };
    Project3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project3',
            template: __webpack_require__("../../../../../src/app/project3/project3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project3/project3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Project3Component);
    return Project3Component;
}());



/***/ }),

/***/ "../../../../../src/app/public-zone/public-zone.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-zone/public-zone.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  public-zone works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/public-zone/public-zone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicZoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicZoneComponent = (function () {
    function PublicZoneComponent() {
    }
    PublicZoneComponent.prototype.ngOnInit = function () {
    };
    PublicZoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-public-zone',
            template: __webpack_require__("../../../../../src/app/public-zone/public-zone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-zone/public-zone.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PublicZoneComponent);
    return PublicZoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem('auth_token')) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http) {
        this.http = http;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'JWT' + sessionStorage.getItem('auth_token')
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    }
    UserService.prototype.login = function (user) {
        var bodySting = JSON.stringify(user);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].remoteAPI + '/api/v1/login/doLogin', bodySting, this.options)
            .map(function (res) { return res.json(); })
            .do(function (res) {
            if (res.success) {
                sessionStorage.setItem('auth_token', res.auth_token);
                sessionStorage.setItem('userName', res.userName);
            }
            return res.success;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    //  remoteAPI: 'http://203.151.27.183:9590'
    remoteAPI: 'http://localhost:8090'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map