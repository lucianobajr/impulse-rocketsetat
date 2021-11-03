import { Request, Response } from "express";
import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesControllers {
  async handle(req: Request, res: Response) {
    const service = new GetLast3MessagesService();

    try {
      const result = await service.execute();
      return res.json(result);
    } catch (err) {
      return res.json(err);
    }
  }
}

export { GetLast3MessagesControllers };
