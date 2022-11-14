import {sum} from './'

test ('ma fonction sum',() => {
  const result = sum(10,10)
  expect(result).toBe(20)
}
)
