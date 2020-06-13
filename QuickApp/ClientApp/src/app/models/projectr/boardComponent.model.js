"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardComponentData = /** @class */ (function () {
    function BoardComponentData(props) {
        var _this = this;
        Object.keys(props).forEach(function (prop) {
            var value = props[prop];
            _this[prop] = value;
        });
    }
    BoardComponentData.tableName = 'Board';
    return BoardComponentData;
}());
exports.BoardComponentData = BoardComponentData;
//# sourceMappingURL=boardComponent.model.js.map