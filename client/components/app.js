var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var dashboard_1 = require('./dashboard');
var clinton_1 = require('./clinton');
var trump_1 = require('./trump');
var sanders_1 = require('./sanders');
var soltysik_1 = require('./soltysik');
var manage_1 = require('./manage');
var App = (function () {
    function App() {
    }
    App = __decorate([
        router_1.RouteConfig([
            { path: '/', as: 'Dashboard', component: dashboard_1.Dashboard },
            { path: '/clinton', as: 'Clinton', component: clinton_1.Clinton },
            { path: '/sanders', as: 'Sanders', component: sanders_1.Sanders },
            { path: '/trump', as: 'Trump', component: trump_1.Trump },
            { path: '/soltysik', as: 'Soltysik', component: soltysik_1.Soltysik },
            { path: '/manage', as: 'Manage', component: manage_1.Manage }
        ]),
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            template: "\n  <div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n    <header class=\"mdl-layout__header\">\n      <div class=\"mdl-layout__header-row\">\n        <span class=\"mdl-layout-title\">Stock Tracker</span>\n        <div class=\"mdl-layout-spacer\"></div>\n        <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Dashboard']\">Personal Dashboard</a>\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Clinton']\">Clinton</a>\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Sanders']\">Sanders</a>\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Trump']\">Trump</a>\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Soltysik']\">Soltysik</a>\n          <a class=\"mdl-navigation__link\" [router-link]=\"['/Manage']\">Manage</a>\n        </nav>\n      </div>\n    </header>\n    <main class=\"mdl-layout__content\" style=\"padding: 20px;\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;

//# sourceMappingURL=../components/app.js.map