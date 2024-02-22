import { FilterFunction } from 'liquidless/dist/filters'
import { faker as fakerJS } from '@faker-js/faker'

export const fake: FilterFunction = (value, args, variable) => {
  const [module, type] = variable.split('.')
  return (fakerJS as any)[module][type](...args)
}
