const express = require('express');
const {User} = require('../../models');

const router = express.Router();

// Define your user routes here

router.post('/', async (req, res) => {
    try {
        console.log("before user create");
      const userData = await User.create(req.body);
        console.log("after user creation");
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
    
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  

router.get('/users', (req, res) => {
    // Logic to handle GET request for all users
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

router.get('/users/:id', (req, res) => {
    // Logic to handle GET request for a specific user
    const userId = req.params.id;
    User.findById(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

// router.post('/users', (req, res) => {
//     // Logic to handle POST request to create a new user
//     const newUser = new User({
//         // Extract user data from request body
//         // and assign it to newUser object properties
//         // Example: name: req.body.name
//     });

//     newUser.save()
//         .then(user => {
//             res.status(201).json(user);
//         })
//         .catch(err => {
//             res.status(500).json({ error: err });
//         });
// });

router.put('/users/:id', (req, res) => {
    // Logic to handle PUT request to update a specific user
    const userId = req.params.id;
    const updatedData = req.body;

    User.findByIdAndUpdate(userId, updatedData, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

router.delete('/users/:id', (req, res) => {
    // Logic to handle DELETE request to delete a specific user
    const userId = req.params.id;
    User.findByIdAndDelete(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

module.exports = router;