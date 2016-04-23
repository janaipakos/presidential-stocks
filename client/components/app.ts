import {Component, View} from 'angular2/angular2';
import {RouteConfig, Router, RouterOutlet, RouterLink} from 'angular2/router';

import {Dashboard} from './dashboard';
import {Clinton} from './clinton';
import {Trump} from './trump';
import {Sanders} from './sanders';
import {Soltysik} from './soltysik';
import {Manage} from './manage';

@RouteConfig([
  {path: '/', as: 'Dashboard', component: Dashboard},
  {path: '/clinton', as: 'Clinton', component: Clinton},
  {path: '/sanders', as: 'Sanders', component: Sanders},
  {path: '/trump', as: 'Trump', component: Trump},
  { path: '/soltysik', as: 'Soltysik', component: Soltysik},
  { path: '/manage', as: 'Manage', component: Manage }
])

@Component({
  selector: 'app'
})
@View({
  directives: [RouterOutlet, RouterLink],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Stock Tracker</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a class="mdl-navigation__link" [router-link]="['/Dashboard']">Personal Dashboard</a>
          <a class="mdl-navigation__link" [router-link]="['/Clinton']">Clinton</a>
          <a class="mdl-navigation__link" [router-link]="['/Sanders']">Sanders</a>
          <a class="mdl-navigation__link" [router-link]="['/Trump']">Trump</a>
          <a class="mdl-navigation__link" [router-link]="['/Soltysik']">Soltysik</a>
          <a class="mdl-navigation__link" [router-link]="['/Manage']">Manage</a>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content" style="padding: 20px;">
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class App {
}
