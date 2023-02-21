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

			targetObj: [
				{
					semanticObject: "SalesOrder",
					semanticAction: "create"
				}
			],
			
			onPressCreateVA01: function (oBindingContext) {
				return that.util.onExternalNavigation(that.targetObj[0]);
			}
		};
		return that;
	});