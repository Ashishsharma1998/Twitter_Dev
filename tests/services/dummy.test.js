import { execute } from "../../src/services/dummy-service.js";
import * as helper from "../../src/services/helper-service.js";

// jest.mock("../../src/services/helper-service.js");

test("result is true, ans should be Learning Js", () => {
  // helper.mockReturnValue(true);

  // jest.spyOn(helper, "helper").mockReturnValue(true);
  helper.helper = jest.fn().mockReturnValue(true);
  const result = execute();
  expect(result).toBe("Learning Js");
});

test("result is true, ans should be Learning ReactJs", () => {
  // helper.mockReturnValue(false);
  jest.spyOn(helper, "helper").mockReturnValue(false);
  const result = execute();
  expect(result).toBe("Learning ReactJs");
});
