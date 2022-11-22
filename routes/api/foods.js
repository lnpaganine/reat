const express = require('express');
const router = express.Router();
const foods = require('../../Foods');


/**
 * @route GET api/foods
 * @desc Retrives all foods
 **/
router.get('/', (req, res) => res.json(foods));

/**
 * @ TODO Task 1
 * @route GET api/foods/:id
 * @desc Retrieves task with ID specified in URL
 **/
router.get("/:id", (req,res) => {
    const found = foods.some(food => food.id === parseInt(req.params.id));
    if (found) {
        res.json(foods.filter(food => food.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No msg with the id of ${req.params.id}`});
    }
});

/**
 * @ TODO Task 2
 * @route DELETE api/foods/:id
 * @desc Deletes task with ID specified in URL
 **/
router.delete("/:id", (req,res) => {
    const found = foods.some(food => food.id === parseInt(req.params.id));
    if (found) {
        res.json({
            msg: `Task ${req.params.id} deleted`,
            foods: foods.filter(food => food.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({ msg: ` HTTP 400 Bad Request, no msg with the id of ${req.params.id}`});
    }
});

module.exports = router;