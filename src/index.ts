import { Request, Response } from "express";

export const helloWorld = (req: Request, res: Response) => {
  const replyMessage = req.body.message || "Hello World!";
  const response = { message: replyMessage };

  res.send(response);
  return response; // Specify a return value here so we don't need to kick up an express-server for testing.
};
