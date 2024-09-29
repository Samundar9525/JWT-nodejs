import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/authentication/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
    });
  }
}
