/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
		"sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"
	],
	function (UtilityHelper) {
		"use strict";
		var that = {
			util: new UtilityHelper(),
			
			oExtensionAPI: null,
			
			onPressAddRow: function (oBindingContext, oCreationRowData) {
				var aValidationMessages = [];
				var oMessage = {
					messageText: "",
					messageTarget: ""
				};
				
				if (!(oCreationRowData.Product || oCreationRowData.MaterialByCustomer || oCreationRowData.SalesOrderItemText)) {
					that.oResourceBundle = this.getModel("i18n").getResourceBundle();
					oMessage.messageText = that.oResourceBundle.getText("mandatoryItemData");
					aValidationMessages.push(oMessage);
				}
				
				return aValidationMessages;
			}
		};
		return that;
	});