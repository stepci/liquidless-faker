import { renderTemplate } from 'liquidless'
import { faker } from '../src'

const string = renderTemplate('{{ lorem.lines | faker: 1 }}', {}, {
  filters: {
    faker
  }
})

console.log(string)
