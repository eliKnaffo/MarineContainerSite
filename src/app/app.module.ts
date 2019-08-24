import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './MainLayout/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainersPageComponent } from './Containers/containers-page/containers-page.component';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MarinServiceService } from './services/marin-service.service';
import { MatPaginatorModule, MatSortModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ContainersPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [MarinServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
