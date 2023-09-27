import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  userName: string = '';

  constructor(private router: Router) { }

  startApp() {
    if (this.userName.trim() !== '') {
      this.router.navigate(['/main-content'], { queryParams: { name: this.userName } });
    }
  }

  @HostListener('keydown.enter')
  onEnterPress() {
    this.startApp();
  }
}
