export const helloWorld = (req: any, res: any) => {
  const replyMessage = req.body.message || "Hello World!";
  const response = { message: replyMessage };

  res.send(response); // Cloud Functions in node has express-like handling of responses. So we use this syntax.
  return response; // Specify a return value here so we don't need to kick up an express-server for testing.
};
