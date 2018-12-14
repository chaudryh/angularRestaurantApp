import { Component, OnInit } from '@angular/core';
import { ProviderRegistrationService } from '../services';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {

  constructor(private service: ProviderRegistrationService) {}

  submitted:boolean;

  kitchen = {}

  onSubmit() {
      this.service.postkitchen(this.kitchen)
      .subscribe(
        res => {
          console.log(res)
        }, err => console.log(err));
      this.submitted = true;
  }

  ngOnInit() {
  }
}
