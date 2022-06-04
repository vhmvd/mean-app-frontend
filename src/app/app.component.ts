import { LoginComponent } from './login.component';
import { Component } from '@angular/core';

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
