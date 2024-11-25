import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

  contentList = [
    {
      src: './assets/img/3_section_our_menu/Png/R1.png', 
      title: 'Tonkatsu Ramen',
      variety1: 'Chicken',
      price1: '11.95 €',
      variety2: 'Beef',
      price2: '12.95 €',
      variety3: 'Shrimp',
      price3: '13.95 €',
    },
    {
      title: 'Spicy Miso Ramen',
      variety1: 'Chicken',
      price1: '11.95 €',
      variety2: 'Beef',
      price2: '12.95 €',
      variety3: 'Shrimp',
      price3: '13.95 €',
      src: './assets/img/3_section_our_menu/Png/R2.png',
    },
    {
      src: './assets/img/3_section_our_menu/Png/R3.png',
      title: 'Shio Ramen',
      variety1: 'Chicken',
      price1: '11.95 €',
      variety2: 'Beef',
      price2: '12.95 €',
      variety3: 'Shrimp',
      price3: '13.95 €',
    },
  ];

}
