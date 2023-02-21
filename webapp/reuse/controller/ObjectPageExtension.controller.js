/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/ui/core/mvc/ControllerExtension","cus/sd/salesorderv2/manage/reuse/util/Formatter",],function(C,F){"use strict";return C.extend("cus.sd.salesorderv2.manage.reuse.controller.ObjectPageExtension",{override:{intentBasedNavigation:{adaptNavigationContext:function(s,t){if(t.semanticObject==="SalesOrder"){switch(t.action){case"incompletionLog":case"change":case"display":s._mSelectOptions={SalesOrder:s.getSelectOption("SalesOrder")};break;case"displayItemProposal":s._mSelectOptions={};break;case"create":s._mSelectOptions={SalesOrderType:s.getSelectOption("SalesOrderType"),SoldToParty:s.getSelectOption("SoldToParty")};break;default:break;}}}}}});});
