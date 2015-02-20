angular.module('directiveWorkshop').directive('pending', function ($q, $timeout) {
  return {
    restrict: 'AE',
    scope: {
      request: '&'
    },
    link: function (scope, elem, attrs) {
      elem.bind('click', function () {
        elem.attr('disabled', 'disabled')
        $('#pendingForm').append('<img id="spinner" src="ajax-loader.gif" alt="loading" />');
        $timeout(function () {
            scope.request().then(function (data) {
              elem.removeAttr('disabled')
              $('#spinner').remove();
            });
          },
          1000);
      });

    }
  }
})