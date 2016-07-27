var assert = require('chai').assert,
    expect = require('chai').expect,
    should = require('chai').should(),
    express = require('express'),
    request = require('supertest');

// TODO: apiUrl should be configurable by an options param
var apiUrl = 'http://localhost:8080';
var request = request(apiUrl);

describe('CubesController', function() {
    
    describe('POST /cubes - Create a cube', function() {
	describe('Cases : 400 errors and "fail" status"', function() {
	    describe('missing_parameter:', function() {
		it('should return a "name" missing message');
	    });
	    describe('invalid_parameter: ', function() {
		describe('name:', function() {
		    it('should return a size error if "name" range is not between 2 and 150');
		});
		describe('cover:', function() {
		    it('should return a size error if "cover"\'s size range is incorrect');
		    it('should return a format error if "cover" format isn\'t accepted');
		});
	    });
	});
    });

});

