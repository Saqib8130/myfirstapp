import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TabComponent } from './tab/tab.component';


const routes: Routes = [
  {path:'book', component:BookComponent},
  {path:'tab', component:TabComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
