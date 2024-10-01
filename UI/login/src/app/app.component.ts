import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login'
  userRole: any ='manager';
  email: string = '';
  password: string = '';
  isLogged: boolean = false;

  constructor(private router: Router){
    this.redirectToPage();
  }
  redirectToPage(){
    if (this.userRole === 'admin'){
      this.router.navigate(['admin'])
    }else if(this.userRole === 'employee'){
      this.router.navigate(['employee'])
    }else if(this.userRole === 'manager'){
      this.router.navigate(['manager'])
    }
  }

  onLogin() {
    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // You can now make an API call to verify login credentials
  }
}
