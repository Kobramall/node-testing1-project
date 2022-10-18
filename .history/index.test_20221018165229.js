const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
   test('[2] returns a copy, leaving the original object intact', () => {
      const originalObj = { foo: '  foo   '}
      expect(utils.trimProperties(originalObj)).toEqual({foo: 'foo'})
       expect(originalObj).toEqual({ foo: '  foo   '})
   })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let obj 
  beforeEach(() => {
    obj = { foo: '  foo  ', bar:'  bar '}
  })
  test('[3] returns an object with the properties trimmed', () => {
        expect(utils.trimPropertiesMutation(obj)).toEqual({foo: 'foo', bar:'bar'})
  })
   test('[4] the object returned is the exact same one we passed in', () => {
        const originalobj = { foo: '  foo  ', bar:'  bar '}
      utils.trimPropertiesMutation(originalobj)
      expect(originalobj).not.toEqual({ foo: '  foo  ', bar:'  bar '})
   })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const obj = [ 1, 2, 3, 4]
    expect(utils.findLargestInteger(obj)).toBe(4)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
   test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
          expect(counter.countDown()).toEqual(3)
   })
   test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
             counter.countDown()
          expect(counter.countDown()).toEqual(2)
   })
   test('[8] the count eventually reaches zero but does not go below zero', () => {
                counter.countDown() 
                counter.countDown()
                counter.countDown()
                expect(counter.countDown()).toEqual(0)
   })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
       expect(seasons.next()).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
        seasons.next()
        expect(seasons.next()).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
        seasons.next()
        seasons.next()
        expect(seasons.next()).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
       seasons.next()
       seasons.next()
       seasons.next()
       expect(seasons.next()).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
     for(let i = 0; i < 39; i++){
           seasons.next()
    }
    expect(seasons.next()).toEqual('spring')

  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
       expect(focus.drive(20)).toBe(20)
       
  })
  test('[16] driving the car uses gas', () => {
        focus.drive(30)
        expect(focus.tank).toBe(19)
  })
  test('[17] refueling allows to keep driving', () => {
          focus.drive(600)
          expect(focus.drive(100)).toBe('ran out of gas after 600 miles')

  })
  test('[18] adding fuel to a full tank has no effect', () => {
         expect(focus.refuel(100)).toBe('tank only holds 20')
         
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
   test('[19] resolves true if passed an even number', () => {
      expect(utils.isEvenNumberAsync(1)).toBe(1)
   })
  // test('[20] resolves false if passed an odd number', () => {})
})