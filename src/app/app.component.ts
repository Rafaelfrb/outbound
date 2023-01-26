import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  priceType: 'monthly' | 'annual' = 'monthly';

  setValueToMonthly() {
    this.priceType = "monthly";
  }

  setValueToAnnual() {
    this.priceType = "annual";
  }

}
