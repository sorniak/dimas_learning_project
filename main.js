(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/actions/block.actions.ts":
/*!******************************************!*\
  !*** ./src/app/actions/block.actions.ts ***!
  \******************************************/
/*! exports provided: ADD_ITEM, REMOVE_ITEM, MARK_ITEM, MAKE_QUOTE, AddItemAction, RemoveItemAction, MarkItemAction, MakeQuoteAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_ITEM", function() { return MARK_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKE_QUOTE", function() { return MAKE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemAction", function() { return AddItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveItemAction", function() { return RemoveItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkItemAction", function() { return MarkItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeQuoteAction", function() { return MakeQuoteAction; });
var ADD_ITEM = '[Main block compoment] Add item';
var REMOVE_ITEM = '[Display compoment] Remove item';
var MARK_ITEM = '[Display compoment] Mark item';
var MAKE_QUOTE = '[Main block compoment] Make A Quote';
var AddItemAction = /** @class */ (function () {
    function AddItemAction(payload) {
        this.payload = payload;
        this.type = ADD_ITEM;
    }
    return AddItemAction;
}());

var RemoveItemAction = /** @class */ (function () {
    function RemoveItemAction(payload) {
        this.payload = payload;
        this.type = REMOVE_ITEM;
    }
    return RemoveItemAction;
}());

var MarkItemAction = /** @class */ (function () {
    function MarkItemAction(payload) {
        this.payload = payload;
        this.type = MARK_ITEM;
    }
    return MarkItemAction;
}());

var MakeQuoteAction = /** @class */ (function () {
    function MakeQuoteAction(payload) {
        this.payload = payload;
        this.type = MAKE_QUOTE;
    }
    return MakeQuoteAction;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center pt-4\">\n  {{title}}\n</h1>\n<div class=\"container\">\n  <app-block></app-block>\n  <br/>\n  <app-display></app-display>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dzmitrys ToBuy App!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: localStorageSyncReducer, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block/block.component.ts");
/* harmony import */ var _reducers_block_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers/block.reducer */ "./src/app/reducers/block.reducer.ts");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./display/display.component */ "./src/app/display/display.component.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_addItemEffect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./effects/addItemEffect */ "./src/app/effects/addItemEffect.ts");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/quotes.service */ "./src/app/services/quotes.service.ts");
















var reducers = { block: _reducers_block_reducer__WEBPACK_IMPORTED_MODULE_10__["addReducer"] }; //need parameter to type -watch docs
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_7__["localStorageSync"])({ keys: ['block'], rehydrate: true })(reducer);
}
var metaReducers = [localStorageSyncReducer];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _block_block_component__WEBPACK_IMPORTED_MODULE_9__["BlockComponent"],
                _display_display_component__WEBPACK_IMPORTED_MODULE_11__["DisplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(reducers, { metaReducers: metaReducers }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_effects_addItemEffect__WEBPACK_IMPORTED_MODULE_14__["AddItemEffect"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({
                    maxAge: 10
                })
            ],
            providers: [_services_quotes_service__WEBPACK_IMPORTED_MODULE_15__["QuotesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/block/block.component.css":
/*!*******************************************!*\
  !*** ./src/app/block/block.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/block/block.component.html":
/*!********************************************!*\
  !*** ./src/app/block/block.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters m-5\"> \n\t<div class=\"col-10\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Add What To Buy\" name=\"toBuy\" #toBuy ngModel>\n\t</div>\n\t<div class=\"col-2\">\n\t\t<span class=\"input-group-text text-dark justify-content-center btn-secondary\" (click)=\"addToBuy({toBuy:toBuy.value,isBought:false})\">ADD</span>\n\t</div>\n</div>                          \n"

/***/ }),

/***/ "./src/app/block/block.component.ts":
/*!******************************************!*\
  !*** ./src/app/block/block.component.ts ***!
  \******************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_block_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions/block.actions */ "./src/app/actions/block.actions.ts");




var BlockComponent = /** @class */ (function () {
    function BlockComponent(store) {
        this.store = store;
    }
    BlockComponent.prototype.addToBuy = function (toBuy) {
        this.store.dispatch(new _actions_block_actions__WEBPACK_IMPORTED_MODULE_3__["AddItemAction"](toBuy));
    };
    BlockComponent.prototype.ngOnInit = function () {
    };
    BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block',
            template: __webpack_require__(/*! ./block.component.html */ "./src/app/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.css */ "./src/app/block/block.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/display/display.component.css":
/*!***********************************************!*\
  !*** ./src/app/display/display.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/display/display.component.html":
/*!************************************************!*\
  !*** ./src/app/display/display.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters mx-5\" *ngFor=\"let toBuyItem of toBuyItems | async;\" ><!--buy list -->\n\t<div class=\"col-10\">\n\t\t\t<input type=\"text\" class=\"input-group text-info h-100\" readonly value=\"{{toBuyItem.toBuy}}\" (click)=\"markToBuy(toBuyItem)\" [ngClass]=\"(toBuyItem.isBought) ? 'selected' : 'not_selected'\">\n\t</div> <!--readonly input with to buy element-->\n\t<div class=\"col-2\">\n\t\t<span class=\"input-group-text text-danger justify-content-center btn-warning\" (click)=\"delToBuy(toBuyItem)\">DELETE</span> <!--delete button for each buy element-->\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/display/display.component.ts":
/*!**********************************************!*\
  !*** ./src/app/display/display.component.ts ***!
  \**********************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_block_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../actions/block.actions */ "./src/app/actions/block.actions.ts");




var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(store) {
        this.store = store;
        this.toBuyItems = this.store.select('block', 'block');
    }
    DisplayComponent.prototype.delToBuy = function (payload) {
        this.store.dispatch(new _actions_block_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveItemAction"](payload));
    };
    DisplayComponent.prototype.markToBuy = function (payload) {
        this.store.dispatch(new _actions_block_actions__WEBPACK_IMPORTED_MODULE_3__["MarkItemAction"](payload));
    };
    DisplayComponent.prototype.toggleBuyState = function (buyState) {
        if (buyState === void 0) { buyState = false; }
        buyState = !buyState;
        var background_color = buyState ? 'selected' : 'not_selected';
        return background_color;
    };
    DisplayComponent.prototype.ngOnInit = function () {
    };
    DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/display/display.component.html"),
            styles: [__webpack_require__(/*! ./display.component.css */ "./src/app/display/display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/effects/addItemEffect.ts":
/*!******************************************!*\
  !*** ./src/app/effects/addItemEffect.ts ***!
  \******************************************/
/*! exports provided: AddItemEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemEffect", function() { return AddItemEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_block_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/block.actions */ "./src/app/actions/block.actions.ts");
/* harmony import */ var _services_quotes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/quotes.service */ "./src/app/services/quotes.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");












var AddItemEffect = /** @class */ (function () {
    function AddItemEffect(quotesService, actions$) {
        var _this = this;
        this.quotesService = quotesService;
        this.actions$ = actions$;
        this.myQuote = {
            id: 1,
            quote: String,
            by: String
        };
        this.updates$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_block_actions__WEBPACK_IMPORTED_MODULE_5__["ADD_ITEM"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return console.log(_this.quoteNow()); }));
    }
    AddItemEffect.prototype.quoteNow = function () {
        var _this = this;
        this.quotesService.getQuote().subscribe(function (data) {
            _this.myQuote.quote = data.quotes[0].quote;
            _this.myQuote.by = data.quotes[0].author;
        }, function (err) {
            _this.myQuote.quote = err;
            _this.myQuote.by = err;
        });
        return this.myQuote.quote;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AddItemEffect.prototype, "updates$", void 0);
    AddItemEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quotes_service__WEBPACK_IMPORTED_MODULE_6__["QuotesService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AddItemEffect);
    return AddItemEffect;
}());



/***/ }),

/***/ "./src/app/reducers/block.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/block.reducer.ts ***!
  \*******************************************/
/*! exports provided: addReducer, add, remove, mark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReducer", function() { return addReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mark", function() { return mark; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _defaultBlockState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultBlockState */ "./src/app/reducers/defaultBlockState.ts");
/* harmony import */ var _actions_block_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/block.actions */ "./src/app/actions/block.actions.ts");



function addReducer(state, action) {
    if (state === void 0) { state = _defaultBlockState__WEBPACK_IMPORTED_MODULE_1__["defaultBlockState"]; }
    switch (action.type) {
        case _actions_block_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_ITEM"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { block: add(state.block, action.payload) });
        case _actions_block_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_ITEM"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { block: remove(state.block, action.payload) });
        case _actions_block_actions__WEBPACK_IMPORTED_MODULE_2__["MARK_ITEM"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { block: mark(state.block, action.payload) });
        //case itemUpdate.MAKE_QUOTE:
        //    return{
        //      ...state, block: add(state.block, action.payload)
        //    }
        default:
            return state;
    }
}
function add(list, item) {
    return list.concat([item]);
}
function remove(list, item) {
    return list.filter(function (listItem) { return listItem.toBuy !== item.toBuy; });
}
function mark(list, item) {
    var listWithoutDoubleItem = list.filter(function (listItem) { return listItem.toBuy !== item.toBuy; });
    item.isBought = !item.isBought;
    return listWithoutDoubleItem.concat([item]);
}


/***/ }),

/***/ "./src/app/reducers/defaultBlockState.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/defaultBlockState.ts ***!
  \***********************************************/
/*! exports provided: defaultBlockState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBlockState", function() { return defaultBlockState; });
//export const defaultBlockState [0] = {
//  toBuy : '';,
//  isBought : false;
//}
var defaultBlockState = {
    block: []
};


/***/ }),

/***/ "./src/app/services/quotes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/quotes.service.ts ***!
  \********************************************/
/*! exports provided: QuotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesService", function() { return QuotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");







var QuotesService = /** @class */ (function () {
    function QuotesService(http) {
        this.http = http;
    }
    QuotesService.prototype.getQuote = function () {
        return this.http.get('http://quotes.rest/qod').map(function (response) { return response.json().contents; })
            .catch(function (err) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.statusText);
        });
    };
    QuotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QuotesService);
    return QuotesService;
}());



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
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dzmitryshemel/workplace/todoapp/todoApp8_from_scratch/toBuy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
