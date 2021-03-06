import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ContainerComponent } from './container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ContainerComponent]
})
export class ScuiLandingPageModule { }
