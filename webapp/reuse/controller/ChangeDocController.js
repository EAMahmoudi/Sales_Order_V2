/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"],function(U){"use strict";var t={oSalesOrder:{salesDocument:"SalesOrder"},util:new U(),oExtensionAPI:null,onPressShowChangeDoc:function(e){t.oExtensionAPI=this;t.oResourceBundle=this.getModel("i18n").getResourceBundle();var m=this._controller.getOwnerComponent();function o(){t.util.onOpenChangeDocDialog(t,e,t.oSalesOrder);}return m.runAsOwner(o);},onChangeDocButtonClose:function(e){return t.util.onPressDialogButtonClose(t,e);}};return t;});
