
import { environment } from './../environments/environment';
import { CustomerEffects } from './store/customer.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerReducer } from './store/customer.reducer';
import { CustomersTableComponent } from './components/customers-list/customers-table/customers-table.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({applicationState: CustomerReducer}),
    EffectsModule.forRoot([CustomerEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
