/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.declare("cus.sd.salesorderv2.manage.reuse.util.Formatter");

cus.sd.salesorderv2.manage.reuse.util.Formatter = {

	formatAttachmentButtonText: function (sAttachmentCount) {
		var sTitle = this.getModel("i18n").getResourceBundle().getText("attachment");
		sTitle = sTitle.concat(" (", sAttachmentCount, ")");
		return sTitle;
	}
};