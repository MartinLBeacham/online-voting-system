const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { error } = require('console');
const router = express.Router();
const candidateController = require('../Controllers/testController');

router.put('api/candidate/:id', candidateController.updateCandidate);
module.exports = router;