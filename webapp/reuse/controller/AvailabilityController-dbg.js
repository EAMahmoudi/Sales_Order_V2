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

			onAvailabilityStatusLinkPressed: function (oEvent) {
				that.oExtensionAPI = this;
				that.sContextPath = "/SalesOrderManage/_Item";
				that.oResourceBundle = this.getModel("i18n").getResourceBundle();
				return that.util.onOpenAvailabilityPopOver(that, oEvent);
			},

			getTextForAvailabilityStatusColumn: function (RequestedDeliveryDate, ConfirmedDeliveryDate, RequestedQuantity, ConfirmedQuantity,
				sAvailable, sPartiallyAvailable, sDelayed, sNotAvailable) {

				if (!RequestedDeliveryDate || !RequestedQuantity) {
					return;
				}
				
				var oAvailabilityStatus = that.getAvailabilityStatus(RequestedDeliveryDate, ConfirmedDeliveryDate, RequestedQuantity,
					ConfirmedQuantity);
					
				switch (oAvailabilityStatus.AvailabilityStatusKey) {
				case "A":
					var sAvailabilityStatusText = sAvailable;
					break;
				case "B":
					sAvailabilityStatusText = sPartiallyAvailable;
					break;
				case "C":
					sAvailabilityStatusText = sDelayed;
					break;
				case "D":
					sAvailabilityStatusText = sNotAvailable;
				default:
				}
				return sAvailabilityStatusText;
			},
			
			getCriticalityForAvailabilityStatusColumn: function (RequestedDeliveryDate, ConfirmedDeliveryDate, RequestedQuantity,
				ConfirmedQuantity) {
				if (!RequestedDeliveryDate || !RequestedQuantity) {
					return;
				}
				
				var oAvailabilityStatus = that.getAvailabilityStatus(RequestedDeliveryDate, ConfirmedDeliveryDate, RequestedQuantity,
					ConfirmedQuantity);
				return oAvailabilityStatus.AvailabilityStatusCriticality;
			},
			
			getAvailabilityStatus: function (RequestedDeliveryDate, ConfirmedDeliveryDate, RequestedQuantity, ConfirmedQuantity) {
				var oAvailabilityStatus = {
					AvailabilityStatusKey: "",
					AvailabilityStatusCriticality: ""
				};
				if (!ConfirmedDeliveryDate) {
					// D = Not Available (Red = Error)
					oAvailabilityStatus.AvailabilityStatusKey = "D";
					oAvailabilityStatus.AvailabilityStatusCriticality = "Error";
				} else if (ConfirmedDeliveryDate === RequestedDeliveryDate && RequestedQuantity === ConfirmedQuantity) {
					// A = Available (Green = Success)
					oAvailabilityStatus.AvailabilityStatusKey = "A";
					oAvailabilityStatus.AvailabilityStatusCriticality = "Success";
				} else if (ConfirmedDeliveryDate !== RequestedDeliveryDate && RequestedQuantity === ConfirmedQuantity) {
					// C = Delayed (Yellow = Warning)
					oAvailabilityStatus.AvailabilityStatusKey = "C";
					oAvailabilityStatus.AvailabilityStatusCriticality = "Warning";
				} else {
					// B = Partially Available (Yellow = Warning)
					oAvailabilityStatus.AvailabilityStatusKey = "B";
					oAvailabilityStatus.AvailabilityStatusCriticality = "Warning";
				}
				return oAvailabilityStatus;
			}
		};
		return that;
	});