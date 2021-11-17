import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TemplateComponent } from './template/template.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TelefoneComponent } from './telefone/telefone.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { DadosBancariosComponent } from './dados-bancarios/dados-bancarios.component';
import { DadosPropostaComponent } from './dados-proposta/dados-proposta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DadosPessoaisComponent,
    EnderecoComponent,
    TemplateComponent,
    TelefoneComponent,
    PatrimonioComponent,
    DadosBancariosComponent,
    DadosPropostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(), 
    ToastrModule.forRoot(),
    MomentDateModule,
    MatSelectModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
