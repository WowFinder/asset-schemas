type Stats = {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
};

type PartialStats = Partial<Stats>;

export type { Stats, PartialStats };
