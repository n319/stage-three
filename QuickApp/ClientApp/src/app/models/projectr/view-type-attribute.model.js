"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewTypeAttribute = /** @class */ (function () {
    function ViewTypeAttribute(props) {
        var _this = this;
        this.tableDefinition = 'ViewTypeAttribute';
        Object.keys(props).forEach(function (prop) {
            var value = props[prop];
            _this[prop] = value;
        });
    }
    ViewTypeAttribute.tableName = 'ViewTypeAttribute';
    return ViewTypeAttribute;
}());
exports.ViewTypeAttribute = ViewTypeAttribute;
//# sourceMappingURL=view-type-attribute.model.js.map