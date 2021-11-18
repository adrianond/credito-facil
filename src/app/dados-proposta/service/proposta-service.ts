import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PropostaResponse } from "../../shared/model/response/proposta-response";
import { DadosProposta } from "../dados-proposta";

@Injectable({
  providedIn: "root"
})

export class PropostaService {
  propostaCreditoUrlApi = 'http://localhost:8081/api/proposal';

  constructor(
    private httpClient: HttpClient
  ) { }


  salvarProposta(dadosProposta: DadosProposta): Observable<PropostaResponse> {
    return this.httpClient.post<PropostaResponse>(this.propostaCreditoUrlApi, dadosProposta);
  }

  getProposta(id: number): Observable<PropostaResponse> {
    return this.httpClient.get<PropostaResponse>(this.propostaCreditoUrlApi + '/'+`${id}`);
  }

}