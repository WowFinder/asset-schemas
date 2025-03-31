import { CastingMode, School, SubSchool } from '@wowfinder/ts-enums';

function mockSchools(defaultValue: number): { [key in School]: number } {
    return {
        [School.abjuration]: defaultValue,
        [School.conjuration]: defaultValue,
        [School.divination]: defaultValue,
        [School.enchantment]: defaultValue,
        [School.evocation]: defaultValue,
        [School.illusion]: defaultValue,
        [School.necromancy]: defaultValue,
        [School.transmutation]: defaultValue,
        [School.universal]: defaultValue,
    };
}

function mockSubSchools(defaultValue: number): { [key in SubSchool]: number } {
    return {
        [SubSchool.void]: defaultValue,
        [SubSchool.banish]: defaultValue,
        [SubSchool.counter]: defaultValue,
        [SubSchool.call]: defaultValue,
        [SubSchool.celestial]: defaultValue,
        [SubSchool.create]: defaultValue,
        [SubSchool.heal]: defaultValue,
        [SubSchool.summon]: defaultValue,
        [SubSchool.teleport]: defaultValue,
        [SubSchool.scry]: defaultValue,
        [SubSchool.charm]: defaultValue,
        [SubSchool.compel]: defaultValue,
        [SubSchool.figment]: defaultValue,
        [SubSchool.glamer]: defaultValue,
        [SubSchool.phantom]: defaultValue,
        [SubSchool.shadow]: defaultValue,
        [SubSchool.enhancement]: defaultValue,
        [SubSchool.polymorph]: 0,
    };
}

function mockCastingModes(defaultValue: number): {
    [key in CastingMode]: number;
} {
    return {
        [CastingMode.arcane]: defaultValue,
        [CastingMode.divine]: defaultValue,
        [CastingMode.spontaneous]: defaultValue,
    };
}

export { mockSchools, mockSubSchools, mockCastingModes };
