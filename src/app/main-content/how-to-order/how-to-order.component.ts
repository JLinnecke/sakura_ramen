import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {
  contentList = [
    {
      src: './assets/img/2_section_how_to_order/PNG/noodle.png',
      description: 'HOW_TO_ORDER.NOODLES',
    },
    {
      src: './assets/img/2_section_how_to_order/PNG/broth.png',
      description: 'HOW_TO_ORDER.BROTH',
    },
    {
      src: './assets/img/2_section_how_to_order/PNG/egg.png',
      description: 'HOW_TO_ORDER.TOPPINGS',
    },
  ];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
