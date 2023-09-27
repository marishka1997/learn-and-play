import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() title: string = "Category";
  @Input() imageUrl: string = "";
  @Input() quantity: number = 0;
  @Input() categoryId: number = 0;

  showCategoryCards() {
    window.alert('The card has been clicked!');
  }

  constructor() {
  }

  ngOnInit(): void {
  }
}
