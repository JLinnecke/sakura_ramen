import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CommonModule } from '@angular/common';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingpageComponent, HowToOrderComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
