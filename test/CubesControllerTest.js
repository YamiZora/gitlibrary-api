var assert = require('chai').assert,
    expect = require('chai').expect,
    should = require('chai').should(),
    express = require('express'),
    superTest = require('supertest');

// TODO: apiUrl should be configurable by an options param
var apiUrl = 'http://localhost:8080';
var request = superTest(apiUrl);

describe('CubesController', function() {
    
    describe('POST /cubes - Create a cube', function() {
	describe('Cases : 400 errors and "fail" status"', function() {
	    describe('missing_parameter:', function() {
		it('should detect a missing \'name\' field', function(done){
		    request.post('/cubes')
			.send({name: "lala"})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(400)
			.end(function(err, res){
			    if (err) throw err;
			    expect(res.body.status).to.equal('fail');
			    expect(res.body.data.error_code).to.equal('missing_parameters');
			    expect(res.body.data.name).to.equal('a name is required');
			    done();
			});
		});
	    });
	    describe('invalid_parameter:', function() {
		describe('name:', function() {
		    it('should return a size error if "cover"\'s size range is incorrect');
		    it('should return a format error if "cover" format isn\'t accepted');
		});
		describe('cover:', function() {
		    it('should return a size error if "cover"\'s size range is incorrect');
		    it('should return a format error if "cover" format isn\'t accepted');
		});
	    });
	});
    });
});
