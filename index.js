import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '@taskbuilder/core';

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
    { type: Component, args: [{
                selector: 'tb-icon',
                template: "<div [ngSwitch]=\"iconType\" class=\"div-icon\"> <img *ngSwitchCase=\"'IMG'\" src=\"{{imgUrl}}{{icon}}\" /> <m4-icon *ngSwitchCase=\"'M4'\" icon=\"{{icon}}\"></m4-icon> <i *ngSwitchCase=\"'CLASS'\" class=\"{{icon}}\">asdgf</i> <h5 *ngSwitchDefault>no-icon</h5> </div>"
            },] },
];
/**
 * @nocollapse
 */
TbIconComponent.ctorParameters = function () { return [
    { type: HttpService, },
]; };
TbIconComponent.propDecorators = {
    'iconType': [{ type: Input },],
    'icon': [{ type: Input },],
};

var M4IconComponent = (function () {
    function M4IconComponent() {
        this.icon = '';
    }
    return M4IconComponent;
}());
M4IconComponent.decorators = [
    { type: Component, args: [{
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
    'icon': [{ type: Input, args: ['icon',] },],
};

var TbIconsModule = (function () {
    function TbIconsModule() {
    }
    return TbIconsModule;
}());
TbIconsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TbIconComponent, M4IconComponent],
                exports: [TbIconComponent, M4IconComponent]
            },] },
];
/**
 * @nocollapse
 */
TbIconsModule.ctorParameters = function () { return []; };

export { TbIconsModule, TbIconComponent, M4IconComponent };
