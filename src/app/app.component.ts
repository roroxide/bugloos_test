import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from './dynamic-form/abstract/form-field';
import { FormDataService } from './form-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fields$: Observable<FormField<any>[]>;

  constructor(service: FormDataService) {
    this.fields$ = service.getFields();
  }
}
