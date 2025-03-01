var football = {
    name: "football",
    color: "black",
    size: "medium"
};
for (var key in football) {
    if (football.hasOwnProperty(key)) {
        console.log("".concat(key, ": ").concat(football[key]));
    }
}
