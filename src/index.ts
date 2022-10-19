import { FilterFunction } from 'liquidless/dist/filters'
import { faker as fakerJS } from '@faker-js/faker'

export const faker: FilterFunction = (value, args, variable) => {
  const [module, type] = variable.split('.')
  return (fakerJS as any)[module][type](args)
}
