import { NgModule } from '@angular/core';

import { ShareItRoutingModule } from './share-it-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { ShareItComponent } from './share-it.component';


@NgModule({
  declarations: [ShareItComponent],
  imports: [
    ShareModule,
    ShareItRoutingModule
  ]
})
export class ShareItModule { }
