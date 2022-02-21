import { expect } from "chai";
import { helloWorld } from "../src/index";

describe("when a message is provided", () => {
  const tests = [
    { args: { body: { message: "Hi" } }, expected: { message: "Hi" } },
    { args: { body: { message: "12" } }, expected: { message: "12" } },
  ];

  tests.forEach(({ args, expected }) => {
    it(`returns ${args.body.message} when request body is ${JSON.stringify(args.body)}`, () => {
      const result = helloWorld(args, { send: () => null });
      expect(result).to.deep.eq(expected);
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
      const result = helloWorld(args, { send: () => null });
      expect(result).to.deep.eq(expected);
    });
  });
});
