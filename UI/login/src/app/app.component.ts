import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

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

  constructor(private router: Router,private service: AuthService){
  }
  redirectToPage(userRole:any){
    if (userRole === 'admin'){
      this.router.navigate(['admin'])
    }else if(userRole === 'employee'){
      this.router.navigate(['employee'])
    }else if(userRole === 'manager'){
      this.router.navigate(['manager'])
    }
  }

  onLogin() {
    const data = {
      email:this.email,
      password:this.password
    }
    this.service.authenticateUser(data).subscribe(res=>{
      if(res){
        console.log(res)
        this.isLogged = true;
        localStorage.setItem('authToken', res.token);
        this.redirectToPage(res?.user.role.toLowerCase())
      }
    })
  }
}
