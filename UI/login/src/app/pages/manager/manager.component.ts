import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent {
  comment:any ='Unauthorised'
  constructor(private service:AuthService){
    this.service.checkAuthDashboard('manager').subscribe(res=>{
      console.log(res)
      if(res.message){
        this.comment = res.message;
      }
    })
  }
}
