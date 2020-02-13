sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
  ], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		handleClick: function(e) {

			var option = e.getParameter('selectedIndex');
			this.getView().getModel().setProperty("/survey/type", option);
			
	  
		  },
		  handleClick1: function(e) {
	  
			var option = e.getParameter('selectedIndex');
			this.getView().getModel().setProperty("/survey/q1", option);
			
	  
		  },
		  handleClick2: function(e) {
	  
			var option = e.getParameter('selectedIndex');
			this.getView().getModel().setProperty("/survey/q2", option);
			
	  
		  },
		  handleClick3: function(e) {
	  
			var option = e.getParameter('selectedIndex');
			this.getView().getModel().setProperty("/survey/q3", option);
			
	  
		  },
		  handleClick4: function(e) {
	  
			var option = e.getParameter('selectedIndex');
			this.getView().getModel().setProperty("/survey/q4", option);
			
	  
		  },
		  handleClick5: function(e) {
	  
			var option = e.getParameter('selectedIndex');
			this.getView().getModel().setProperty("/survey/q5", option);
			
	  
		  },
		  onSubmit: function() {
			var oModel = this.getView().getModel("authors");
	  
			const url = 'http://localhost:8081/http://localhost:1337/api/v1/feedback/create';

			const model = this.getView().getModel();
			const oData = model.oData;
			// var oData = {
			// 	survey: {type: 0, q1: 0, q2: 0, q3: 0, q4: 0, q5: 0}
			//   };

			let result = {id: 11};

			const q1 = {question: 21, answer: oData.survey.q1};
			const q2 = {question: 22, answer: oData.survey.q2};
			const q3 = {question: 23, answer: oData.survey.q3};
			const q4 = {question: 24, answer: oData.survey.q4};
			const q5 = {question: 25, answer: oData.survey.q5};

			result.answers = [q1, q2, q3, q4, q5];

			var jsonData = JSON.stringify(result);
	  
			$.ajax({
			  url: url,
			  type: "POST",
			  contentType: "application/json",
			  dataType: "json",
			  data: jsonData,

			  success: function(data){
				console.log("success"+data);
			  },
			  error: function(e){
				  console.log("error: "+e);
			  }
			});
			
			MessageToast.show("感谢您的参与，已经成功提交。");
			
		  }
	});
});