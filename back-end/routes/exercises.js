const router = require("express").Router();
let Exercise = require("../models/exercise.model");



router.route('/').get( (req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error: " + err))
});

router.route('/add').post( (req, res) => {
    const {username} = req.body;
    const {description} = req.body;
    const {duration} = Number(req.body);
    const {date} = new Date();

    const newExercise = new Exercise(
        {username},
        {description},
        {duration},
        {date},
    );

    newExercise.save()
    .then( () => res.json("Exercise added"))
    .catch( err => res.status(400).json("Error: " + err))
});


router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then( exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete( (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req,res) => {
    Exercise.findByIdAndUpdate(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;

        exercise.save()
        .then(() => res.json("Exercise updated"))
        .catch(err => res.status(400).json("Error: " + err))

    })
      .catch(err => res.status(400).json("Error: " + err));  
});





module.exports = router;