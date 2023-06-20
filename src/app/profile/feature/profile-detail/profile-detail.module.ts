import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailRoutingModule } from './profile-detail-routing.module';
import { ProfileDetailComponent } from './profile-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    ProfileDetailRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ProfileDetailModule { }
