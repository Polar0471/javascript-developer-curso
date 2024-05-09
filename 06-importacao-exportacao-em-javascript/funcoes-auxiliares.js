
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets,
    print
};

// vc também poderia fazer da seguinte forma:
// module.exports.gets = gets;