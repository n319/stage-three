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
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
    ViewTypeAttribute.tableName = 'ViewTypeAttribute';
    return ViewTypeAttribute;
}());
exports.ViewTypeAttribute = ViewTypeAttribute;
//# sourceMappingURL=view-type-attribute.model.js.map