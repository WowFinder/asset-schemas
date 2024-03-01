type Speeds = {
    base: number;
    burrow?: number;
    climb?: number;
    swim?: number;
} & (
    | {}
    | {
          fly: number;
          maneuverability: string;
      }
);

export type { Speeds };
