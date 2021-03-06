/*globals module*/
// Karma configuration
// Generated on Wed Oct 02 2013 11:59:43 GMT+0200 (CEST)

module.exports = function(config) {
	'use strict';

	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '',


		// frameworks to use
		frameworks: [
			'mocha',
			'requirejs'
		],


		files: [
			'bower_components/angular/angular.js',
			'vendor/angular-mocks.js',
			'test/runner.js',
			{pattern: 'bower_components/chai/chai.js', included: false},
			{pattern: 'vendor/sinon-1.7.3.js', included: false},
			{pattern: 'app/**/*.js', included: false},
			{pattern: 'components/**/*.js', included: false},
		],

		// list of files to exclude
		exclude: [

		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: [ 'progress' ],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: [
			'PhantomJS',
			//'Chrome',
			//'Firefox'
		],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
