/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
		"sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"
	],
	function (UtilityHelper) {
		"use strict";

		var that = {

			oSalesOrder: {
				salesDocument: "SalesOrder"
			},

			util: new UtilityHelper(),

			oExtensionAPI: null,

			onPressShowChangeDoc: function (oEvent) {
				that.oExtensionAPI = this;
				that.oResourceBundle = this.getModel("i18n").getResourceBundle();
				
				var oMainComponent = this._controller.getOwnerComponent();
				
				function fnOnOpenChangeDocDialog() {
					that.util.onOpenChangeDocDialog(that, oEvent, that.oSalesOrder);
				}
			    
			    return oMainComponent.runAsOwner(fnOnOpenChangeDocDialog);
			},

			onChangeDocButtonClose: function (oEvent) {
				return that.util.onPressDialogButtonClose(that, oEvent);
			}
		};
		return that;
	});