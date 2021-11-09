import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { PatrimonioComponent } from './patrimonio/patrimonio.component';
import { DadosBancariosComponent } from './dados-bancarios/dados-bancarios.component';
import { DadosPropostaComponent } from './dados-proposta/dados-proposta.component';

const routes: Routes = [
  {path: '', redirectTo:'dados-pessoais', pathMatch:'full'},
  {path: 'dados-pessoais', component: DadosPessoaisComponent},
  {path: 'endereco', component: EnderecoComponent},
  {path: 'telefone', component: TelefoneComponent},
  {path: 'patrimonio', component: PatrimonioComponent},
  {path: 'dados-bancarios', component: DadosBancariosComponent},
  {path: 'dados-proposta', component: DadosPropostaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
