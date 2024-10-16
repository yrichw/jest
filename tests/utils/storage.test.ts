// tests/utils/storage.test.ts
import storage from "@/utils/storage";

describe("storage", () => {
  it("can store temp key", () => {
    storage.set("newKey", "hello");
    expect(localStorage.getItem("my-app-newKey")).toEqual("hello");
  });
 
  it("can set app key", () => {
    localStorage.setItem("my-app-newKey", "hello");
    expect(storage.get("newKey")).toEqual("hello");
  });

  it("can delete app key", () => {
    storage.deleteKey("my-app-newKey");
    expect(storage.get("my-app-newKey")).toBeNull();
  });
});