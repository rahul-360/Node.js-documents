function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}

module.exports = {
    addfun: add,
    subfun: sub,
    multfun: mult,
}

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;