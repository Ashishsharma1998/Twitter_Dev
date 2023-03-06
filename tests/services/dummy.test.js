import { execute } from "../../src/services/dummy-service.js";

test("result is true, ans should be Learning Js", () => {
  const result = execute();
  expect(result).toBe("Learning Js");
});
