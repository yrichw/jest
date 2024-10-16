// src/utils/after1000ms.ts
type AnyFunction = (...args: any[]) => any;

const after1000ms = (callback?: AnyFunction) => {
  console.log("start timer");
  setTimeout(() => {
    console.log("reached time");
    callback && callback();
  }, 1000);
};

export default after1000ms;