var color;
(function (color) {
    color["red"] = "r";
    color["green"] = "g";
    color["blue"] = "b";
})(color || (color = {}));
var myColor = color[0];
console.log(myColor);
