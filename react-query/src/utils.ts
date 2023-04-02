export const mapColorToHex = (color?: string) => { // 포켓몬의 컬러를 받아 hexCode 로 변
  switch (color) {
    case 'white':
    case 'gray':
      return '#6B7280';
    case 'brown': return '#92400E';
    case 'yellow': return '#F59E0B';
    case 'green': return '#10B981';
    case 'red': return '#EF4444';
    case 'blue': return '#3B82F6';
    case 'purple': return '#8B5CF6';
    case 'pink': return '#EC4899';
    case 'black': return '#1F2937';
    default: return '#6B7280';
  }
}

export const mapTypeToHex = (type?: string) => { // 포켓몬의 타입를 받아 hexCode 로 변
  switch (type) {
    case 'bug': return '#92BC2C';
    case 'dark': return '#595761';
    case 'dragon': return '#0C69C8';
    case 'electric': return '#F2D94E';
    case 'fire': return '#FBA54C';
    case 'fairy': return '#EE90E6';
    case 'fighting': return '#D3425F';
    case 'flying': return '#A1BBEC';
    case 'ghost': return '#5F6DBC';
    case 'grass': return 'rgba(5, 150, 105, 1)';
    case 'ground': return '#DA7C4D';
    case 'ice': return '#75D0C1';
    case 'normal': return '#A0A29F';
    case 'poison': return '#B763CF';
    case 'psychic': return '#FA8581';
    case 'rock': return '#C9BB8A';
    case 'steel': return '#5695A3';
    case 'water': return '#539DDF';
    default: return '#6B7280';
  }
}

export const formatNumbering = (pokemonIndex: number | string): string => // 포켓몬의 인덱스를 받아서 #001 형태로 변
  `#${(typeof pokemonIndex === 'number' ? String(pokemonIndex) : pokemonIndex).padStart(3, '0')}`