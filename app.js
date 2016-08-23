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