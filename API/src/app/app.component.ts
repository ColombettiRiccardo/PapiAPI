import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Root } from './pokemonList.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';
  obs !: Observable<Root>
  pokemonList !: Pokemon[]
  constructor(private http:HttpClient){

    this.obs = this.http.get<Root>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.arcar)
  }

  arcar = (data:any) =>{
    this.pokemonList = data.results
  }

  
  getLastPart (url:string){
    const parts = url.split('/')
  //  console.log(parts)
    return parts.at(-2)
  }
}
