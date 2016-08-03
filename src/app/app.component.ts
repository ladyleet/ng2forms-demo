import { Component } from '@angular/core';
import { FormDemoComponent } from './form-demo';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  directives: [ FormDemoComponent ],
  template: `
  <nav>
    <div class="nav-wrapper purple">
      <a href="#" class="brand-logo center">Angular2 Forms Demo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
      </ul>
    </div>
  </nav>
  <div class="row margin-top-50">
    <div class="col s12">
      <app-form-demo></app-form-demo>
    </div>
  </div>

  `
})
export class AppComponent {
  title = 'app works!';
}
