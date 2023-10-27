import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Root } from "src/app/pokemon-details/pokemonDetails.model";
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  routeObs!: Observable<ParamMap>
  pokeListObs!: Observable<Object>
  poke!: Root
  constructor(private route: ActivatedRoute, private http : HttpClient){

  }

  ngOnInit(): void {
    
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);

  }

  getRouterParam = (parmas : ParamMap) =>{
    let pokemonId = parmas.get('id')

    if (pokemonId != null){
      this.pokeListObs = this.http.get<Root>("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
      this.pokeListObs.subscribe((data:any) => this.poke = data)
    }
  }
}
