import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-call-us',
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  templateUrl: './call-us.component.html',
  styleUrl: './call-us.component.scss'
})
export class CallUsComponent {
  faPhone = faPhone;


  fb = inject(FormBuilder);
  modalForm!: FormGroup;

  ngOnInit(): void {
    this.initModalForm();
    
  }

  initModalForm(){
    this.modalForm = this.fb.group({
      name: [''],
      phone: [''],
    })
  }

  openModal(){
    this.modalForm.reset();

  }
  modalSubmit(){
    console.log(this.modalForm.value);
    
  }
}
