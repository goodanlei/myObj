var app = angular.module('myApp', ['ngRoute'], function($compileProvider){  
  $compileProvider.directive('appheader', function($compile) {  
    return {  
      templateUrl: 'tpl/header.html',  
      replace: true,  
      transclude: false,  
      scope: false  
    };  
  });  
  $compileProvider.directive('appfooter', function($compile) {  
    return {  
      templateUrl: 'tpl/footer.html',  
      replace: true,  
      transclude: false,  
      scope: false  
    };  
  }); 
  $compileProvider.directive('appnav', function($compile) {  
    return {  
      templateUrl: 'tpl/nav.html',  
      replace: true,  
      transclude: false,  
      scope: false  
    };  
  }); 
}).config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'tpl/index/index.html'})
    .when('/classroom',{templateUrl:'tpl/classroom/classroom.html'})
    .when('/knowledgebase',{templateUrl:'tpl/knowledgebase/knowledgebase.htm'})
    .when('/preview',{templateUrl:'tpl/preview/preview.html'})
    .otherwise({redirectTo:'/'});
}]); 

