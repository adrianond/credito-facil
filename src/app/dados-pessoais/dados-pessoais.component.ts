import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ddMMyyyy, yyyyMMdd } from '../shared/utils/date-utils';
import { ToastrService } from 'ngx-toastr';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../shared/format-datepicker';
import { EstadoCivil } from '../shared/estado-civil';
import { DadosPessoais } from './model/dados-pessoais';
import { Proposta } from '../shared/model/proposta';
import { PropostaService } from '../shared/service/proposta-service';
import { PropostaResponse } from '../shared/model/response/proposta-response';
import { Router } from '@angular/router';


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
  dataNascimento!: string;
  dadosPessoaisForm!: FormGroup;
  estadosCivis!: string[];
  dadosPessoais!: DadosPessoais;
  proposta!: Proposta;
  selected!: string;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private propostaService: PropostaService,
    private router: Router,
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getProposta();
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
    } else {
      this.dataNascimento = ddMMyyyy(dataNascimento)
    }
  }

  populaComboEstadoCivil() {
    this.estadosCivis = Object.values(EstadoCivil);
  }

  enviar() {
    this.dadosPessoaisForm.value.dataNascimento = this.dataNascimento;
    this.proposta = this.dadosPessoaisForm.value;
    this.propostaService.salvarProposta(this.proposta).subscribe((response: PropostaResponse) => {
      this.proposta = response.proposta;
    }, (error) => {
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
    this.proposta = propostaSalva;
    console.log(this.proposta)
    //this.router.navigateByUrl("/endereco", {
      //state : this.proposta,
    //});
  }

}



