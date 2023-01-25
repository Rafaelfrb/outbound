import { Component } from '@angular/core';
import { PlansService } from './plans.service';

@Component({
    selector: 'plans',
    template: `
    <ul class="container">
        <li *ngFor="let plan of plans" class="plan-container">
            <h1>{{ plan.name }}</h1>
            <ul>
                <li class="price">{{plan.price}}</li>
                <li class="description">{{plan.description}}</li>
                <button mat-button>{{plan.buttonText}}</button>
                <ul class="detail-list">
                    <li>{{plan.details[0]}}</li>
                    <li>{{plan.details[1]}}</li>
                    <li>{{plan.details[2]}}</li>
                    <li>{{plan.details[3]}}</li>
                    <li>{{plan.details[4]}}</li>
                    <li>{{plan.details[5]}}</li>
                    <li>{{plan.details[6]}}</li>
                </ul>
            </ul>
        </li>
    </ul>
    `
})
export class PlansComponent {
    plans;

    constructor(service: PlansService) {
        this.plans = service.getPlans();
    }
}