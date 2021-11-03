import { Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateMessageController } from "../controllers/CreateMessageController";
import { GetLast3MessagesControllers } from "../controllers/GetLast3MessagesControllers";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ ok: true });
});

routes.get("/github", (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

routes.get("/signin/callback", (req, res) => {
  const { code } = req.query;

  return res.json(code);
});

routes.post("/authenticate", new AuthenticateUserController().handle);
routes.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

routes.get("/messages/last3", new GetLast3MessagesControllers().handle);
routes.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export default routes;
