import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../shared/format-datepicker';
import { EstadoCivil } from '../../shared/estado-civil';
import { PropostaService } from '../service/proposta-service';
import { PropostaResponse } from '../../shared/model/response/proposta-response';
import { Router } from '@angular/router';
import { DadosProposta } from '../dados-proposta';
import { DadosPessoais } from './model/dados-pessoais';


@Component({
  selector: 'dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class DadosPessoaisComponent implements OnInit {
  nome: String = '';
  dadosPessoaisForm!: FormGroup;
  estadosCivis!: string[];
  dadosPessoais!: DadosPessoais;
  dadosProposta!: DadosProposta;
  selected!: string;
  estadoCivil!: boolean
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private propostaService: PropostaService,
    private router: Router,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    //this.getProposta();
  }


  next(): void {
    this.router.navigateByUrl('/endereco');
  }

  set value(dadosProposta : DadosProposta) {
    this.dadosProposta = dadosProposta;
    setTimeout(() => {
      this.dadosPessoaisForm.patchValue(dadosProposta.dadosPessoais);
    }, 0);
   this.selected = dadosProposta.dadosPessoais.estadoCivil;
  }

  get value() {
    return Object.assign((this.dadosProposta || {}), this.dadosPessoaisForm.value);
  }

  private initForm(): void {
    this.dadosPessoaisForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', Validators.required],
      dataNascimento: [null, Validators.required],
      estadoCivil: ['', Validators.required],
    });
  }

  public OnDateChange(event: any): void {
    this.validarDataNascimento(event);
  }

  validarDataNascimento(dataNascimento: Date) {
    const dtNascimentoMoment = moment(dataNascimento, 'YYYY-MM-DD', true).add(18, 'years');
    const anoAtualMoment = moment(new Date(), 'YYYY-MM-DD', true);
    if (anoAtualMoment.isBefore(dtNascimentoMoment)) {
      this.toastr.error('Crédito não permitido para menores de 18 anos.')
    }
  }

  populaComboEstadoCivil() {
    this.estadosCivis = Object.values(EstadoCivil);
  }

  enviar() {
    this.propostaService.salvarProposta(this.value).subscribe((response: PropostaResponse) => {
    }, () => {
      this.toastr.error('Erro ao salvar proposta de crédito')
    })
  }

  
  getProposta() {
    setTimeout(() => {
      this.getMock();
    }, 0);

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
        nome: 'adriano dantas',
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
    this.dadosPessoais = propostaSalva.dadosPessoais;
    this.estadosCivis = [this.dadosPessoais.estadoCivil];
    
    this.dadosPessoaisForm.patchValue({
      nome: this.dadosPessoais.nome,
      cpf: this.dadosPessoais.cpf,
      rg: this.dadosPessoais.rg,
      email: this.dadosPessoais.email,
      dataNascimento: this.dadosPessoais.dataNascimento
    });
    this.selected = this.dadosPessoais.estadoCivil;
    this.dadosProposta = propostaSalva;
    console.log(this.dadosProposta)
    //this.router.navigateByUrl("/endereco", {
      //state : this.proposta,
    //});
  }
  
}





