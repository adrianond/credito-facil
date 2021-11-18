import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosProposta } from './dados-proposta';
import { PropostaService } from './service/proposta-service';

@Component({
  selector: 'app-dados-proposta',
  templateUrl: './dados-proposta.component.html',
  styleUrls: ['./dados-proposta.component.scss']
})
export class DadosPropostaComponent implements OnInit {

  constructor(
    private propostaService: PropostaService,
    private router: Router
  ) {
   }

  component: any;
  dadosProposta!: DadosProposta;

  next() {
    if(this.component && this.component.next) {
      this.component.next();
    }
  }

  back() {
    if(this.component && this.component.back) {
      this.component.back();
    }
  }

  get isValid() {
    return this.component?.isValid;
  }

  get hideButtonBack() {
    return this.component?.hideButtonBack;
  }

  get labelButtonBack() {
    return this.component?.labelButtonBack;
  }

  get labelButtonNext() {
    return this.component?.labelButtonNext;
  }

  ngOnInit(): void {
    this.getDadosProposta();
    this.router.navigateByUrl('/dados-pessoais');
  }

  onActivate(component: any) {
    this.component = component;
    if(this.dadosProposta) {
      component.value = this.dadosProposta;
    }
  }

  onDeactivate(component: any) {
    this.dadosProposta = component?.value;
  }

  getDadosProposta() {
    this.getMock();
    

    /*
    this.propostaService.getProposta(12)
      .subscribe((response: PropostaResponse) => {
        if (response.proposta) {
          this.setProposta(response.proposta)
       }
      }, (error) => {
        this.toastr.error('Erro ao consluar proposta de crédito')
      });
      */

  }

  getMock() {
    let propostaSalva = {
      id: 1,
      dadosPessoais: {
        nome: 'adriano',
        cpf: '28996612804',
        rg: '278225147',
        email: 'adrianond@yahoo.com.br',
        dataNascimento: new Date(),
        estadoCivil: 'solteiro'
      },
      endereco: {
        logradouro: 'Avenida dos Ipes',
        cep: '08161000',
        bairro!: 'São Miguel Paulista',
        cidade: 'São Paulo',
        uf: 'SP',
        numero: 17,
        complemento!: ''
      }
    }

    this.dadosProposta = propostaSalva;
    console.log('this.dadosProposta ' + this.dadosProposta.dadosPessoais.estadoCivil)
    if(this.component && this.dadosProposta) {
      this.component.value = propostaSalva;
      console.log('this.component.value ' + this.component.value.dadosPessoais.estadoCivil)
    }
  }

}
