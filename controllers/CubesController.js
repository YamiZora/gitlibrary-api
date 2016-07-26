var express = require('express');
var router = express.Router();

/**
 * GET /cubes
 * Get a list of cubes
 */
router.get('/', function(req, res, next) {
    // TODO: Get a list of cubes based on the passed criteria
    res.send('GET /cubes');
});

/**
 * GET /cubes/:cubeId
 * Get a cube based on the passed cube ID 
 */
router.get('/:cubeId', function(req, res) {
    // TODO: Get a cube based on the passed cube ID
    res.send('GET /cubes/:cubeId');
});

/**
 * POST /cubes
 * Create a cube 
 */
router.post('/', function(req, res) {
    // TODO: Create a cube
    res.send('POST /cubes');
});

/**
 * PUT /cubes/:cubeId
 * Modify a cubes based on the passed cube ID 
 */
router.put('/:cubeId', function(req, res) {
    // TODO: Modify a cube based on the passed cube ID
    res.send('PUT /cubes/:cubeId');
});

/**
 * DELETE /cubes/:cubeId
 * Delete a cube based on the passed cube ID 
 */
router.delete('/:cubeId', function(req, res) {
    // TODO: Delete a cube based on the passed cubes ID
    res.send('DELETE /cubes/:cubeId');
});

/**
 * GET /cubes/search
 * Get cubes based on the passed criteria 
 */
router.get('/search', function(req, res) {
    // TODO: Get cube(s) based on a search
    res.send('GET /cubes/search');
});

module.exports = router;
