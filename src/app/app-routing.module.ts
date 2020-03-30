import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShareItComponent } from './pages/share-it/share-it.component';


const routes: Routes = [
  { path: '', redirectTo: '/home/allfile', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'shareIt', loadChildren: () => import('./pages/share-it/share-it.module').then(m => m.ShareItModule) },
  { path: '**', redirectTo: '/home/allfile' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
