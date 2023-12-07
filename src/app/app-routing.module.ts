import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CardComponent } from './Components/home/card/card.component';

const routes: Routes = [
  // default route
  // {
  //   component: HomeComponent,
  //   path: '',
  // },
  {
    component: HomeComponent,
    path : 'home',
    children: [
      {
        component : CardComponent,
        path : 'card'
      }
    ]
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  
  // wildcard route
  // {
  //   component: NotFoundComponent,
  //   path : '**'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
