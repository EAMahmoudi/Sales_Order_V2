/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
    "sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"
],
    function (UtilityHelper) {
        "use strict";

        var that = {

            businessObject: {
                documentTyp: "SalesOrder",
                processFlowDocument: "salesOrder",
                processFlowComponent: "sap.cus.sd.lib.processflow.component.sales"
            },

            util: new UtilityHelper(),

            oExtensionAPI: null,

            onPressOverallStatus: function (oEvent) {
                that.oExtensionAPI = this;
                var oMainComponent = this._controller.getOwnerComponent();

                function fnOnOpenProcessFlowDialog() {
                    that.util.onOpenProcessFlowDialog(that, oEvent, that.businessObject);
                }
                
                return oMainComponent.runAsOwner(fnOnOpenProcessFlowDialog);
            },

            onProcessFlowButtonOk: function (oEvent) {
                return that.util.onPressProcessFlowButtonOk(that, oEvent);
            }
        };
        return that;
    });