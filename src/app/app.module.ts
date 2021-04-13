import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './front/components/parts/navbar/navbar.component';
import { HomeComponent } from './front/components/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MesServicesComponent } from './front/components/parts/mes-services/mes-services.component';
import { FooterComponent } from './front/components/parts/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DialogProjetOpen, ProjetsComponent} from './front/components/parts/projets/projets.component';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './front/components/parts/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MesServicesComponent,
    FooterComponent,
    ProjetsComponent,
    DialogProjetOpen,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
