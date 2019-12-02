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
    
}
