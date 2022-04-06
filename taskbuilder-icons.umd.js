(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['taskbuilder-icons'] = {}, global.core, global.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var M4IconComponent = (function () {
        function M4IconComponent() {
            this.icon = '';
        }
        M4IconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'm4-icon',
                        styles: [""],
                        template: "<i class=\"m4-icon m4-{{icon}}\"></i>"
                    },] },
        ];
        /** @nocollapse */
        M4IconComponent.ctorParameters = function () { return []; };
        M4IconComponent.propDecorators = {
            "icon": [{ type: core.Input, args: ['icon',] },],
        };
        return M4IconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TbIconsModule = (function () {
        function TbIconsModule() {
        }
        TbIconsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [M4IconComponent],
                        exports: [M4IconComponent]
                    },] },
        ];
        return TbIconsModule;
    }());

    exports.TbIconsModule = TbIconsModule;
    exports.M4IconComponent = M4IconComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
