import { Throttle } from './types';
/**
 * @description
 * Function ignoring call child function more often than ms
 *
 * @param {Function} fn - function that will be called after ms
 * @param {number} ms - time out, after which fn will call
 * @returns {Function}
 *
 * @example
 *
 * let result = [],
 * fn = (number) => result.push(number),
 * callFnWithThrottle = throttle(fn, 500)
 *
 * callFnWithThrottle(1)
 * setTimeout(() => callFnWithThrottle(2.1),100)
 * setTimeout(() => callFnWithThrottle(2.2),150)
 * setTimeout(() => callFnWithThrottle(2.3),180)
 * setTimeout(() => callFnWithThrottle(3),200)
 *
 * setTimeout(() => console.log(result),300) // => [1, 3]
 */
declare const throttle: Throttle;
export default throttle;
