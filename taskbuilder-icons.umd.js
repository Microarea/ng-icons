(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@taskbuilder/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@taskbuilder/core'], factory) :
	(factory((global['taskbuilder-icons'] = {}),global._angular_core,global._angular_common,global._taskbuilder_core));
}(this, (function (exports,_angular_core,_angular_common,_taskbuilder_core) { 'use strict';

var TbIconComponent = (function () {
    /**
     * @param {?} httpService
     */
    function TbIconComponent(httpService) {
        this.httpService = httpService;
        this.iconType = 'IMG'; // TB, CLASS, IMG  
        this.icon = '';
        this.imgUrl = this.httpService.getDocumentBaseUrl() + 'getImage/?src=';
    }
    return TbIconComponent;
}());
TbIconComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'tb-icon',
                template: "<div [ngSwitch]=\"iconType\" class=\"div-icon\"> <img *ngSwitchCase=\"'IMG'\" src=\"{{imgUrl}}{{icon}}\" /> <m4-icon *ngSwitchCase=\"'M4'\" icon=\"{{icon}}\"></m4-icon> <i *ngSwitchCase=\"'CLASS'\" class=\"{{icon}}\">asdgf</i> <h5 *ngSwitchDefault>no-icon</h5> </div>"
            },] },
];
/**
 * @nocollapse
 */
TbIconComponent.ctorParameters = function () { return [
    { type: _taskbuilder_core.HttpService, },
]; };
TbIconComponent.propDecorators = {
    'iconType': [{ type: _angular_core.Input },],
    'icon': [{ type: _angular_core.Input },],
};

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
                declarations: [TbIconComponent, M4IconComponent],
                exports: [TbIconComponent, M4IconComponent]
            },] },
];
/**
 * @nocollapse
 */
TbIconsModule.ctorParameters = function () { return []; };

exports.TbIconsModule = TbIconsModule;
exports.TbIconComponent = TbIconComponent;
exports.M4IconComponent = M4IconComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
