import throttle from '../src'

beforeAll(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllTimers();
});

test("throttle always call first and last function", () => {

    let result: any[] = []

    const fn = (number: number) => result.push(number),
        ms = 500,
        callFnWithThrottle = throttle(fn, ms),
        expectedResult = [1,3]

    callFnWithThrottle(1)
    callFnWithThrottle(2)
    callFnWithThrottle(3)


    jest.runAllTimers();

    expect(result).toEqual(expectedResult)
});


test("throttle ignored function called more often than ms", () => {

    let result: any[] = []

    const fn = (number: number) => result.push(number),
          ms = 500,
          callFnWithThrottle = throttle(fn, ms),
          expectedResult = [1,3]

    callFnWithThrottle(1)
    setTimeout(() => callFnWithThrottle(2.1),100)
    setTimeout(() => callFnWithThrottle(2.2),150)
    setTimeout(() => callFnWithThrottle(2.3),180)
    setTimeout(() => callFnWithThrottle(3),200)

    jest.runAllTimers();
    
    expect(result).toEqual(expectedResult)
});