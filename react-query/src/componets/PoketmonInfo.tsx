import React from 'react';
import styled from '@emotion/styled/macro';

import { Color, Type } from '../types';
import { formatNumbering, mapColorToHex, mapTypeToHex } from '../utils';

type Props = {
  id: string;
  name?: string;
  types?: Array<Type>;
  color?: Color;
}

const Base = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: 20px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
`;

const ThumbnailImageWrapper = styled.div`
  width: 160px;
  margin-inline: auto;
  margin-block: 24px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Index = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  opacity: 0.75;
`;

const TypeWrapper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeList = styled.div`
  display: flex;
  margin-top: 8px;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

const TypeInfo = styled.img`
  height: 12px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 288px;
  height: 288px;
  left: -96px;
  top: -96px;
  opacity: 0.75;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PokemonInfo: React.FC<Props> = ({ id, name, color, types }) => (
    <Base color={mapColorToHex(color?.name)}>
        <ImageWrapper>
            <Image src="/assets/pocketball.svg" />
        </ImageWrapper>
        <InfoWrapper>
            <Name>
                {name}
            </Name>
            <Index>
                {formatNumbering(id)}
            </Index>
        </InfoWrapper>
        <TypeList>
        {
            types?.map(({ type }, idx) => (
            <TypeWrapper key={idx} color={mapTypeToHex(type.name)}>
                <TypeInfo src={`/assets/${type.name}.svg`} />
            </TypeWrapper>
            ))
        }
        </TypeList>
        <ThumbnailImageWrapper>
        <ThumbnailImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="image" />
        </ThumbnailImageWrapper>
    </Base>
)

export default PokemonInfo;