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

console.log(31.32.pad(4,4))
