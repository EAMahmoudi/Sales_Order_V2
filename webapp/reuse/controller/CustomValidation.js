/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"],function(U){"use strict";var t={util:new U(),oExtensionAPI:null,onPressAddRow:function(b,c){var v=[];var m={messageText:"",messageTarget:""};if(!(c.Product||c.MaterialByCustomer||c.SalesOrderItemText)){t.oResourceBundle=this.getModel("i18n").getResourceBundle();m.messageText=t.oResourceBundle.getText("mandatoryItemData");v.push(m);}return v;}};return t;});
