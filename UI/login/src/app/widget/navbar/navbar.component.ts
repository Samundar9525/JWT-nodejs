import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  roleClicked = new EventEmitter()
  constructor(public dialog: MatDialog, private router: Router) {
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }
  dashboardHandler(userRole:any){
    if (userRole === 'Admin'){
      this.router.navigate(['admin'])
    }else if(userRole === 'Employee'){
      this.router.navigate(['employee'])
    }else if(userRole === 'Manager'){
      this.router.navigate(['manager'])
    }
  }
}
