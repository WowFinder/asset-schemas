import { FlyManeuverability } from '@wowfinder/ts-enums';

interface RawSpeeds {
    base: number;
    burrow?: number;
    climb?: number;
    swim?: number;
    fly?: number;
    maneuverability?: FlyManeuverability;
}

type SpeedKeys = keyof Omit<RawSpeeds, 'maneuverability'>;

type SpeedsModifiers = Record<SpeedKeys, number>;

export type { RawSpeeds, SpeedKeys, SpeedsModifiers };
