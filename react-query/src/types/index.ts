export type Sprites = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    }
    'official-artwork': {
      front_default: string;
    }
  }
}

export type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

export type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export type Language = {
  name: string;
  url: string;
}

export type Name = {
  language: Language;
  name: string;
}

export type Color = {
  name: string;
  url: string;
}

export type Version = {
  name: string;
  url: string;
}

export type FlavorTextEntry = {
  flavor_text: string;
  language: Language;
  version: Version;
}

export type GrowthRate = {
  name: string;
  url: string;
}

export type EffectEntry = {
  effect: string;
  language: Language;
  short_effect: string;
}

export type SimplePokemonInfo = {
  name: string;
  url: string;
}

export type DamageRelation = {
  double_damage_from: Array<{ name: string, url: string }>;
  double_damage_to: Array<{ name: string, url: string }>;
  half_damage_from: Array<{ name: string, url: string }>;
  half_damage_to: Array<{ name: string, url: string }>;
}

export type EvolutionDetail = {
  min_level: number;
  trigger: {
    name: string;
    url: string;
  }
}

export type Chain = {
  is_baby: boolean;
  evolution_details: Array<EvolutionDetail>;
  evolves_to: Array<EvolutionTo>;
  species: {
    name: string;
    url: string;
  }
}

export type EvolutionTo = {
  evolution_details: Array<EvolutionDetail>;
  is_baby: boolean;
  evolves_to: Array<EvolutionTo>;
  species: {
    name: string;
    url: string;
  }
}
export type ListResponse = {
  count: number;
  results: Array<SimplePokemonInfo>;
}

export type PokemonResponse = {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  base_experience: number;
  height: number;
  weight: number;
  stats: Array<Stat>;
  abilities: Array<Ability>;
  types: Array<Type>;
}

export type SpeciesResponse = {
  id: number;
  name: string;
  order: number;
  names: Array<Name>;
  color: Color;
  flavor_text_entries: Array<FlavorTextEntry>;
  growth_rate: GrowthRate;
  gender_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;
  evolution_chain: {
    url: string;
  }
}

export type AbilityResponse = {
  id: number;
  name: string;
  names: Array<Name>;
  is_main_series: boolean;
  effect_entries: Array<EffectEntry>;
}

export type TypeResponse = {
  id: number;
  name: string;
  damage_relations: DamageRelation;
}

export type EvolutionChainResponse = {
  id: number;
  chain: Chain;
}
