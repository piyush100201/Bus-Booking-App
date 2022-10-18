import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Header2Component } from './header2/header2.component';
import { Header3Component } from './header3/header3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsereditComponent } from './useredit/useredit.component';
import { AdminViewUsersComponent } from './admin-view-users/admin-view-users.component';
import { FilterUsersPipe } from './filter-users.pipe';
import { ViewProfileComponent } from './view-profile/view-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Header2Component,
    Header3Component,
    FooterComponent,
    HomeComponent,
    UserregistrationComponent,
    UserprofileComponent,
    UserhomeComponent,
    UsereditComponent,
    AdminViewUsersComponent,
    FilterUsersPipe,
    ViewProfileComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
