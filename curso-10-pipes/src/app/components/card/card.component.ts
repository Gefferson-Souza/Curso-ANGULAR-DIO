import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  pokemon: PokemonData = {
    name: '',
    id: 0,
    sprites: {
      front_default: ''
    },
    types: [{
      slot: 0,
      type: {
        name: '',
        url: ''
      }
    }
    ]
  }

  errorMessage: boolean = false;
  message: string = 'Não encontrado';

  constructor(
    private service: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName: string): void {
    let name: string = searchName.toLowerCase();
    this.service.getPokemon(name).subscribe(
      {
        next: (res): void => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          this.errorMessage = false;
        },
        error: (err): void => {
          this.errorMessage = true;
        }
      }
    )
  }

}
