import { School, SubSchool, CastingMode } from '@wowfinder/ts-enums';

type SpellPowerKey = School | SubSchool | CastingMode | '';

type RawSpellPower = {
    [key in SpellPowerKey]?: number;
};

export type { SpellPowerKey, RawSpellPower };
