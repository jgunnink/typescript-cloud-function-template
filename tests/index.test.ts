import { expect } from "chai";
import { helloWorld } from "../src/index";
import { Request, Response } from "express";

interface testObject {
  args: Partial<Request>;
  response: any; // We use any here to allow any kind of test response from the function to be passed in.
}

describe("when a message is provided", () => {
  const tests: testObject[] = [
    { args: { body: { message: "Hi" } }, response: { message: "Hi" } },
    { args: { body: { message: "12" } }, response: { message: "12" } },
  ];

  tests.forEach(({ args, response }) => {
    it(`returns ${args.body.message} when request body is ${JSON.stringify(args.body)}`, () => {
      const result = helloWorld(args as Request, { send: () => null } as Response);
      expect(result).to.deep.eq(response);
    });
  });
});

describe("when a message is not provided", () => {
  const tests = [
    { args: { body: { message: "" } }, expected: { message: "Hello World!" } },
    { args: { body: { message: undefined } }, expected: { message: "Hello World!" } },
    { args: { body: {} }, expected: { message: "Hello World!" } },
    { args: { body: { otherKey: "What?" } }, expected: { message: "Hello World!" } },
  ];

  tests.forEach(({ args, expected }) => {
    it(`returns Hello World! when request body is ${JSON.stringify(args.body)}`, () => {
      const result = helloWorld(args as Request, { send: () => null } as Response);
      expect(result).to.deep.eq(expected);
    });
  });
});
