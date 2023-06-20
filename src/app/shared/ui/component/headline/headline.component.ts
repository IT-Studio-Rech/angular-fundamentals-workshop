import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule],
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent {

}
