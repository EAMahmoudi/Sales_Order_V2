/*
 * Copyright (C) 2009-2022 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.predefine('cus/sd/salesorderv2/manage/Component',["sap/fe/core/AppComponent"],function(A){"use strict";return A.extend("cus.sd.salesorderv2.manage.Component",{metadata:{"manifest":"json"}});});sap.ui.require.preload({"cus/sd/salesorderv2/manage/manifest.json":'{"_version":"1.14.0","sap.app":{"id":"cus.sd.salesorderv2.manage","type":"application","i18n":{"bundleUrl":"i18n/i18n.properties","terminologies":{"retail":{"bundleUrl":"i18n/terminologies/retail/i18n.terminologies.retail.properties","bundleUrlRelativeTo":"manifest","supportedLocales":["pl","cs","no","sv","es","en","hu","de"]}}},"applicationVersion":{"version":"10.0.5"},"title":"{{title}}","description":"{{description}}","tags":{"keywords":[]},"ach":"SD-FIO-SLS","dataSources":{"mainService":{"uri":"/sap/opu/odata4/sap/c_salesordermanage_srv/srvd/sap/c_salesordermanage_sd/0001/","type":"OData","settings":{"annotations":["annotation"],"odataVersion":"4.0","localUri":"localService/metadata.xml"}},"annotation":{"type":"ODataAnnotation","uri":"annotations/annotation.xml","settings":{"localUri":"annotations/annotation.xml"}}},"offline":false,"resources":"resources.json","sourceTemplate":{"id":"ui5template.smarttemplate","version":"1.0.0"},"crossNavigation":{"inbounds":{},"outbounds":{"DisplayCreditExposure":{"semanticObject":"BusinessPartner","action":"displayCreditExposure","parameters":{"BusinessPartner":{"value":{"value":"SoldToParty","format":"binding"}}}},"DisplaySalesVolumeYTD":{"semanticObject":"BillingDocument","action":"ssb_Check_Opn_Sls_ForNav","parameters":{"SoldToParty":{"value":{"value":"SoldToParty","format":"binding"}}}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":false},"supportedThemes":["sap_hcb","sap_bluecrystal"]},"sap.ui5":{"flexEnabled":true,"resources":{"js":[],"css":[]},"componentUsages":{"ChangeDocReuseComponent":{"name":"sap.nw.core.changedocs.lib.reuse.changedocscomponent"},"attachmentReuseComponent":{"name":"sap.se.mi.plm.lib.attachmentservice.attachment"}},"dependencies":{"minUI5Version":"1.102.4","libs":{"sap.fe.templates":{"lazy":false},"sap.ui.fl":{"lazy":false},"sap.m":{"lazy":false},"sap.ui.core":{"lazy":false},"sap.ui.layout":{"lazy":false},"sap.cus.sd.lib.processflow":{"lazy":true},"sap.cus.sd.lib.slsdoc.manage":{"lazy":false},"sap.se.mi.plm.lib.attachmentservice":{"lazy":true},"sap.s4h.cfnd.featuretoggle":{"lazy":true}},"components":{"sap.cus.sd.lib.processflow.component.sales":{"lazy":true},"sap.nw.core.changedocs.lib.reuse":{"lazy":true},"sap.se.mi.plm.lib.attachmentservice.attachment":{"lazy":true}}},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties","settings":{"terminologies":{"retail":{"bundleUrl":"i18n/terminologies/retail/i18n.terminologies.retail.properties","bundleUrlRelativeTo":"manifest","supportedLocales":["pl","cs","no","sv","es","en","hu","de"]}}}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties","settings":{"terminologies":{"retail":{"bundleUrl":"i18n/terminologies/retail/i18n.terminologies.retail.properties","bundleUrlRelativeTo":"manifest","supportedLocales":["pl","cs","no","sv","es","en","hu","de"]}}}}},"routing":{"config":{"async":true},"routes":[{"pattern":":?query:","name":"SalesOrderManageList","target":"SalesOrderManageList"},{"pattern":"SalesOrderManage({key}):?query:","name":"SalesOrderManageObjectPage","target":"SalesOrderManageObjectPage"},{"pattern":"SalesOrderManage({key})/_Item({key2}):?query:","name":"SalesOrderItemObjectPage","target":"SalesOrderItemObjectPage"},{"pattern":"SalesOrderManage({key})/_Text({key2}):?query:","name":"SalesOrderTextObjectPage","target":"SalesOrderTextObjectPage"},{"pattern":"SalesOrderManage({key})/_Item({key2})/_ItemText({key3}):?query:","name":"SalesOrderItemTextObjectPage","target":"SalesOrderItemTextObjectPage"}],"targets":{"SalesOrderManageList":{"type":"Component","id":"SalesOrderManageList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"SalesOrderManage","variantManagement":"Page","navigation":{"SalesOrderManage":{"detail":{"route":"SalesOrderManageObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.SelectionFields":{"filterFields":{"SalesOrderDate":{"settings":{"operatorConfiguration":[{"path":"key","contains":"NEXT,LASTYEAR,LAST2WEEKS,LAST3WEEKS,LAST4WEEKS,LAST5WEEKS,YEARTODATE,QUARTER1,QUARTER2,QUARTER3,QUARTER4","exclude":true}]}},"CreationDate":{"availability":"Adaptation","settings":{"operatorConfiguration":[{"path":"key","contains":"TOMORROW,NEXT,LASTYEAR,LAST2WEEKS,LAST3WEEKS,LAST4WEEKS,LAST5WEEKS,YEARTODATE,QUARTER1,QUARTER2,QUARTER3,QUARTER4","exclude":true}]}},"LastChangeDate":{"availability":"Adaptation","settings":{"operatorConfiguration":[{"path":"key","contains":"TOMORROW,NEXT,LASTYEAR,LAST2WEEKS,LAST3WEEKS,LAST4WEEKS,LAST5WEEKS,YEARTODATE,QUARTER1,QUARTER2,QUARTER3,QUARTER4","exclude":true}]}},"RequestedDeliveryDate":{"settings":{"operatorConfiguration":[{"path":"key","contains":"NEXT,LASTYEAR,LAST2WEEKS,LAST3WEEKS,LAST4WEEKS,LAST5WEEKS,YEARTODATE,QUARTER1,QUARTER2,QUARTER3,QUARTER4","exclude":true}]}}}},"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"enableExport":true},"columns":{"DataField::OverallSDProcessStatus":{"availability":"Hidden"},"OverallStatus":{"header":"{@i18n>overallStatus}","position":{"placement":"after","anchor":"DataField::RequestedDeliveryDate"},"template":"cus.sd.salesorderv2.manage.reuse.view.overallStatusListReportColumn","availability":"Default","width":"8rem","properties":["_OverallSDProcessStatus/OverallSDProcessStatus_Text"]}},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithRefFromSlsQuotation::Collection::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"text":"{@i18n>createFromQuotation}","enabled":"true"},"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithRefFromSlsContract::Collection::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"text":"{@i18n>createFromContract}","enabled":"true"},"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithSalesOrderType::Collection::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"text":"{@i18n>createSalesOrder}","enabled":"true"},"CreateSalesOrderVA01":{"press":"cus.sd.salesorderv2.manage.reuse.controller.CustomNavigation.onPressCreateVA01","text":"{@i18n>createSalesOrderVA01}"},"BillingBlock":{"text":"{@i18n>billingBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType"]},"DeliveryBlock":{"text":"{@i18n>deliveryBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetDeliveryBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveDeliveryBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType"]},"CreateWithReferenceMenu":{"text":"{@i18n>createWithReferenceBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithRefFromSlsQuotation::Collection::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithRefFromSlsContract::Collection::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType"]},"CreateMenu":{"text":"{@i18n>create}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateWithSalesOrderType::Collection::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType","CreateSalesOrderVA01"]}}}}}}},"SalesOrderManageObjectPage":{"type":"Component","id":"SalesOrderManageObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"SalesOrderManage","enhanceI18n":"i18n/HeaderOPi18n.properties","content":{"feedback":{"standardActions":{"save":{"areaId":"002","triggerName":"soCreatePoC"}}},"header":{"actions":{"BillingBlock":{"text":"{@i18n>billingBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetBillingBlock","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveBillingBlock"]},"DeliveryBlock":{"text":"{@i18n>deliveryBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetDeliveryBlock","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveDeliveryBlock"]},"ChangeDoc":{"press":"cus.sd.salesorderv2.manage.reuse.controller.ChangeDocController.onPressShowChangeDoc","visible":"{= !!%{SalesOrder}}","enabled":true,"text":"{i18n>changeDoc}","position":{"placement":"After","anchor":"BillingBlock"}},"Attachments":{"press":"cus.sd.salesorderv2.manage.reuse.controller.AttachmentController.onPressOpenAttachment","text":"{path:\'NumberOfAttachments\', formatter: \'cus.sd.salesorderv2.manage.reuse.util.Formatter.formatAttachmentButtonText\' }","enabled":"{= !!%{SalesDocumentCreationDateTime}}","position":{"placement":"After","anchor":"ChangeDoc"}},"DataFieldForIntentBasedNavigation::OutboundDelivery::createInWebGUI":{"enabled":"{= ${ui>/editMode} === \'Display\' }"}}},"body":{"sections":{"ProcessFlowReuse":{"type":"XMLFragment","name":"cus.sd.salesorderv2.manage.reuse.view.processflow","title":"{@i18n>processFlow}","position":{"placement":"After","anchor":"StatusTab"},"visible":"{= !!%{SalesOrder}}"}}}},"navigation":{"_Item":{"detail":{"route":"SalesOrderItemObjectPage"}},"_Text":{"detail":{"route":"SalesOrderTextObjectPage"}}},"variantManagement":"Control","showRelatedApps":true,"editableHeaderContent":false,"sectionLayout":"Tabs","controlConfiguration":{"@com.sap.vocabularies.UI.v1.HeaderFacets":{"facets":{"ApprovalStatusHeader":{"stashed":true}}},"_Item/@com.sap.vocabularies.UI.v1.LineItem":{"actions":{"BillingBlock":{"text":"{@i18n>billingBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType"]},"RejectionReason":{"text":"{@i18n>rejectionReason}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetRejectionReason","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveRejectionReason"]},"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.ProposeItems::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"enabled":"{__OperationControl/ProposeItems}"}},"columns":{"AvailabilityStatus":{"header":"{@i18n>availability}","position":{"placement":"After","anchor":"DataField::ConfirmedDeliveryDate"},"template":"cus.sd.salesorderv2.manage.reuse.view.availabilityStatusColumn","availability":"Default","width":"9em"}},"tableSettings":{"type":"GridTable","personalization":{"column":true,"sort":true,"filter":true},"creationMode":{"name":"CreationRow","createAtEnd":true,"disableAddRowButtonForEmptyData":true,"customValidationFunction":"cus.sd.salesorderv2.manage.reuse.controller.CustomValidation.onPressAddRow"},"selectionMode":"Single"}},"_ScheduleLine/@com.sap.vocabularies.UI.v1.LineItem#AvailibilityView":{"columns":{"DataField::ScheduleLineOrderQuantity":{"width":"10.5em"},"DataField::ConfdOrderQtyByMatlAvailCheck":{"width":"100%"}},"tableSettings":{"personalization":false,"enableExport":false}},"_Partner/@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"AddressDetails":{"header":" ","horizontalAlign":"Center","position":{"placement":"After","anchor":"DataField::SDDocPartnerAddrIsDocSpecific"},"template":"cus.sd.salesorderv2.manage.reuse.view.partnerAddressDetailsColumn","availability":"Default","width":"9em"}},"tableSettings":{"personalization":false,"enableExport":false,"selectionMode":"Single"},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePartner::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"afterExecution":{"enableAutoScroll":true},"enabled":"{__OperationControl/CreatePartner}"}}},"_PricingElement/@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"DataFieldForAnnotation::FieldGroup::ConditionBaseValue":{"availability":"Adaptation"}},"tableSettings":{"personalization":{"column":true,"sort":false,"filter":false},"enableExport":false,"selectionMode":"None","enableFullScreen":true,"quickVariantSelection":{"paths":[{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#AllPriceElements"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#AllConditions"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#ManualConditions"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#StatisticalConditions"}]}},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"afterExecution":{"enableAutoScroll":true},"enabled":"{__OperationControl/CreatePricingElement}"}}},"_BillingPlan/_BillingPlanItem/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"personalization":{"column":true,"sort":false,"filter":false},"enableExport":true},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateBillingPlanItem::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderBillingPlanType":{"afterExecution":{"enableAutoScroll":true},"enabled":"{= ${_BillingPlan/__OperationControl/CreateBillingPlanItem} === true && ${ui>/editMode} !== \'Display\'}"},"BillingBlock":{"text":"{@i18n>billingBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderBillingPlanItemType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderBillingPlanItemType"]}}},"_Text/@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"DataField::LongText":{"width":"60%","formatOptions":{"textExpandBehaviorDisplay":"InPlace","textMaxCharactersDisplay":"300"}}},"tableSettings":{"personalization":false,"enableExport":false,"enablePaste":false,"creationMode":{"name":"Inline","createAtEnd":false},"selectionMode":"Single"}},"_OutputRequest/_OutputRequestItem/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"enableExport":false},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.DetermineOutputItems::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderManageType":{"enabled":"{__OperationControl/DetermineOutputItems}"}}},"_CreditLimitDetails/@com.sap.vocabularies.UI.v1.Chart#CreditLimitChart":{"requestGroupId":"LongRunners","navigation":{"targetOutbound":{"outbound":"DisplayCreditExposure"}}},"_SlsVolumeNetAmtYearToDate/@com.sap.vocabularies.UI.v1.DataPoint#SalesVolume":{"requestGroupId":"LongRunners","navigation":{"targetOutbound":{"outbound":"DisplaySalesVolumeYTD"}}}}}}},"SalesOrderItemObjectPage":{"type":"Component","id":"SalesOrderItemObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"content":{"header":{"actions":{"BillingBlock":{"text":"{@i18n>billingBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType"]},"RejectionReason":{"text":"{@i18n>rejectionReason}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetRejectionReason::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveRejectionReason::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType"]}}}},"entitySet":"SalesOrderItem","variantManagement":"Control","editableHeaderContent":false,"navigation":{"_ItemText":{"detail":{"route":"SalesOrderItemTextObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.HeaderFacets":{"facets":{"TaxValueHeader":{"stashed":true}}},"@com.sap.vocabularies.UI.v1.DataPoint#NetValueHeader":{"navigation":{"targetSections":{"sectionId":"cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FacetSection::SalesOrderItemPricesSection","subSectionId":"cus.sd.salesorderv2.manage::SalesOrderItemObjectPage--fe::FacetSubSection::SalesOrderItemPriceElements"}}},"_ItemPartner/@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"AddressDetailsItem":{"header":" ","horizontalAlign":"Center","position":{"placement":"After","anchor":"DataField::PartnerIsSpecificForSDDocItem"},"template":"cus.sd.salesorderv2.manage.reuse.view.partnerAddressDetailsColumn","availability":"Default","width":"9em"}},"tableSettings":{"personalization":false,"enableExport":false,"selectionMode":"Single"},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePartner::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType":{"afterExecution":{"enableAutoScroll":true},"enabled":"{__OperationControl/CreatePartner}"}}},"_ScheduleLine/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"personalization":{"column":true},"enableExport":false,"enablePaste":false,"creationMode":{"name":"Inline","createAtEnd":false}}},"_ItemPricingElement/@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"DataFieldForAnnotation::FieldGroup::ConditionBaseValue":{"availability":"Adaptation"}},"tableSettings":{"personalization":{"column":true,"sort":false,"filter":false},"enableExport":false,"selectionMode":"None","enableFullScreen":true,"quickVariantSelection":{"paths":[{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#AllPriceElements"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#ActivePriceElements"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#ActiveConditions"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#ManualConditions"},{"annotationPath":"com.sap.vocabularies.UI.v1.SelectionVariant#StatisticalConditions"}]}},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreatePricingElement::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemType":{"afterExecution":{"enableAutoScroll":true},"enabled":"{__OperationControl/CreatePricingElement}"}}},"_ItemBillingPlan/_ItemBillingPlanItem/@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"personalization":{"column":true,"sort":false,"filter":false},"enableExport":true},"actions":{"DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.CreateBillingPlanItem::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemBillingPlanType":{"afterExecution":{"enableAutoScroll":true},"enabled":"{= ${_ItemBillingPlan/__OperationControl/CreateBillingPlanItem} === true && ${ui>/editMode} !== \'Display\'}"},"BillingBlock":{"text":"{@i18n>billingBlock}","menu":["DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SetBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemBillingPlanItemType","DataFieldForAction::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.RemoveBillingBlock::com.sap.gateway.srvd.c_salesordermanage_sd.v0001.SalesOrderItemBillingPlanItemType"]}}},"_ItemText/@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"DataField::LongText":{"width":"60%","formatOptions":{"textExpandBehaviorDisplay":"InPlace","textMaxCharactersDisplay":"300"}}},"tableSettings":{"personalization":false,"enableExport":false,"enablePaste":false,"creationMode":{"name":"Inline","createAtEnd":false},"selectionMode":"Single"}}}}}},"SalesOrderTextObjectPage":{"type":"Component","id":"SalesOrderTextObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"SalesOrderText","editableHeaderContent":false,"controlConfiguration":{"@com.sap.vocabularies.UI.v1.FieldGroup#TextDataLongText":{"fields":{"DataField::LongText":{"formatOptions":{"textLinesEdit":20}}}}}}}},"SalesOrderItemTextObjectPage":{"type":"Component","id":"SalesOrderItemTextObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"entitySet":"SalesOrderItemText","editableHeaderContent":false,"controlConfiguration":{"@com.sap.vocabularies.UI.v1.FieldGroup#TextDataLongText":{"fields":{"DataField::LongText":{"formatOptions":{"textLinesEdit":20}}}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ListReport.ListReportController":{"controllerName":"cus.sd.salesorderv2.manage.reuse.controller.ListReportExtension"},"sap.fe.templates.ObjectPage.ObjectPageController":{"controllerName":"cus.sd.salesorderv2.manage.reuse.controller.ObjectPageExtension"}}}},"contentDensities":{"compact":true,"cozy":true}},"sap.platform.abap":{"uri":""},"sap.platform.hcp":{"uri":""},"sap.fiori":{"archeType":"transactional","registrationIds":["F3893"]}}'},"cus/sd/salesorderv2/manage/Component-h2-preload");sap.ui.loader.config({depCacheUI5:{"cus/sd/salesorderv2/manage/Component.js":["sap/fe/core/AppComponent.js"],"cus/sd/salesorderv2/manage/reuse/controller/AddressDetailsController.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/controller/AttachmentController.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/controller/AvailabilityController.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/controller/ChangeDocController.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/controller/CustomNavigation.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/controller/CustomValidation.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/controller/ListReportExtension.controller.js":["cus/sd/salesorderv2/manage/reuse/util/Formatter.js","sap/ui/core/mvc/ControllerExtension.js"],"cus/sd/salesorderv2/manage/reuse/controller/ObjectPageExtension.controller.js":["cus/sd/salesorderv2/manage/reuse/util/Formatter.js","sap/ui/core/mvc/ControllerExtension.js"],"cus/sd/salesorderv2/manage/reuse/controller/ProcessFlowController.js":["sap/cus/sd/lib/slsdoc/manage/util/UtilityHelper.js"],"cus/sd/salesorderv2/manage/reuse/view/availabilityStatusColumn.fragment.xml":["cus/sd/salesorderv2/manage/reuse/controller/AvailabilityController.js","sap/m/ObjectStatus.js","sap/ui/core/Fragment.js","sap/ui/layout/VerticalLayout.js"],"cus/sd/salesorderv2/manage/reuse/view/changeDoc.fragment.xml":["sap/m/Button.js","sap/m/Dialog.js","sap/ui/core/ComponentContainer.js","sap/ui/core/Fragment.js"],"cus/sd/salesorderv2/manage/reuse/view/overallStatusListReportColumn.fragment.xml":["cus/sd/salesorderv2/manage/reuse/controller/ProcessFlowController.js","sap/m/Link.js","sap/ui/core/Fragment.js","sap/ui/layout/VerticalLayout.js"],"cus/sd/salesorderv2/manage/reuse/view/partnerAddressDetailsColumn.fragment.xml":["cus/sd/salesorderv2/manage/reuse/controller/AddressDetailsController.js","sap/m/Link.js","sap/ui/core/Fragment.js","sap/ui/layout/VerticalLayout.js"],"cus/sd/salesorderv2/manage/reuse/view/processflow.fragment.xml":["sap/cus/sd/lib/processflow/component/sales/Component.js","sap/ui/core/ComponentContainer.js","sap/ui/core/Fragment.js"]}});