import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
