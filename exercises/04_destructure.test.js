  const noop = () => {}

function getAddress() {
  return {
    city: 'Salt Lake City',
    state: 'UT',
    zip: 84115,
    coords: {
      lat: 40.776608,
      long: -111.920485,
    },
  }
}

function getNumbers() {
  return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
  return [1, 2, [3, 4, [5, 6]]]
}

test('can be used to pull apart objects', () => {
  // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
  const address = getAddress();
  const {
    city,
    state, 
    zip
  } = address;
  // const city = address.city;
  // const state = address.state;
  // const zip = address.zip;
  expect(city).toBe('Salt Lake City')
  expect(state).toBe('UT')
  expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
  // Using destructuring, call `getAddress()` and create an 'address' variable.
  const fullAddress = getAddress();
  const {
    city,
    state,
    zip,
    coords,
    address
  } = fullAddress;
  expect(address).toBeUndefined()
})

test('can alias destructured variables', () => {
  // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
  const address = getAddress();

  const {
    city: c,
    state: s,
    zip: z
  } = address;

  expect(c).toBe('Salt Lake City')
  expect(s).toBe('UT')
  expect(z).toBe(84115)
  expect(() => noop(city)).toThrow()
  expect(() => noop(state)).toThrow()
  expect(() => noop(zip)).toThrow()
})

test('can destructure nested variables', () => {
  // Using destructuring, call `getAddress()` and create `lat` and `long` variables.
  const address = getAddress();

  const {
    coords: {
      lat,
      long
    }
  } = address;

  expect(lat).toBe(40.776608)
  expect(long).toBe(-111.920485)
  expect(() => noop(coords)).toThrow()
})

test('can be used to pull apart arrays', () => {
  // Call getNumbers and pull the first value out as `one` and the second as `two`
  const nums = getNumbers();

  const [
    one,
    two
  ] = nums;

  expect(one).toBe(1)
  expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
  // Call getNumbers and pull the first value out as `one` and the third as `three`
  const nums = getNumbers();

  const [
    one,
    ,
    three
  ] = nums;

  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(() => noop(two)).toThrow()
})

test('can reach nested arrays', () => {
  // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
  const nestedNums = getNestedNumbers();

  [1, 2, [3, 4, [5, 6]]]

  const [
    one,
    ,
    [three,
    ,
    [,
    sixth]]
  ] = nestedNums

  expect(one).toBe(1)
  expect(three).toBe(3)
  expect(sixth).toBe(6)
})

// MORE AT http://www.2ality.com/2015/01/es6-destructuring.html

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=ES6+and+Beyond&e=Destructuring&em=tim00combs@gmail.com
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing
