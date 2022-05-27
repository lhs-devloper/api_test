import express from "express";
import { getUser, loggedUser, searchUser } from "../controller/apiUserConroller";

const apiUserRouter = express.Router()

apiUserRouter.route("/").get(getUser);
apiUserRouter.route("/Search").get(searchUser);
apiUserRouter.route("/loggedIn").post(loggedUser);
export default apiUserRouter