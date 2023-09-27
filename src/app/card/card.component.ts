import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/services/card.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public gameReverseCards: any[];

  constructor(private cardService: CardService, private activatedRoute: ActivatedRoute) {
    this.gameReverseCards = [];
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(routeParams => {
      console.log(routeParams)
      //const categoryId = routeParams.paramMap.get('categoryId');
      const categoryId = routeParams['categoryId'];
      console.log(categoryId);

      this.gameReverseCards = (categoryId !== null && categoryId != undefined)
        ? this.cardService.getReverseCards(+categoryId)
        : [];
    });

  }
}
