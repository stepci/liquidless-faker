import { renderTemplate } from 'liquidless'
import { fake } from '../src'

const string = renderTemplate('{{ lorem.lines | fake: 1 }}', {}, {
  filters: {
    fake
  }
})

console.log(string)
