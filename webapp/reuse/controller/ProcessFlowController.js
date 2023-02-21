/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"],function(U){"use strict";var t={businessObject:{documentTyp:"SalesOrder",processFlowDocument:"salesOrder",processFlowComponent:"sap.cus.sd.lib.processflow.component.sales"},util:new U(),oExtensionAPI:null,onPressOverallStatus:function(e){t.oExtensionAPI=this;var m=this._controller.getOwnerComponent();function o(){t.util.onOpenProcessFlowDialog(t,e,t.businessObject);}return m.runAsOwner(o);},onProcessFlowButtonOk:function(e){return t.util.onPressProcessFlowButtonOk(t,e);}};return t;});
