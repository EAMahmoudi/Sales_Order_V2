/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"
], function (UtilityHelper) {
	"use strict";

	var that = {
		util: new UtilityHelper(),

		oBusinessObject: {
			objectType: "BUS2032",
			objectTypeName: "SalesOrder"
		},

		onPressOpenAttachment: function (oEvent) {
			that.oExtensionAPI = this;
			
			var oMainComponent = this._controller.getOwnerComponent();
			
			function fnOnOpenAttachmentDialog() {
				that.util.onOpenAttachmentDialog(that, oEvent, that.oBusinessObject);
			}
			
			return oMainComponent.runAsOwner(fnOnOpenAttachmentDialog);
		},

		onAttachmentButtonClose: function (oEvent) {
			return that.util.onPressDialogButtonClose(that, oEvent);
		}
	};
	return that;
});