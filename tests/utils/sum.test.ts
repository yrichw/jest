// const sum = require("../../src/utils/sum")
// describe('sum', () => {
//     it('do summition', () => {
//         expect(sum(1, 1)).toEqual(2);
//     });
// }

// )

import sum from "utils/sum";

describe('sum', () => {
  it('可以做加法', () => {
    expect(sum(1, 1)).toEqual(2);
  });
})