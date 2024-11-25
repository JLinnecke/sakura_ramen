import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {
  contentList = [
    {
      src: './assets/img/2_section_how_to_order/PNG/noodle.png',
      description: 'Pick your noodle',
    },
    {
      src: './assets/img/2_section_how_to_order/PNG/broth.png',
      description: 'Pick your broth',
    },
    {
      src: './assets/img/2_section_how_to_order/PNG/egg.png',
      description: 'Add your toppings',
    },
  ];
}
