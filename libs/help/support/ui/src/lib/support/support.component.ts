import {Component} from '@angular/core';

@Component({
  selector: 'monorepo-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
})
export class SupportComponent {

  submitted = false;

  submit = () => {
    this.submitted = true;
  }

}
