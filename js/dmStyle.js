// Allows data binding within <style> tags (from: https://github.com/deanmcpherson/angular-inline-style)
'use strict';

angular.module('dm.style', [])
  .directive('style', function($compile) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        if (element.html()) {
          var template = $compile('<style ng-bind-template="' + element.html() + '"></style>');
          element.replaceWith(template(scope));
        }
      }
    };
  });