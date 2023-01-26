import { Component, Input } from '@angular/core';
import { PlansService } from './plans.service';

type Plan = {
  name: string;
  price:{
    monthly: string;
    annual: string;
  };
  description: string;
  buttonText: string;
  details: string[];
};

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
    plans: Plan[];

    @Input() priceType = 'monthly';

      constructor(private plansservice: PlansService) {
          this.plans = this.plansservice.getPlans();
      }
}
