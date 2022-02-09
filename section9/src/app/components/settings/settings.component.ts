import { Component, OnInit } from "@angular/core";
import { Settings } from "src/app/models/Settings";
import { SettingsService } from "src/app/services/settings.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "flash-messages-angular";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    private router: Router,
    private flashMessageService: FlashMessagesService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }
  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessageService.show('Settings saved succesfully',{
      cssClass:'alert-success',timeout:4000
    });
  }
}
