import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pagin-pokemon',
  templateUrl: './pagin-pokemon.component.html',
  styleUrls: ['./pagin-pokemon.component.css']
})
export class PaginPokemonComponent {
  routeObs!: Observable<ParamMap>

  constructor( private route: ActivatedRoute, ){
    
  }
  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>{
    let pokemonId = params.get('path')
    console.log(pokemonId);

  }
}
