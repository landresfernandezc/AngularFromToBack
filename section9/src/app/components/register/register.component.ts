import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.authService
      .register(this.email, this.password)
      .then((res) => {
        this.flashMessageService.show("You have been registered successfully and logged in", {
          cssClass: "alert-success",
          timeout: 4000,
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessageService.show(err.message, {
          cssClass: "alert-danger",
          timeout: 4000,
        });
      });
  }
}
