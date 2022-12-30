import { Character } from './character.model';

export type Tier = {
  id: number;
  name: string;
  characters: Character[];
  color: string;
};
