import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-card',
  templateUrl: './reverse-card.component.html',
  styleUrls: ['./reverse-card.component.scss']
})
export class ReverseCardComponent implements OnInit {
  @Input() name: string = "";
  @Input() imageUrl: string = "";
  @Input() translation: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
