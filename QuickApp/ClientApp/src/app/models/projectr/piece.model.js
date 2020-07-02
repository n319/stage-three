"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Piece = /** @class */ (function () {
    function Piece(props) {
        var _this = this;
        this.tableDefinition = 'Piece';
        Object.keys(props).forEach(function (prop) {
            var value = props[prop];
            _this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
    Piece.tableName = 'Piece';
    return Piece;
}());
exports.Piece = Piece;
//# sourceMappingURL=piece.model.js.map