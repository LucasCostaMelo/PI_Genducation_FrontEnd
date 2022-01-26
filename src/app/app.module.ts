import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { MenuComponent } from "./menu/menu.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { ContatoComponent } from "./contato/contato.component";
import { EntrarComponent } from "./entrar/entrar.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { FormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarComponent,
    ContatoComponent,
    EntrarComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
