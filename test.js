import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('test 2020 no es', () => { strictEqual(anoSanto(2020), false) })
  it('2021 es santo', () => { strictEqual(anoSanto(2021), true) })
  it('2027 es santo', () => { strictEqual(anoSanto(2027), true) })
  it('2032 es santo', () => { strictEqual(anoSanto(2032), true) })
  it('2033 no es santo', () => { strictEqual(anoSanto(2033), false) })
  it('2038  es santo', () => { strictEqual(anoSanto(2038), true) })
  it('2040 no es santo', () => { strictEqual(anoSanto(2040), false) })
  it('2049  es santo', () => { strictEqual(anoSanto(2027), true) })



})