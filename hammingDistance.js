/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var length;
    if(x > y) {
        length = x.toString(2).split("").length;
    }
    else {
        length = y.toString(2).split("").length;
    }

    x = x.toString(2).split("");
    y = y.toString(2).split("");

    var counter = 0;
    for(let i = 0; i < length; i++) {
        let poppedX = x.pop();
        let poppedY = y.pop();

        if(poppedX === undefined) {
            poppedX = 0;
        }
        if(poppedY === undefined) {
            poppedY = 0;
        }

        if(poppedX != poppedY) {
            counter++;
        }
    }
    return counter;

};
