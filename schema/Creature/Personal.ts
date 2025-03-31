import { Alignment } from '@wowfinder/ts-enums';

interface RawPersonalDetails {
    fullName: string;
    /** Default: True Neutral (`Alignment.neutralNeutral`) */
    alignment?: Alignment;
    /** Recommended default: 143 lbs (~65 kg) */
    weight?: number; // In pounds
    /** Recommended default: 63 inches (5'3") (~ 1m60cm) */
    height?: number; // In inches
    /** Recommended default: 20 years */
    age?: number; // In Azeroth years
    faith?: string;
    origin?: string;
    hair?: string;
    eyes?: string;
    skin?: string;
    gender?: string;
}

export type { RawPersonalDetails };
