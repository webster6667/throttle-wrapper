import { Throttle } from './types';
/**
 * @description
 * Function ignoring call child function more often than ms
 *
 * @param {Fn} fn - function that will be called after ms
 * @param {number} ms - time out, after which fn will call
 * @returns {boolean}
 *
 * @example
 * myFunc(1,'example')
 * // => true
 */
declare const throttle: Throttle;
export default throttle;
