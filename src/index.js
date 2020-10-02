
exports.min = function min(ar) {
    if (arguments.length == 0 || ar.length == 0) {
    return "0";}
return Math.min.apply(Math, ar);
}


exports.max = function max(ar) {
    if (arguments.length == 0 || ar.length == 0) {
    return "0";}
return Math.max.apply(Math, ar);
}


exports.avg = function avr(ar) {

    
        if (arguments.length == 0 || ar.length == 0) {
        return "0";}
        
        var result = ar.reduce((a, b) => a + b, 0);
        var total = result / ar.length;
    
    return total;
    }
    
