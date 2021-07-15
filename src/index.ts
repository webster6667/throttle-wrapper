import {Throttle, Fn} from './types'

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
const throttle:Throttle = (fn, ms) => {
    let isThrottled:boolean = false,
        savedArgs:any,
        savedThis:any

    function wrapper(...args: any) {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        fn.apply(this, args);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }

        }, ms);

    }

    return wrapper;

}

export default throttle
