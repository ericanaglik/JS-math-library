# Kevin Math
![npm](https://img.shields.io/npm/v/@ericanaglik/kevin-math?style=for-the-badge) 
![GitHub repo size](https://img.shields.io/github/repo-size/ericanaglik/js-math-lib?style=for-the-badge)
[![Build Status](https://travis-ci.com/ericanaglik/JS-math-library.svg?branch=master)](https://travis-ci.com/ericanaglik/JS-math-library)

### Getting Started
Run the following command in your project folder: <br/>
```
npm install @ericanaglik/kevin-math --save
``` 
Then add this to your index.js file <br/>
```
require('@ericanaglik/src/kevin-math')
```

## Golden Ratio 
**goldenRatio()** </br>
This function returns the golden ratio</br>
`Number.goldenRatio()` &#8594; 1.61803398875

## Rounding Methods
**round()** </br>
This method rounds a number either up or down depending on which it is closest to</br> 
`'9.99.round()` &#8594; 10

**roundDown()** </br>
This method rounds down</br> 
`'9.99.roundDown()` &#8594; 9

**roundUp()** </br>
This method rounds up</br> 
`'9.2.roundUp()` &#8594; 10

## Degrees ↔ Radians 
**degToRad(n)** </br> 
This methods converts degrees to radians </br>
`45.degToRad()`&#8594; 0.785

**radToDeg(n)** </br> 
This methods converts radians to degrees </br>
`.785.RadTodeg()`&#8594; 44.977

## Money Methods
**toDollars(amount)** </br> 
This method converts a number with a decimal point to a string with a dollar sign in front of it and an extra number placeholder at the end if needed </br>
`3.9.toDollars()`&#8594; '$3.90' 

**plusTax(rate)** </br> 
This method tells you the tax on a number when you pass in the rate</br>
`100.plusTax(0.08)`&#8594; '108' 

**plusInterest(total, year, rate)** </br> 
This methods calculates interest based on the total, year, and rate </br>
`Number.plusInterest(100,2,2)`&#8594; 104.04 

**mortgage(startingLoanAmount, totalPayments, interestRate)** </br> 
This methods calculates mortgage based on the starting loan, the total number of payments, and the interest rate </br>
`Number.mortgage(10,5,10)`&#8594; 100.00