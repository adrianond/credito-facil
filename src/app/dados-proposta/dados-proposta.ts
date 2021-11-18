import { DadosPessoais } from "src/app/dados-proposta/dados-pessoais/model/dados-pessoais";
import { Endereco } from "../endereco/model/endereco";

export class DadosProposta {
  id!: number;
  dadosPessoais!: DadosPessoais
  endereco!: Endereco
}