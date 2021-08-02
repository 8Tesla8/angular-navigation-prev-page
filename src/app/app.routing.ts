import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { CComponent } from './components/c/c.component';

const routes: Routes = [
  {
    path: "a",
    component: AComponent,
  },
  {
    path: "b",
    component: BComponent,
  },
  {
    path: "c",
    component: CComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
