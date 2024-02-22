import { renderString } from 'liquidless'
import { fake } from '../src'

const string = renderString('{{ lorem.lines | fake: 1 }}', {}, {
  filters: {
    fake
  }
})

console.log(string)
