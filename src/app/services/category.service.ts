import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private gameCategories: Array<Category> = [
    {
      title: 'Animals',
      id: 1,
      quantity: 17,
      imageUrl: '../../assets/categories/group-animals.png',
    },
    {
      title: 'Birds',
      id: 2,
      quantity: 13,
      imageUrl: '../../assets/categories/group-birds.png',
    },
    {
      title: 'Colors',
      id: 3,
      quantity: 11,
      imageUrl: '../../assets/categories/group-colors.png',
    },
    {
      title: 'Body',
      id: 4,
      quantity: 14,
      imageUrl: '../../assets//categories/group-body.png',
    },
    {
      title: 'Home',
      id: 5,
      quantity: 11,
      imageUrl: '../../assets/categories/group-home.png',
    },
    {
      title: 'Family',
      id: 6,
      quantity: 8,
      imageUrl: '../../assets/categories/group-family.png',
    },
    {
      title: 'Weather',
      id: 7,
      quantity: 9,
      imageUrl: '../../assets/categories/group-weather.png',
    },
    {
      title: 'Seasons',
      id: 8,
      quantity: 4,
      imageUrl: '../../assets/categories/group-four-seasons.png',
    },
    {
      title: 'Fruits',
      id: 9,
      quantity: 19,
      imageUrl: '../../assets/categories/group-fruits.png',
    },
    {
      title: 'Vegetables',
      id: 10,
      quantity: 15,
      imageUrl: '../../assets/categories/group-vegetables.png',
    },
    {
      title: 'Forms',
      id: 11,
      quantity: 5,
      imageUrl: '../../assets/categories/group-fruits.png',
    },
    {
      title: 'Space',
      id: 12,
      quantity: 16,
      imageUrl: '../../assets/categories/group-space.png',
    },
    {
      title: 'Transport',
      id: 13,
      quantity: 12,
      imageUrl: '../../assets/categories/group-transport.png',
    },
  ];
  constructor() { }
  public getCategories() {
    return this.gameCategories;
  }
}
