import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DadosProposta } from '../dados-proposta/dados-proposta';
import { PropostaService } from '../dados-proposta/service/proposta-service';
import { PropostaResponse } from '../shared/model/response/proposta-response';

@Component({
  selector: 'endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  dadosProposta!: DadosProposta;
  dadosEnderecoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private propostaService: PropostaService
  ) { 
    this.initForm();
  }

  ngOnInit(): void {
    this.atualizarProposta()
  }

  set value(dadosProposta : DadosProposta) {
    this.dadosProposta = dadosProposta;
    this.dadosEnderecoForm.patchValue(dadosProposta.endereco);
  }

  get value() {
    return Object.assign((this.dadosProposta || {}), this.dadosEnderecoForm.value);
  }

  private initForm(): void {
    this.dadosEnderecoForm = this.formBuilder.group({
      logradouro: ['', Validators.required],
      cep: ['', Validators.required],
      bairro: ['', Validators.required],
      uf: ['', Validators.required],
      numero: [null, Validators.required],
      complemento: ['', Validators.required],
    });
  }

  enviar() {
    this.atualizarProposta();
 }

  atualizarProposta() {
    alert('atualizar')
    console.log('dados pessoais ' + this.value.dadosPessoais.nome)
    console.log('endereço ' + this.value.endereco.bairro)
    //this.propostaService.salvarProposta(this.value).subscribe((response: PropostaResponse) => {
    //}, () => {
      //this.toastr.error('Erro ao salvar proposta de crédito')
    //})
  }

}
