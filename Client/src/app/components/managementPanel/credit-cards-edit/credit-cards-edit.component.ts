import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/creditCard/creditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-credit-cards-edit',
  templateUrl: './credit-cards-edit.component.html',
  styleUrls: ['./credit-cards-edit.component.css']
})
export class CreditCardsEditComponent implements OnInit {

  creditCards: CreditCard[];
  dataLoaded: boolean = false;

  constructor(
    private router: Router,
    private creditCardService: CreditCardService,
  ) { }

  ngOnInit(): void {
    this.getCreditCard();
  }

  getCreditCard() {
    this.creditCardService.getAllCreditCards().subscribe((response) => {
      this.creditCards = response.data;
    });
  }

  backToDashboard() {
    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['/admin']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }
  }

}
