import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../../models/contact';
import {ContactService} from '../../../../services/contact.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact: Contact;
  testContact: Contact;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private contactService: ContactService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }
  getErrorMessage(): any{

    if (this.email.hasError('required')) {
      return 'Veuillez renseigné ce champs';
    }
    return this.email.hasError('email') ? 'Veuillez entrer un email valide' : '';
  }

  onSubmit(){
    this.testContact = new Contact(this.contact.name, this.email.value, this.contact.devis, this.contact.message);
    console.log(this.testContact);
    this.contactService.addMessage(this.contact).subscribe((then => {
      this.toastr.success('Le message a bien été envoyé', 'Fait');
      this.router.navigate(['/home']);
    }));
  }


}
