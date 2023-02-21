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

			onPartnerAddressDetailsPressed: function (oEvent) {
				var oLink = oEvent.getSource();
				var sLinkId = oLink.getId();

				that.oExtensionAPI = this;
				that.oResourceBundle = this.getModel("i18n").getResourceBundle();

				if (sLinkId.includes("SalesOrderItem")) {
					var sPartnerContextPath = "/SalesOrderManage/_Item/_ItemPartner";
				} else {
					sPartnerContextPath = "/SalesOrderManage/_Partner";
				}
				return that.util.onOpenAddressDetailsPopOver(that, oEvent, sPartnerContextPath);
			}
		};
		return that;
	});