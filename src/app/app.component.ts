import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RnpService } from "../app/services/my-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token
  constructor(public pdiService: RnpService,private router: Router){
    this.met()
  }
  met(){
   this.token = this.pdiService.loadToken()
   console.log(this.token,"ksksksksksk")
  }
  logout(){
    this.pdiService.logout()
    this.router.navigateByUrl('elections/login')
  }
}
