import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosPropostaComponent } from './dados-proposta.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from '../endereco/endereco.component';
import { TelefoneComponent } from '../telefone/telefone.component';
import { PatrimonioComponent } from '../patrimonio/patrimonio.component';
import { DadosBancariosComponent } from '../dados-bancarios/dados-bancarios.component';

export const routes: Routes = [

    {
        path: '',
        component: DadosPropostaComponent,
        children: [
            {
                path: 'dados-pessoais',
                component: DadosPessoaisComponent,
            },
            {
                path: 'endereco',
                component: EnderecoComponent
            },
            {
                path: 'telefone',
                component: TelefoneComponent
            },
            {
                path: 'patrimonio',
                component: PatrimonioComponent
            },
            {
                path: 'dados-bancarios',
                component: DadosBancariosComponent
            },
            {
                path: 'dados-proposta',
                component: DadosPropostaComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class DadosPropostaRoutingModule { }