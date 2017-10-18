import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var M4IconComponent = /** @class */ (function () {
    function M4IconComponent() {
        this.icon = '';
    }
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
    return M4IconComponent;
}());

var TbIconsModule = /** @class */ (function () {
    function TbIconsModule() {
    }
    TbIconsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [M4IconComponent],
                    exports: [M4IconComponent]
                },] },
    ];
    /**
     * @nocollapse
     */
    TbIconsModule.ctorParameters = function () { return []; };
    return TbIconsModule;
}());

export { TbIconsModule, M4IconComponent };
