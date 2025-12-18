"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function OrderBook(data) {
    if (data === "large") {
        return data;
    }
    if (data === "small" || data === "medium") {
        return data;
    }
    return data;
}
//# sourceMappingURL=TypeNarrowing.js.map