import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
