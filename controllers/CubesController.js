var express = require('express'),
    jsend = require('jsend');

var router = express.Router();

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
 * GET /cubes/:cubeId
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
router.post('/', function(req, res) {
    // TODO: Create a cube
    res.status(501).jsend.success(null);
});

/**
 * PUT /cubes/:cubeId
 * Modify a cubes based on the passed cube ID 
 */
router.put('/:cubeId', function(req, res) {
    // TODO: Modify a cube based on the passed cube ID
    res.status(501).jsend.success(null);
});

/**
 * DELETE /cubes/:cubeId
 * Delete a cube based on the passed cube ID 
 */
router.delete('/:cubeId', function(req, res) {
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
