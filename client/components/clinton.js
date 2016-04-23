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
var summary_1 = require('./summary');
var stocksClinton_1 = require('../services/stocksClinton');
var Clinton = (function () {
    function Clinton(service) {
        var _this = this;
        this.symbols = service.get();
        service.load(this.symbols)
            .subscribe(function (stocks) { return _this.stocks = stocks; });
    }
    Clinton = __decorate([
        angular2_1.Component({
            selector: 'clinton',
            viewBindings: [stocksClinton_1.StocksService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf, angular2_1.NgFor, summary_1.Summary],
            template: "\n    <h2>Hillary Clinton's Favorite Stocks</h2>\n    <div class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--12-col\" *ng-if=\"!stocks\" style=\"text-align: center;\">\n        Loading\n      </div>\n      <div class=\"mdl-cell mdl-cell--3-col\" *ng-for=\"#stock of stocks\">\n        <summary [symbol]=\"stock\"></summary>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [stocksClinton_1.StocksService])
    ], Clinton);
    return Clinton;
})();
exports.Clinton = Clinton;

//# sourceMappingURL=../components/clinton.js.map