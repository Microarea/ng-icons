(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['taskbuilder-icons'] = {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var M4IconComponent = (function () {
    function M4IconComponent() {
        this.icon = '';
    }
    return M4IconComponent;
}());
M4IconComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'm4-icon',
                styles: [""],
                template: "<i class=\"m4-icon m4-{{icon}}\"></i>"
            },] },
];
/**
 * @nocollapse
 */
M4IconComponent.ctorParameters = function () { return []; };
M4IconComponent.propDecorators = {
    'icon': [{ type: _angular_core.Input, args: ['icon',] },],
};

var TbIconsModule = (function () {
    function TbIconsModule() {
    }
    return TbIconsModule;
}());
TbIconsModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
                declarations: [M4IconComponent],
                exports: [M4IconComponent]
            },] },
];
/**
 * @nocollapse
 */
TbIconsModule.ctorParameters = function () { return []; };

exports.TbIconsModule = TbIconsModule;
exports.M4IconComponent = M4IconComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
