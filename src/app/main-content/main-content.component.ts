import { Component } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  public cards: any[];

  constructor(private categoryService: CategoryService) {
    this.cards = [];
  }

  ngOnInit() {
    this.cards = this.categoryService.getCategories();
  }
}
