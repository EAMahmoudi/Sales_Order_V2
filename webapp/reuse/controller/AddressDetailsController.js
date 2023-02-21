/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"],function(U){"use strict";var t={util:new U(),oExtensionAPI:null,onPartnerAddressDetailsPressed:function(e){var l=e.getSource();var L=l.getId();t.oExtensionAPI=this;t.oResourceBundle=this.getModel("i18n").getResourceBundle();if(L.includes("SalesOrderItem")){var p="/SalesOrderManage/_Item/_ItemPartner";}else{p="/SalesOrderManage/_Partner";}return t.util.onOpenAddressDetailsPopOver(t,e,p);}};return t;});
