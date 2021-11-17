import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proposta } from "../model/proposta";
import { PropostaResponse } from "../model/response/proposta-response";

@Injectable({
  providedIn: "root"
})

export class PropostaService {
  propostaCreditoUrlApi = 'http://localhost:8081/api/proposal';

  constructor(
    private httpClient: HttpClient
  ) { }


  salvarProposta(proposta: Proposta): Observable<PropostaResponse> {
    return this.httpClient.post<PropostaResponse>(this.propostaCreditoUrlApi, proposta);
  }

  getProposta(id: number): Observable<PropostaResponse> {
    return this.httpClient.get<PropostaResponse>(this.propostaCreditoUrlApi + '/'+`${id}`);
  }

}