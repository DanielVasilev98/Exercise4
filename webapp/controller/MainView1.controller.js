sap.ui.define([
	"home/kpmg/exercise4/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("home.kpmg.exercise4.controller.MainView1", {
		onInit: function () {

		},
		onPress: function (oEvent) {
			
			var universityPath = oEvent.getSource().getBindingContext("universityModel").getPath().substr(1);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.navTo("detail", {
				Name: window.encodeURIComponent(universityPath)
			});
		}
	});
});