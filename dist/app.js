var app=angular.module("shuffling",[]);app.controller("FormController",["$scope","shufflingSvc",function(t,n){var o=this;o.submit=function(){console.log("in FormControllers submit"),console.log(o.name," - ",o.transitionDate," - ",o.status," - ",o.pickupLocation),console.log("shufflingSvc - ",n),n.addGuest(o.name,o.transitionDate,o.status,o.pickupLocation)}}]),app.controller("TabController",["$scope",function(t){}]),app.service("shufflingSvc",["Guest",function(t){var n=[];this.getGuestList=function(){return n},this.addGuest=function(o,i,s,e){console.log("in shufflingSvc.addGuest"),n.push(new t(o,i,s,e)),console.log(n)},this.deleteGuest=function(t){},this.editGuest=function(t){}}]),app.module("shuffling").factory("Guest",function(){var t=function(t,n,o){this.name=t,this.transitionDate=n,this.pickupLocation=o};return t});