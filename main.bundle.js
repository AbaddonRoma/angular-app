webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__galary_galary_component__ = __webpack_require__("./src/app/galary/galary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */],
        pathMatch: 'full'
    },
    {
        path: 'galary',
        component: __WEBPACK_IMPORTED_MODULE_3__galary_galary_component__["a" /* GalaryComponent */],
        pathMatch: 'full'
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_4__contacts_contacts_component__["a" /* ContactsComponent */],
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ul>li>a{\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li><a routerLink=\"\">Main</a></li>\n    <li><a routerLink=\"/galary\">Galary</a></li>\n    <li><a routerLink=\"/contacts\">Contacts</a></li>\n  </ul>\n\n  <router-outlet></router-outlet>\n\n  <!-- <router-outlet></router-outlet> -->\n\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__galary_galary_component__ = __webpack_require__("./src/app/galary/galary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("./src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_4__galary_galary_component__["a" /* GalaryComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    border: 1px solid rgb(184, 220, 255); \r\n    border-radius: 20px 0 20px 0;\r\n    padding-left: 5%;    \r\n    max-width:70%;\r\n    min-width: 360px;\r\n    margin-left: 5%;\r\n    float:left;\r\n}\r\np{\r\n    cursor: pointer;\r\n}\r\np :hover{\r\n    text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-light\" >\n    <h4>Kutsyk Roman</h4>\n    <p>Ukraine, Ivano-Frankivsk</p>\n    <p>cell: +380601366624</p>\n    <p><a href=\"https://www.facebook.com/roma.kutsyk\" target=\"_blank\">Facebook</a></p>\n    <p><a href=\"https://github.com/AbaddonRoma\" target=\"_blank\">Github</a></p>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacts',
            template: __webpack_require__("./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__("./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/galary/galary.component.css":
/***/ (function(module, exports) {

module.exports = ".color-dark{\r\n    border-radius: 20px 20px 0 0;\r\n}\r\n.color-light{\r\n    border-radius: 0 0 20px 20px;\r\n    padding-left: 12%;\r\n}\r\n.head p{\r\n    margin-left: 1%;\r\n    font-size: 1.1em; \r\n    font-weight: 700;\r\n}\r\np{\r\n    margin: auto;\r\n}\r\n.pic{\r\n    width: 100%;\r\n    height: auto; \r\n    border:1px solid black;\r\n    border-radius: 10px;\r\n    margin: 15px;\r\n    overflow: hidden;\r\n    background-size: cover;\r\n    cursor: pointer;\r\n    padding: 0px;\r\n}\r\n.pic img{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n}"

/***/ }),

/***/ "./src/app/galary/galary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\n  <div class=\"row head\">\n    <p class=\"col\">Galary</p>\n  </div>\n</div>\n<div class=\"container color-light\">\n  <div class=\"row\">\n    <div class=\"pic col-3\"><img src=\"../../assets/1.jpg\" alt=\"pic1\"></div>\n    <div class=\"pic col-3\"><img src=\"../../assets/2.jpg\" alt=\"pic2\"></div>\n    <div class=\"pic col-3\"><img src=\"../../assets/3.jpg\" alt=\"pic3\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"pic col-3\"><img src=\"../../assets/4.jpg\" alt=\"pic4\"></div>\n    <div class=\"pic col-3\"><img src=\"../../assets/5.jpg\" alt=\"pic5\"></div>\n    <div class=\"pic col-3\"><img src=\"../../assets/6.jpg\" alt=\"pic6\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/galary/galary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalaryComponent = /** @class */ (function () {
    function GalaryComponent() {
    }
    GalaryComponent.prototype.ngOnInit = function () {
    };
    GalaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-galary',
            template: __webpack_require__("./src/app/galary/galary.component.html"),
            styles: [__webpack_require__("./src/app/galary/galary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalaryComponent);
    return GalaryComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".color-dark{\r\n    border-radius: 20px 0 0 0;\r\n}\r\n.color-light{\r\n    border-radius: 0 0 20px 0;\r\n}\r\n.content{\r\n    height: 200px;\r\n}\r\np{\r\n    margin: auto;\r\n}\r\n.head p{\r\n    margin-left: 2%;\r\n    font-size: 1.1em; \r\n    font-weight: 700;\r\n}\r\n.wrap-left{\r\n    width:300px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    margin: 50px 0 50px; \r\n}\r\n.block{\r\n    background: blue;\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.block span{\r\n    margin: auto;\r\n    font-size: 2em;\r\n}\r\n.wrap-right{\r\n    margin-top: 50px;\r\n    border: 1px solid white;\r\n    width:80%;\r\n    padding: 20px;\r\n}\r\n.color-light h3{\r\n    margin-left: 2%;\r\n}\r\n.btn{\r\n    width: 200px;\r\n    margin-top: 2%;\r\n    margin-left: 7%;\r\n}\r\n.won{\r\n    color: rgb(233, 121, 121);\r\n    font-weight: 800;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\n  <div class=\"row head\">\n    <p class=\"col\">Main</p>\n  </div>\n</div>\n<div class=\"container color-light\">\n  <h3>Wanna play? Press the button below</h3>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"start()\" [style.display]=\"buttonStartStyle\">Play</button>\n  <div class=\"row\">\n    <!-- LEFT SIDE -->\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n      <div class=\"wrap-left\"  >\n              <div class=\"block\" \n                  *ngFor = \"let block of blocks; let i = index\" \n                  (click)=\"XO(i)\">\n              <span>{{block}}</span>\n          </div>\n      </div>\n  </div>\n   <!-- RIGHT SIDE -->\n   <div class=\"col-6\">\n      <div class=\"wrap-right\" [style.display]=\"rightStyle\">\n        <h3>Games scores</h3>\n        <p>Player one: {{playerOne}}</p>\n        <p>Player two: {{playerTwo}}</p>\n        <p>{{turn}}</p>\n        <p class=\"won\">{{won}}</p>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"restart()\" [style.display]=\"buttonRestartStyle\">Play Again</button>\n    </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.trig = true;
        this.click = true;
        this.draw = false;
        this.turn = "Player ONE: your turn";
        this.playerOne = 0;
        this.playerTwo = 0;
        this.blocks = [];
        this.wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        this.won = "";
        this.buttonStartStyle = "block";
        this.rightStyle = "none";
        this.buttonRestartStyle = "none";
    }
    MainComponent.prototype.start = function () {
        this.blocks = ["", "", "", "", "", "", "", "", ""];
        this.turn = "Player ONE: your turn";
        this.buttonStartStyle = "none";
        this.rightStyle = "block";
        this.buttonRestartStyle = "none";
        this.click = true;
    };
    MainComponent.prototype.restart = function () {
        this.start();
        this.won = "";
        this.trig = true;
        this.draw = false;
    };
    // Click X|O and win functions
    MainComponent.prototype.XO = function (i) {
        if (this.click && this.blocks[i] === "" && this.draw === false) {
            if (this.trig) {
                this.blocks[i] = "X";
                this.trig = false;
                this.turn = "Player TWO: your turn";
            }
            else {
                this.blocks[i] = "O";
                this.trig = true;
                this.turn = "Player ONE: your turn";
            }
            for (var i_1 = 0; i_1 < this.blocks.length; i_1++) {
                this.draw = true;
                if (this.blocks[i_1] === "") {
                    this.draw = false;
                    break;
                }
            }
            if (this.draw === true) {
                this.won = "DRAW";
                this.buttonRestartStyle = "block";
                this.turn = "";
            }
            for (var i_2 = 0; i_2 < this.wins.length; i_2++) {
                if (this.win(i_2)) {
                    if (this.trig && this.draw === false) {
                        this.won = "Second player has WON the game";
                        this.playerTwo++;
                        this.click = false;
                        this.buttonRestartStyle = "block";
                    }
                    else if (!(this.trig) && this.draw === false) {
                        this.won = "First player has WON the game";
                        this.click = false;
                        this.playerOne++;
                        this.buttonRestartStyle = "block";
                    }
                    break;
                }
                ;
            }
        }
    };
    MainComponent.prototype.win = function (i) {
        var winTrig = false;
        for (var j in this.wins[i]) {
            if (this.blocks[this.wins[i][j]] === "X") {
                winTrig = true;
            }
            else {
                winTrig = false;
                break;
            }
        }
        if (winTrig === true) {
            return winTrig;
        }
        else {
            for (var j in this.wins[i]) {
                if (this.blocks[this.wins[i][j]] === "O") {
                    winTrig = true;
                }
                else {
                    winTrig = false;
                    break;
                }
            }
        }
        return winTrig;
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map