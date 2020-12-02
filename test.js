import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('test 2020', () => { strictEqual(anoSanto(2020), false) })
  it('test 2021', () => { strictEqual(anoSanto(2021), true) })
})