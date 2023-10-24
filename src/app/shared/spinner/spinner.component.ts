import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  isLoading$ = this.spinnerService.isLoading$;

  constructor(private readonly spinnerService: SpinnerService){}

}
