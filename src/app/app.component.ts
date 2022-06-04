import { Component } from '@angular/core';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-root',
  template: `
        
        <navbar></navbar>
        
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        
        
        `
        
})
export class AppComponent {
  title = 'mean-app-frontend';
}
