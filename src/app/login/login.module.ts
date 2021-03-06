import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [ContainerComponent]
})
export class LoginModule { }
