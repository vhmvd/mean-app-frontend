import { NavBarComponent } from './navbar.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";

export const usersRouting = RouterModule.forRoot([
	{ 
		path: 'login/', 
		component: LoginComponent,
		
	},
	{ 
		path: 'signup/', 
		component: SignupComponent,
		
	},
    
]);