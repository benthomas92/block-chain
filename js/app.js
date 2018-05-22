/*
File Name : app.js
Absolute Path : js
Author : Flex , Emergining Technologies
Created Date : 29/Sep/2016
*/

var pulseapp = angular.module("pulse", ['ngAnimate','ui.router','ngAria','ngProgress','angular-file-upload','ngScrollbars','ngMaterial', 'ngMessages', 'material.svgAssetsCache','angular-progress-button-styles']);

pulseapp.config( function ($stateProvider, $urlRouterProvider,$compileProvider,ScrollBarsProvider,$httpProvider){


	$stateProvider

    //   .state('login', {
    //   url: '/',
    //   templateUrl: 'login.html',
    //   controller:'loginController'
    // })

      .state('home', {
      url: '/',
      views: {
          'Content': {
          templateUrl: 'templates/main.html',

          }
      }
  })

	.state('home.report',{
	url: '/report',
	cache:false,
	views:{
		'subview':{
	templateUrl : 'templates/ReportList.html',
	controller:'reportMainController'

		}
	}

	})

	.state('home.tickets',{
			url: '/tickets',
           views:{
		'subview':{
			templateUrl : 'templates/Tickets.html',
			controller:'ticketsController'
		}
	}
		})

		.state('home.Events',{

          url: '/Events',
           views:{
		'subview':{
			templateUrl : 'templates/Events.html',
			controller:'eventController'

		}}

		})

		.state('home.requestaccess',{
			url: '/requestaccess',
           views:{
		'subview':{
			templateUrl : 'templates/RequestAccess.html',
			controller:'requestaccessController'
		}
	}
		})

		// .when('/requestaccess',{
  //           title: 'Request Access',
		// 	templateUrl : 'templates/ReportAccessTab.html',
		// 	controller:'requestaccessController'
		// })

		$urlRouterProvider.otherwise('/');
	// 	$httpProvider.interceptors.push(function($templateCache) {
	// return {
	// 'request' : function(request) {
	// if($templateCache.get(request.url) === undefined) { // cache miss
	// // Item is not in $templateCache so add our query string
	// console.log(request.url);
	// request.url = request.url + '?appVersion=' + Math.random();
	// console.log(request.url);
	// }
	// return request;
	// }
 // };
 // });
		// $compileProvider.debugInfoEnabled(false);

		// scrollbar defaults
					ScrollBarsProvider.defaults = {
						autoHideScrollbar: true,
						//setHeight: 500,
						scrollInertia: 0,
						axis: 'yx',
						advanced: {
							updateOnContentResize: true
						},
						scrollButtons: {
							scrollAmount: 'auto', // scroll amount when button pressed
							enable: false // enable scrolling buttons by default
						}
					};


	}
);



pulseapp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [],
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;

   };
});


pulseapp.directive('blur', [function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('click', function () {
                element.blur();
            });
        }
    };
}]);


