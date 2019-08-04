import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MzButtonModule,
  MzInputModule,
  MzNavbarModule,
  MzSidenavModule,
  MzDropdownModule
} from "ngx-materialize";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuPageComponent } from "./pages/menu-page/menu-page.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    MzSidenavModule,
    MzDropdownModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {}
