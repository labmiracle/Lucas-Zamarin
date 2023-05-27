
//Ejercicio 1.1

const fizzBuzz = require('./fizzbuzz');

test('FizzBuzz returns "Fizz" if the number is divisible by 3.', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
});

test('FizzBuzz returns "Buzz" if the number is divisible by 5.', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(25)).toBe('Buzz');
});

test('FizzBuzz returns "FizzBuzz" if the number is divisible by 3 and 5.', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
});

test('FizzBuzz returns back the number if it does not meet the expectations.', () => {
    expect(fizzBuzz(7)).toBe('7');
    expect(fizzBuzz(17)).toBe('17');
});

test('FizzBuzz throws an error if argument is a string.', () => {
    expect(() => fizzBuzz('15')).toThrow('Argument cannot be a string, must be a number.');
});

//Ejercicio 1.2

const isLeapYear = require('./exercise-1-2.js');

test('isLeapYear returns true if the year is a leap year.', () => {
    expect(isLeapYear(2020)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1600)).toBe(true);
});

test('isLeapYear returns false if the year is not a leap year.', () => {
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(1800)).toBe(false);
});

test('isLeapYear throws an error if a string is passed.', () => {
    expect(() => isLeapYear('2022')).toThrow('The year must be a number.');
});

//Ejercicio 1.3

const cleanDNA = require('./exercise-1-3.js');

test('cleanDNA returns the DNA string without non-canonical bases.', () => {
    expect(cleanDNA('CTAGGGTA')).toBe('CTAGGGTA');
    expect(cleanDNA('aCTCAGTGGaCG')).toBe('CTCAGTGGCG');
    expect(cleanDNA('GACCCCGtgaTAC')).toBe('GACCCCGTAC');
});

test('cleanDNA returns an empty string if the DNA string is empty.', () => {
    expect(cleanDNA('')).toBe('');
});

test('cleanDNA throws an error if a non-string argument is passed.', () => {
    expect(() => cleanDNA(123)).toThrow('The DNA string must be a character string.');
});

//Ejercicio 1.4

const sumPositiveNumbers = require('./exercise-1-4.js');

test('sumPositiveNumbers returns the sum of positive numbers in the array.', () => {
    expect(sumPositiveNumbers([1, -2, 3, 4, '5', '6'])).toBe(13);
    expect(sumPositiveNumbers([-1, -2, -3])).toBe(0);
    expect(sumPositiveNumbers(['1', '2', '3', '4'])).toBe(10);
});

test('sumPositiveNumbers returns zero if the array is empty.', () => {
    expect(sumPositiveNumbers([])).toBe(0);
});

test('sumPositiveNumbers throws an error if a non-array argument is passed.', () => {
    expect(() => sumPositiveNumbers('123')).toThrow('The argument must be an array.');
});

//Ejercicio 1.5

const findFirstRepeatIndex = require('./exercise-1-5.js');

test('findFirstRepeatIndex returns the index of the first repeating character.', () => {
    expect(findFirstRepeatIndex('hello')).toBe(2);
    expect(findFirstRepeatIndex('ABBA')).toBe(0);
    expect(findFirstRepeatIndex('OpenAI is awesome')).toBe(6);
    expect(findFirstRepeatIndex('no repeating')).toBe(-1);
});

test('findFirstRepeatIndex ignores spaces and is case-insensitive.', () => {
    expect(findFirstRepeatIndex('aBc dEf')).toBe(-1);
    expect(findFirstRepeatIndex(' a A ')).toBe(1);
    expect(findFirstRepeatIndex('Racecar')).toBe(2);
});

test('findFirstRepeatIndex throws an error if a non-string input is provided.', () => {
    expect(() => findFirstRepeatIndex(123)).toThrow('The input must be a string.');
});

//Ejercicio 1.6

const findMaxConsecutiveOnes = require('./exercise-1-6.js');

test('findMaxConsecutiveOnes returns the maximum number of consecutive ones in the array.', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
    expect(findMaxConsecutiveOnes([1, '1', '1', 1, 1, '1', '0', 0])).toBe(3);
    expect(findMaxConsecutiveOnes([0, 0, 0, '1', 1, 1, '1', 1])).toBe(2);
    expect(findMaxConsecutiveOnes(['0', '1', 1, 1, '0', 1, '1', '1'])).toBe(3);
});

test('findMaxConsecutiveOnes returns -1 if there is a non-1 or non-0 value in the array.', () => {
    expect(findMaxConsecutiveOnes([1, 1, 2, 1, 1, 1])).toBe(-1);
    expect(findMaxConsecutiveOnes([0, '1', '1', 1, 1, 'a', '0', 0])).toBe(-1);
    expect(findMaxConsecutiveOnes(['0', '1', 1, 1, '0', true, '1', '1'])).toBe(-1);
});

test('findMaxConsecutiveOnes throws an error if a non-array input is provided.', () => {
    expect(() => findMaxConsecutiveOnes('123')).toThrow('The input must be an array.');
});

//Ejercicio 1.7

const lookup = require('./exercise-1-7.js');

describe('lookup()', () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup('norvig', 'likes');
        const expected = ['AI', 'Search', 'NASA', 'Mars'];
        expect(actual).toEqual(expected);
    });

    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup('knuth', 'lastName');
        const expected = 'Knuth'; expect(actual).toEqual(expected);
    });
    it('with unknown user should throw an error with the correct message', () => {
        expect(() => {
            lookup('nobody', 'likes');
        }).toThrow(/Could not find user/);
    });
    it('with unknown property should throw an error the correct message', () => {
        expect(() => {
            lookup('mfowler', 'noprop');
        }).toThrow(/Could not find property/);
    });
});
