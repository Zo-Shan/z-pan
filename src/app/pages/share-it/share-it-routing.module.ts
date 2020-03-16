import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareItComponent } from './share-it.component';


const routes: Routes = [
  { path: '', component: ShareItComponent, data: { title: '分享' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareItRoutingModule { }
