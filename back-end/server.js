const express = require('express');
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../public/images'
const multer = require('multer')
const upload = multer({
    dest: '../public/images/',
    limits: {
        fileSize: 10000000
    }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    path: String,
    category: String,
    ingredients: [String],
    steps: [String],
    createdBy: mongoose.Types.ObjectId
});

// Create a model for recipes
const Recipe = mongoose.model('Recipe', recipeSchema);

const personSchema = new mongoose.Schema({
    name: String,
    favorites: [mongoose.Types.ObjectId]
});

const Person = mongoose.model('Person', personSchema);

// connect to the database
mongoose.connect('mongodb://localhost:27017/recipes', {
    useNewUrlParser: true
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

//Gets a user or, if one doesn't exist, creates one
app.post('/api/persons', async (req, res) => {
    if (await Person.exists({name: req.body.name})) {
        try {
            let found = await Person.findOne({name: req.body.name});
            res.send(found);
        } catch (error) {
            console.log(error);
            res.send(500);
        }
    } else {
        const person = new Person({
            name: req.body.name,
            favorites: []
        });
        try {
            await person.save();
            res.send(person);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
});

//Get Users
app.get('/api/persons', async(req, res) => {
    try {
        let items = await Person.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//Get User by id
app.get('/api/users/:id', async (req, res) => {
    try {
        let item = await Person.findOne({_id: req.params.id});
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

//Allows a user to favorite or unfavorite a recipe
app.put('/api/favorite', async (req, res) => {
    try {
        let person = await Person.findOne({_id: req.body.personId});
        let index = person.favorites.indexOf(req.body.recipeId);
        if (req.body.favorite) {
            if (index === -1) {
                person.favorites.push(req.body.recipeId);
                person.save();
            }
            res.send({favorite: req.body.favorite});
        } else {
            if (index !== -1) {
                person.favorites.splice(index, 1);
                person.save();
            }
            res.send({favorite: req.body.favorite});
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

// Create a new recipe
app.post('/api/recipes', async (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        path: req.body.path,
        category: req.body.category,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        createdBy: req.body.createdBy
    });
    try {
        await recipe.save();
        res.send(recipe);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

// Get a list of all recipes
app.get('/api/recipes', async (req, res) => {
    try {
        let items = await Recipe.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/recipes/:id', async (req, res) => {
    try {
        let item = await Recipe.findOne({_id: req.params.id});
        res.send(item);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

// Delete an item
app.delete('/api/recipes/:id', async (req, res) => {
    try {
        console.log("Deleting recipe " + req.params.id);
        await Recipe.deleteOne({_id: req.params.id});
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

// Edit an item
app.put('/api/recipes/:id', async (req, res) => {
    try {
        let recipe = await Recipe.findOne({_id: req.params.id});
        recipe.title = req.body.title;
        recipe.category = req.body.category;
        recipe.ingredients = req.body.ingredients;
        recipe.steps = req.body.steps;
        recipe.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(3333, () => console.log('Server listening on port 3333!'));
