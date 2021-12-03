import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload); //upload가 paramaeter들 위에 있어야하는 이유 생각
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get(":id(\\d+)/delete", deleteVideo);

export default videoRouter;
