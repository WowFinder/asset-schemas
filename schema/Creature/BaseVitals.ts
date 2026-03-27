type RawBaseVitals = {
    // Defaults defined in model:src/Profile/VitalsProfile.ts
    minimumSleepTime?: string;
    optimalSleepTime?: string;
    sleepCycle?: string;
    breathHoldingTime?: string;
    breathRecoveryTime?: string;
    // TODO: Breath mediums
    maxHp?: number;
    maxSanity?: number;
};

export { type RawBaseVitals };
