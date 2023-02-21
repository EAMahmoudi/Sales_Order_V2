/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define(["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper"],function(U){"use strict";var t={util:new U(),oBusinessObject:{objectType:"BUS2032",objectTypeName:"SalesOrder"},onPressOpenAttachment:function(e){t.oExtensionAPI=this;var m=this._controller.getOwnerComponent();function o(){t.util.onOpenAttachmentDialog(t,e,t.oBusinessObject);}return m.runAsOwner(o);},onAttachmentButtonClose:function(e){return t.util.onPressDialogButtonClose(t,e);}};return t;});
