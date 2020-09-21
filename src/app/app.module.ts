import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateFormComponent,
    ReactiveformComponent,
    FormvalidationComponent,
    ContactListComponent,
    ContactDetailComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(BackendService),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
