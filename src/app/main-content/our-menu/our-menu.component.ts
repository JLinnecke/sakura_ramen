import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

  contentList = [
    {
      src: './assets/img/3_section_our_menu/Png/R1.png', 
      title: 'Tonkatsu Ramen',
      variety1: 'OUR_MENU.ITEMS_1.INGREDIENT_1',
      price1: '11.95 €',
      variety2: 'OUR_MENU.ITEMS_1.INGREDIENT_2',
      price2: '12.95 €',
      variety3: 'OUR_MENU.ITEMS_1.INGREDIENT_3',
      price3: '13.95 €',
    },
    {
      title: 'Spicy Miso Ramen',
      variety1: 'OUR_MENU.ITEMS_2.INGREDIENT_1',
      price1: '11.95 €',
      variety2: 'OUR_MENU.ITEMS_2.INGREDIENT_2',
      price2: '12.95 €',
      variety3: 'OUR_MENU.ITEMS_2.INGREDIENT_3',
      price3: '13.95 €',
      src: './assets/img/3_section_our_menu/Png/R2.png',
    },
    {
      src: './assets/img/3_section_our_menu/Png/R3.png',
      title: 'Shio Ramen',
      variety1: 'OUR_MENU.ITEMS_3.INGREDIENT_1',
      price1: '11.95 €',
      variety2: 'OUR_MENU.ITEMS_3.INGREDIENT_2',
      price2: '12.95 €',
      variety3: 'OUR_MENU.ITEMS_3.INGREDIENT_3',
      price3: '13.95 €',
    },
  ];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
