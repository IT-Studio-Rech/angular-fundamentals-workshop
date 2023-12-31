import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileDetailRoutingModule} from './profile-detail-routing.module';
import {ProfileDetailComponent} from './profile-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {PhoneNumberPipe} from '../../ui/pipes/phone-number.pipe';

@NgModule({
  declarations: [ProfileDetailComponent],
  imports: [
    CommonModule,
    ProfileDetailRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    PhoneNumberPipe,
    FormsModule,
  ],
})
export class ProfileDetailModule {
}
