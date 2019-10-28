import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from '../Models/pokemon';
import { Injectable } from '@angular/core';
import {Item} from '../Models/Items';

@Injectable({
  providedIn: 'root',
})
export class PokemondataService implements InMemoryDbService {
  createDb() {
    const pokemons = [
      {
        id: 1,
        name: 'Bulbasaur',
        type: [
          'Grass'
        ],
        base: {
          HP: 45,
          Attack: 49,
          Defense: 49,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 45
        }
      },
      {
        id: 2,
        name: 'Ivysaur',
        type: [
          'Grass',
          'Poison'
        ],
        base: {
          HP: 60,
          Attack: 62,
          Defense: 63,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 60
        }
      },
      {
        id: 3,
        name:  'Venusaur',
        type: [
          'Grass',
          'Poison'
        ],
        base: {
          HP: 80,
          Attack: 82,
          Defense: 83,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 80
        }
      },
      {
        id: 4,
        name: 'Charmander',
        type: [
          'Fire'
        ],
        base: {
          HP: 39,
          Attack: 52,
          Defense: 43,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 65
        }
      },
      {
        id: 5,
        name: 'Charmeleon',
        type: [
          'Fire'
        ],
        base: {
          HP: 58,
          Attack: 64,
          Defense: 58,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 80
        }
      },
      {
        id: 6,
        name: 'Charizard',
        type: [
          'Fire',
          'Flying'
        ],
        base: {
          HP: 78,
          Attack: 84,
          Defense: 78,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 100
        }
      },
      {
        id: 7,
        name: 'Squirtle',
        type: [
          'Water'
        ],
        base: {
          HP: 44,
          Attack: 48,
          Defense: 65,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 43
        }
      },
      {
        id: 8,
        name: 'Wartortle',
        type: [
          'Water'
        ],
        base: {
          HP: 59,
          Attack: 63,
          Defense: 80,
          SpAttack: 65,
          SpDefense: 80,
          Speed: 58
        }
      },
      {
        id: 9,
        name: 'Blastoise',
        type: [
          'Water'
        ],
        base: {
          HP: 79,
          Attack: 83,
          Defense: 100,
          SpAttack: 85,
          SpDefense: 105,
          Speed: 78
        }
      },
      {
        id: 10,
        name: 'Caterpie',
      },
      {
        id: 10,
        name: 'Caterpie',
        type: [
          'Bug'
        ],
        base: {
          HP: 45,
          Attack: 30,
          Defense: 35,
          'Sp. Attack': 20,
          'Sp. Defense': 20,
          Speed: 45
        }
      },
      {
        id: 11,
        name: 'Metapod',
        type: [
          'Bug'
        ],
        base: {
          HP: 50,
          Attack: 20,
          Defense: 55,
          'Sp. Attack': 25,
          'Sp. Defense': 25,
          Speed: 30
        }
      },
      {
        id: 12,
        name: 'Butterfree' ,
        type: [
          'Bug',
          'Flying'
        ],
        base: {
          HP: 60,
          Attack: 45,
          Defense: 50,
          'Sp. Attack': 90,
          'Sp. Defense': 80,
          Speed: 70
        }
      },
      {
        id: 13,
        name:  'Weedle',
        type: [
          'Bug',
          'Poison'
        ],
        base: {
          HP: 40,
          Attack: 35,
          Defense: 30,
          'Sp. Attack': 20,
          'Sp. Defense': 20,
          Speed: 50
        }
      },
      {
        id: 14,
        name: 'Kakuna',
        type: [
          'Bug',
          'Poison'
        ],
        base: {
          HP: 45,
          Attack: 25,
          Defense: 50,
          'Sp. Attack': 25,
          'Sp. Defense': 25,
          Speed: 35
        }
      },
      {
        id: 15,
        name: 'Beedrill',
        type: [
          'Bug',
          'Poison'
        ],
        base: {
          HP: 65,
          Attack: 90,
          Defense: 40,
          'Sp. Attack': 45,
          'Sp. Defense': 80,
          Speed: 75
        }
      },
      {
        id: 16,
        name:  'Pidgey',
        type: [
          'Normal',
          'Flying'
        ],
        base: {
          HP: 40,
          Attack: 45,
          Defense: 40,
          'Sp. Attack': 35,
          'Sp. Defense': 35,
          Speed: 56
        }
      },
      {
        id: 17,
        name: 'Pidgeotto',
        type: [
          'Normal',
          'Flying'
        ],
        base: {
          HP: 63,
          Attack: 60,
          Defense: 55,
          'Sp. Attack': 50,
          'Sp. Defense': 50,
          Speed: 71
        }
      },
      {
        id: 18,
        name: 'Pidgeot',
        type: [
          'Normal',
          'Flying'
        ],
        base: {
          HP: 83,
          Attack: 80,
          Defense: 75,
          'Sp. Attack': 70,
          'Sp. Defense': 70,
          Speed: 101
        }
      },
      {
        id: 19,
        name:  'Rattata',
        type: [
          'Normal'
        ],
        base: {
          HP: 30,
          Attack: 56,
          Defense: 35,
          'Sp. Attack': 25,
          'Sp. Defense': 35,
          Speed: 72
        }
      }
    ];
    const items = [
      {
        name : {
          japanese : 'マスターボール',
          english : 'Master Ball',
          chinese : '大师球'
        },
        id : 1
      },
      {
        id : 2,
        name : {
          japanese : 'ハイパーボール',
          english : 'Ultra Ball',
          chinese : '高级球'
        }
      },
      {
        id : 3,
        name : {
          english : 'Great Ball',
          japanese : 'スーパーボール',
          chinese : '超级球'
        }
      },
      {
        id : 4,
        name : {
          japanese : 'モンスターボール',
          english : 'Poké Ball',
          chinese : '精灵球'
        }
      },
      {
        name : {
          english : 'Safari Ball',
          japanese : 'サファリボール',
          chinese : '狩猎球'
        },
        id : 5
      },
      {
        name : {
          japanese : 'ネットボール',
          english : 'Net Ball',
          chinese : '捕网球'
        },
        id : 6
      },
      {
        id : 7,
        name : {
          english : 'Dive Ball',
          japanese : 'ダイブボール',
          chinese : '潜水球'
        }
      },
      {
        id : 8,
        name : {
          english : 'Nest Ball',
          japanese : 'ネストボール',
          chinese : '巢穴球'
        }
      },
      {
        id : 9,
        name : {
          japanese : 'リピートボール',
          english : 'Repeat Ball',
          chinese : '重复球'
        }
      },
      {
        id : 10,
        name : {
          chinese : '计时球',
          japanese : 'タイマーボール',
          english : 'Timer Ball'
        }
      },
      {
        name : {
          chinese : '豪华球',
          english : 'Luxury Ball',
          japanese : 'ゴージャスボール'
        },
        id : 11
      },
      {
        name : {
          japanese : 'プレミアボール',
          english : 'Premier Ball',
          chinese : '纪念球'
        },
        id : 12
      },
      {
        name : {
          english : 'Dusk Ball',
          japanese : 'ダークボール',
          chinese : '黑暗球'
        },
        id : 13
      },
      {
        name : {
          chinese : '治愈球',
          english : 'Heal Ball',
          japanese : 'ヒールボール'
        },
        id : 14
      },
      {
        id : 15,
        name : {
          chinese : '先机球',
          english : 'Quick Ball',
          japanese : 'クイックボール'
        }
      },
      {
        name : {
          english : 'Cherish Ball',
          japanese : 'プレジャスボール',
          chinese : '贵重球'
        },
        id : 16
      },
      {
        id : 17,
        name : {
          japanese : 'キズぐすり',
          english : 'Potion',
          chinese : '伤药'
        }
      },
      {
        name : {
          chinese : '解毒药',
          japanese : 'どくけし',
          english : 'Antidote'
        },
        id : 18
      },
      {
        id : 19,
        name : {
          japanese : 'やけどなおし',
          english : 'Burn Heal',
          chinese : '灼伤药'
        }
      },
      {
        id : 20,
        name : {
          chinese : '解冻药',
          japanese : 'こおりなおし',
          english : 'Ice Heal'
        }
      },

    ];
    return {pokemons, items};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pokemons: Pokemon[]): number {
    return pokemons.length > 0 ? Math.max(...pokemons.map(pokemon => pokemon.id)) + 1 : 11;
  }

  genitemId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}
