const { User, Movie, Booking } = require("../model/model.js"); // Adjust the path according to your project structure

const addNewUser = (req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUser = (req, res) => {
  User.find({})
    .then((user) => {
      // req.session.user = { email: email };
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUserWithId = (req, res) => {
  User.findById(req.params.UserId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateUser = (req, res) => {
  const updateData = req.body;
  User.findByIdAndUpdate(req.params.userId, updateData, { new: true })
    .then((updateUser) => {
      if (!req.params.userId) {
        res.status(400).json("user not found");
      }
      res.json(updateUser);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.userId)
    .then((deleteUser) => {
      if (!req.params.userId) {
        res.status(400).json("user not found");
      }
      res.json("User deleted successfull");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// movie

const getMovie = (req, res) => {
  Movie.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getMovieWidthId = (req, res) => {
  Movie.findById(req.params.movieId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const addNewMovie = (req, res) => {
  const newUser = new Movie({
     movieName: req.body.movieName,
     startDate: req.body.startDate,
     endDate: req.body.endDate,
     language: req.body.language,
     duration: req.body.duration,
     summary: req.body.summary,
     imageUrl: req.file ? req.file.path : null,
   });
  newUser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updateMovie = (req, res) => {
  const updateData = req.body;
  Movie.findByIdAndUpdate(req.params.movieId, updateData, { new: true })
    .then((updatedMovie) => {
      if (!updatedMovie) {
        res.status(404).json({ error: "Movie not found" });
      }
      res.json(updatedMovie);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then((deletedMovie) => {
      if (!deletedMovie) {
        res.status(404).json({ error: "Movie not found" });
      }
      res.json({ message: "Movie deleted successfully" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// booking

const getBooking = (req, res) => {
  Booking.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getBookingWidthId = (req, res) => {
  Booking.findById(req.params.UserId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const addNewBooking = (req, res) => {
  const newUser = new Booking(req.body);
  newUser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addNewUser,
  getUser,
  getUserWithId,
  updateUser,
  deleteUser,
  getMovie,
  getMovieWidthId,
  addNewMovie,
  updateMovie,
  deleteMovie,
  getBooking,
  getBookingWidthId,
  addNewBooking,
};
