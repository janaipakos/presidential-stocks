import {Component, View, Directive, NgIf, NgFor} from 'angular2/angular2';

import {Summary} from './summary';
import {StocksService, StockInterface} from '../services/stocksSoltysik';

@Component({
  selector: 'soltysik',
  viewBindings: [StocksService]
})
@View({
  directives: [NgIf, NgFor, Summary],
  template: `
    <h2>Mimi Soltysik's Favorite Stocks</h2>
    <div class="mdl-cell mdl-cell--6-col">
<iframe width="640" height="480" src="https://www.youtube.com/embed/z6WMbV5Op58?rel=0&amp;controls=0&amp;showinfo=0;?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
</div>
  `
})
export class Soltysik {
  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(service: StocksService) {
    this.symbols = service.get();

    service.load(this.symbols)
    .subscribe(stocks => this.stocks = stocks);
  }
}

