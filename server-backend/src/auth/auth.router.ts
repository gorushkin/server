import express, { RequestHandler } from 'express';
import { getToken, getUser } from './auth.service';

const router = express.Router();

const authLogin: RequestHandler = async (req, res) => {
  const { login, password } = req.body;
  try {
    const token = getToken(login, password);
    res.status(200).send({ token });
  } catch (error) {
    res.status(403).send({ error: error.message });
  }
};

const authUser: RequestHandler = async (req, res) => {
  const { token } = req.body;
  try {
    const user = getUser(token);
    res.status(200).send({ user });
  } catch (error) {
    res.status(403).send({ error: error.message });
  }
};

router.post('/', authLogin);
router.post('/', authUser);

export default router;
