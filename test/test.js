require('../src/index')

// test('goldenRatio', () => {
//     const test = 3
//     expect(test.goldenRatio.con()).toBe(1.61803398875);
// })

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
    expect(test.degToRad()).toBe(0.7853981633974483);
})

test('radToDeg', () => {
    const test = 0.785
    expect(test.radToDeg()).toBe(44.97718691776962);
})

test('toDollars', () => {
    const test = 3.9
    expect(test.toDollars()).toBe('$3.90');
})

test('tax', () => {
    const test = 100
    expect(test.tax(0.08)).toBe(108);
})

test('interest', () => {
    expect(Number.interest(100, 1, 1)).toBe(101)
})

test('mortgage', () => {
    expect(Number.mortgage(100000, 30, 3.92)).toBe(32673.448395994623)
});

test('intToHex', () => {
    const x = 20
    expect(x.intToHex()).toBe('14')
});





