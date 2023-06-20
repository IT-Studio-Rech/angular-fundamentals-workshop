import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileDetailRoutingModule} from "../profile-detail/profile-detail-routing.module";
import {ProfileShellRoutingModule} from "./profile-shell-routing.module";



@NgModule({
  imports: [
    ProfileShellRoutingModule
  ]
})
export class ProfileShellModule { }
