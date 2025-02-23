import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  imports: [],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss'
})
export class FormSectionComponent {
  formData = {
    nameSurname: '',
    number: '',
    email: '',
    konu: '',
    desc: ''
  };

  onSubmit() {
    console.log('Form submitted with data:', this.formData);
    // Form verilerini burada işleyebilirsiniz, örneğin API'ye gönderebilirsiniz.
  }
}
