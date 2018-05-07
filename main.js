
sum = function(a, b){
    return a+b;
}

if (typeof require != 'undefined' && require.main==module) {
    console.log(sum(9,10))
}

module.exports = {
    sum: sum
}
