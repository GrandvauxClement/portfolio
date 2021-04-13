import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../../models/contact';
import {ContactService} from '../../../../services/contact.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  onSubmit(){
    console.log(this.contact);
    this.contactService.addMessage(this.contact).subscribe((then => {
      this.toastr.success('Le message a bien été envoyé', 'Fait');
      this.router.navigate(['/home']);
    }));
  }


}
