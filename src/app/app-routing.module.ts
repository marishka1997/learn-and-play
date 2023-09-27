import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CardComponent } from './card/card.component';
import { MainContentComponent } from './main-content/main-content.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
const routes: Routes = [
  {
    path: 'category/:categoryId',
    component: CardComponent
  },
  {
    path: 'main-content',
    component: MainContentComponent
  },
  {
    path: '',
    component: WelcomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
