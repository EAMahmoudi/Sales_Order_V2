/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/core/mvc/ControllerExtension",
	"cus/sd/salesorderv2/manage/reuse/util/Formatter",
], function (
	ControllerExtension,
	Formatter
) {
	"use strict";
	return ControllerExtension.extend("cus.sd.salesorderv2.manage.reuse.controller.ListReportExtension", {
		
		override: {
			intentBasedNavigation: {
				adaptNavigationContext: function (oSelectionVariant, oTargetInfo) {
					if (oTargetInfo.semanticObject === "SalesOrder") {
						switch (oTargetInfo.action) {
						case "incompletionLog":
						case "change":
						case "display":
							oSelectionVariant._mSelectOptions = {
								SalesOrder: oSelectionVariant.getSelectOption("SalesOrder")
							};
							break;
						case "displayItemProposal":
							oSelectionVariant._mSelectOptions = {}
							break;
						case "create":
							oSelectionVariant._mSelectOptions = {
								SalesOrderType : oSelectionVariant.getSelectOption("SalesOrderType"),
								SoldToParty: oSelectionVariant.getSelectOption("SoldToParty")
							}
							break;	
						default:
							break;
						}
					}
				}
			}
		}
	});
});