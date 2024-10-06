import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'

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
  
    async onSubmit() {
      emailjs.init('ZcBdExMHYZWXCPkyu');
      let response = await emailjs.send("service_ku6ehwd","template_kkn0umg",{
      from_name: this.myForm.value.name,
      from_email: this.myForm.value.email,
      message: this.myForm.value.message,
      });
      alert('Message has been send');
      this.myForm.reset();
    }

    // emailjs.send("service_ku6ehwd","template_kkn0umg",{
    //   from_name: "Kamini Kuhad",
    //   from_email: "kamini.kuhad09@gmail.com",
    //   message: "I am here for the test",
    //   });
}
