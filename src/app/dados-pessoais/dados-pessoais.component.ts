import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ddMMyyyy, yyyyMMdd } from '../shared/utils/date-utils';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  nome: String = '';
  dataNascimento!: String;
  dadosPessoaisForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.dadosPessoaisForm = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      email: [null, Validators.required],
      dataNascimento: [null, Validators.required],
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

}


