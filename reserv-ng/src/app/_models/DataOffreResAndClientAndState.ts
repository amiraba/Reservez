import { Client } from '../_models/Client';
import {OffreRes} from "./offreRes";

export class DataOffreResAndClientAndState {
  offreRes: OffreRes;
  client: Client;
  creerNouveauCompte: boolean;
  isLoggedIn: boolean;
}
