import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { Client } from "src/app/models/Client";
import { AuthService } from "src/app/services/auth.service";
import { SettingsService } from "src/app/services/settings.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService,
    private settingsService:SettingsService
  ) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    })
    this.showRegister= this.settingsService.getSettings().allowRegistration;
  }
  onLogoutClick(){
    this.authService.logout();
    this.flashMessageService.show('Logged out succesfully',{
      cssClass:'alert-success',timeout:4000
    });
    this.router.navigate(['/login']);
  }
}
