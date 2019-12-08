require('../src/index')

test('goldenRatio', () => {
    const test = 3
    expect(test.goldenRatio()).toBe(1.61803398875);
})

test('round', () => {
    const test = 9.99
    expect(test.round()).toBe(10);
})

test('floor', () => {
    const test = 9.99
    expect(test.floor()).toBe(9);
})

test('ceil', () => {
    const test = 1.03
    expect(test.ceil()).toBe(2);
})

test('pad', () => {
    const test = 34.801
    expect(test.pad(4,4)).toBe('0034.8010');
    expect(test.pad(2,4)).toBe('34.8010');
})

test('degToRad', () => {
    const test = 45
    expect(test.degToRad()).toBe(0.765);
})

test('radToDeg', () => {
    const test = 0.785
    expect(test.radToDeg()).toBe(44.977);
})










