import { Router } from "express";
// import { db} from '../database/models'
const {users} = require('../database/models')
const router = Router()

router.get('/', async (req, res) => {
  res.send({status: 'OK', message: 'This api is working'});
});

router.post('/', async (req, res) => {
  res.send({status: 'OK', message: 'This api is working'});
});

export default router