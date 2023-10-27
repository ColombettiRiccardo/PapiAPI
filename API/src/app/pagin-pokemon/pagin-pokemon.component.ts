import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Root } from './pokemonTypes.model';

@Component({
  selector: 'app-pagin-pokemon',
  templateUrl: './pagin-pokemon.component.html',
  styleUrls: ['./pagin-pokemon.component.css']
})
export class PaginPokemonComponent {
  routeObs!: Observable<ParamMap>
  pokeListObs!: Observable<Object>
  poke !: Root

  constructor( private route: ActivatedRoute, private http : HttpClient ){
    
  }
  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>{
    let pokemonId = params.get('path')

    if (pokemonId != null){
      this.pokeListObs = this.http.get<Root>("https://pokeapi.co/api/v2/type/"+ pokemonId)
      this.pokeListObs.subscribe((data:any) => this.poke = data)
    }

  }
  getLastPart (url:string){
    const parts = url.split('/')
  //  console.log(parts)
    return parts.at(-2)
  }
}
