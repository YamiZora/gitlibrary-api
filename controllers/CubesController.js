var express = require('express'),
    jsend = require('jsend'),
    bodyParser = require('body-parser');

var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.use(jsend.middleware);

/**
 * GET /cubes
 * Get a list of cubes
 */
router.get('/', function(req, res, next) {
    // TODO: Get a list of cubes based on the passed criteria
    res.status(501).jsend.success(null);
});

/**
 * GET /cubes/:cube_id
 * Get a cube based on the passed cube ID 
 */
router.get('/:cubeId', function(req, res) {
    // TODO: Get a cube based on the passed cube ID
    res.status(501).jsend.success(null);
});

/**
 * POST /cubes
 * Create a cube 
 */
router.post('/', urlencodedParser, function(req, res) {
    // TODO: Create a cube
    if (!req.body.name) {
	return res.status(400).jsend.fail({ error_code: 'missing_parameters',
					    name: 'a name is required' });
    }
    res.status(501).jsend.success(null);
});

/**
 * PUT /cubes/:cube_id
 * Modify a cubes based on the passed cube ID 
 */
router.put('/:cubeId', function(req, res) {
    // TODO: Modify a cube based on the passed cube ID
    res.status(501).jsend.success(null);
});

/**
 * DELETE /cubes/:cube_id
 * Delete a cube based on the passed cube ID 
 */
router.delete('/:cube_id', function(req, res) {
    // TODO: Delete a cube based on the passed cubes ID
    res.status(501).jsend.success(null);
});

/**
 * GET /cubes/search
 * Get cubes based on the passed criteria 
 */
router.get('/search', function(req, res) {
    // TODO: Get cube(s) based on a search
    res.status(501).jsend.success(null);
});

module.exports = router;
