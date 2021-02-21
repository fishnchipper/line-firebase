

module.exports = function utils() {
    
    function methods() {}

    methods.genRanHex = function(size) {
        return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
    };

    return methods;
}