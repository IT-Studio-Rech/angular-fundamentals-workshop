import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileDetailsService } from '../../data-access/profile-details.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  houseNumber: string = '';
  country: string = '';
  phoneNumber: string = '';

  countries = ['Deutschland', 'USA', 'Frankreich', 'UK', 'Italien', 'Spanien'];

  constructor(private _profileDetailsService: ProfileDetailsService) {}

  ngOnInit() {
    this._profileDetailsService.getProfileDetails().subscribe((details) => {
      this.firstName = details.firstName;
      this.lastName = details.lastName;
      this.street = details.street;
      this.houseNumber = details.houseNumber;
      this.country = details.country;
      this.phoneNumber = details.phoneNumber;

      console.log(`profile details loaded ${JSON.stringify(details)}`);
    });
  }

  saveProfile(form: NgForm) {
    if (form.valid) {
      const profileDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        street: this.street,
        houseNumber: this.houseNumber,
        country: this.country,
        phoneNumber: this.phoneNumber,
      };

      this._profileDetailsService
        .saveProfileDetails(profileDetails)
        .subscribe((result) =>
          console.log(`profile details saved ${JSON.stringify(result)}`)
        );
    }
  }
}
