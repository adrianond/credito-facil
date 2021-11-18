import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DadosPropostaRoutingModule } from './dados-proposta-routing.module';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { TemplateComponent } from '../template/template.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { EnderecoComponent } from '../endereco/endereco.component';



@NgModule({
  declarations: [
    DadosPessoaisComponent,
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    DadosPropostaRoutingModule,
    ReactiveFormsModule,
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
  ],
})
export class DadosPropostaModule { }
