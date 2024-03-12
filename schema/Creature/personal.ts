import { Alignment } from '@wowfinder/ts-enums';

interface BaseCreaturePersonal {
    fullName: string;
    alignment?: Alignment; // Default: `Alignment.neutralNeutral`
    weight?: number; // In pounds
}

interface CharacterPersonal extends BaseCreaturePersonal {
    height?: number; // In inches
    age?: number; // In Azeroth years
    faith?: string;
    origin?: string;
    hair?: string;
    eyes?: string;
    skin?: string;
    gender?: string;
}

export type { BaseCreaturePersonal, CharacterPersonal };
