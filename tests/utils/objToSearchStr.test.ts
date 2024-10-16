import objToSearchStr from "@/utils/objToSearchStr";
describe("objToSearchStr", () => {
  it("can convert object to query str", () => {
    expect(
      objToSearchStr({
        a: "1",
        b: "2",
      })
    ).toEqual("a=1&b=2");
  });
});