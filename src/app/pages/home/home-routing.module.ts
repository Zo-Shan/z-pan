import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AllFileComponent } from './all-file/all-file.component';
import { MyShareComponent } from './my-share/my-share.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: '网盘' },
    children: [
      {
        path: '',
        redirectTo: 'allfile',
        pathMatch: 'full'
      },
      {
        path: 'allfile',
        component: AllFileComponent,
        data: { title: '全部文件' }
      },
      {
        path: 'myShare',
        component: MyShareComponent,
        data: { title: '我的分享' }
      },
      {
        path: '**',
        redirectTo: 'allfile'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
