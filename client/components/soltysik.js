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
var stocksSoltysik_1 = require('../services/stocksSoltysik');
var Soltysik = (function () {
    function Soltysik(service) {
        var _this = this;
        this.symbols = service.get();
        service.load(this.symbols)
            .subscribe(function (stocks) { return _this.stocks = stocks; });
    }
    Soltysik = __decorate([
        angular2_1.Component({
            selector: 'soltysik',
            viewBindings: [stocksSoltysik_1.StocksService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf, angular2_1.NgFor, summary_1.Summary],
            template: "\n    <h2>Mimi Soltysik's Favorite Stocks</h2>\n    <div class=\"mdl-cell mdl-cell--6-col\">\n<iframe width=\"640\" height=\"480\" src=\"https://www.youtube.com/embed/z6WMbV5Op58?rel=0&amp;controls=0&amp;showinfo=0;?rel=0&autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [stocksSoltysik_1.StocksService])
    ], Soltysik);
    return Soltysik;
})();
exports.Soltysik = Soltysik;

//# sourceMappingURL=../components/soltysik.js.map