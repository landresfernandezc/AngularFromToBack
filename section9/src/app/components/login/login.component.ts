import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.router.navigate(['/'])
      }
    })
  }
  onSubmit() {
    this.authService
      .login(this.email, this.password)
      .then((res) => {
        this.flashMessageService.show("You logged in with success", {
          cssClass: "alert-success",
          timeout: 4000,
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessageService.show(err, {
          cssClass: "alert-danger",
          timeout: 4000,
        });
      });
  }
}
