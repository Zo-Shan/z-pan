import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from 'src/app/share/share.module';
import { AllFileComponent } from './all-file/all-file.component';
import { MyShareComponent } from './my-share/my-share.component';


@NgModule({
  declarations: [HomeComponent, AllFileComponent, MyShareComponent],
  imports: [
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
