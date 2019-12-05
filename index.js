// Challenge 1 - Add a new property to Number that is the Golden Ratio

Number.prototype.constructor.goldenRatio = 1.61803398875

// Challenge 2 - Number Methods: round, floor, ceil

Number.prototype.round = function() {
    return Math.round(this)
}

Number.prototype.floor = function() {
    return Math.floor(this)
}

Number.prototype.ceil = function() {
    return Math.ceil(this)
}

// Challenge 3 - pads Number with x Os before and y Os after

Number.prototype.pad = function(x,y) {
    let n = this.toString().split('.')
    result = ""
    for(let i = 0; i < x - n[0].length; i++) {
        result += "0"
    }
    result += n[0] + "." + n[1]
    for(let i = 0; i < y - n[1].length; i++) {
        result += "0"
    }
    return result
}

// Challenge 4 - Converts radians to degrees

Number.prototype.degToRad = function() {
    return this * (Math.PI / 180)
}

// Challenge 5 - Converts degrees to radians 

Number.prototype.radToDeg = function() {
    return this * (180 / Math.PI)
}

// Challenge 6 - Formatting Money 

Number.prototype.toDollars = function() {
    return "$" + this.toFixed(2)
}

// Challenge 7 - Returns the tax amount

Number.prototype.tax = function() {
    return (this * 0.08) + this
}





