export declare type Throttle = <T extends any[]>(fn: (...args: T) => void, ms: number) => (...args: T) => void;
