import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  comment:any ='Loading ....'

  constructor(private service:AuthService){
    this.service.checkAuthDashboard('admin').subscribe(res=>{
      console.log(res)
      if(res.message){
        this.comment = res.message;
      }else {
        this.comment = 'Unauthorised'
      }
    })
  }
}
