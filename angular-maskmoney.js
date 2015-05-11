'use strict';

angular.module('uimaskmoney', []).directive('uiMaskmoney', function() {
  return {
      restrict: 'A',
      link: function (scope, elem, attr, ctrl) {
        elem.maskMoney();
      }
  };
});
