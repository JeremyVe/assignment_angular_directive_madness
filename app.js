var directiveMadness = angular.module('directiveMadness', []);

directiveMadness.directive('mainNav', function() {

	return {
		templateUrl: 'directives/mainNav.html',
		restrict: "E",
		scope: {}
	}
})

directiveMadness.directive('mainHeader', function() {

	return {
		template: '<h1> <ng-transclude></ng-transclude> </h1>',
		transclude: true,
		restrict: "E",
		scope: {}
	}
})

directiveMadness.directive("copyright", function() {

	function linkCallback(scope, element, attr) {
		scope.date = new Date();
	}

	return {
		templateUrl: "directives/copyright.html",
		transclude: true,
		restrict: "E",
		scope: {},
		link: linkCallback
	}
})

directiveMadness.directive("colorize", function() {

	function linkCallback(scope, element, attr) {
		if (attr.color) {
			element.css("color", attr.color);
		}

		if (attr.background) {
			element.css("background", attr.background);
		}
	}

	return {
		restrict: "A",
		scope: {
			color: "@",
			background: "@"
		},
		link: linkCallback
	}
})

directiveMadness.controller("QuotesCtrl", 
	["$scope", 
	function($scope) {
		$scope.quotes = [];

		$scope.formData = {};

		$scope.submit = function(formValid, formQuote) {

			if (formValid) {

				var newQuote = {};
				newQuote.message = $scope.formData.message;
				newQuote.author = $scope.formData.author;
				$scope.quotes.push(newQuote);


				$scope.formData.message = '';
				$scope.formData.author = '';

				formQuote.$setPristine();
				formQuote.$setUntouched();
			}
		}

		$scope.deleteQuote = function(index) {
			$scope.quotes.splice(index, 1);
		}

}])

directiveMadness.directive("quoteForm", function() {
	
	return {
		templateUrl: "directives/quoteForm.html",
		restrict: "E",
		scope: true
	}
})

directiveMadness.directive("quotesIndex", function() {

	return {
		templateUrl: "directives/quotesIndex.html",
		restrict: "E",
		scope: true
	}
})
