import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  contactInfo:any
  myForm!: FormGroup;
  constructor(private profileService:AppService,private fb: FormBuilder) { }

    submit(){
      alert("Thankyou for Contacting Us")
    }

   

    ngOnInit() {
      this.contactInfo =  this.profileService.contact();
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(15)]],
      });
    }
  
    onSubmit(form: FormGroup) {
     
    }
}
