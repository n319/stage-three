"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project(props) {
        var _this = this;
        this.tableDefinition = 'Project';
        Object.keys(props).forEach(function (prop) {
            var value = props[prop];
            _this[prop] = value;
        });
        // OPTIONAL: If you are using a different primary key than "id" you can transform this here
        // this.id = props.id || props.key || props.MY_PRIMARY_KEY || ''
    }
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.model.js.map