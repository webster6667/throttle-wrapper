export type Fn = (...args: any) => any
export type Throttle = (fn: Fn, ms: number) => Fn