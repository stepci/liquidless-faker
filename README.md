# liquidless-faker

[Faker.js](https://github.com/faker-js/faker) filter for liquidless templates

## Get Started

Install the dependency from npm:

```sh
npm i liquidless-faker
```

Import the `faker` function

```js
import { faker } from 'liquidless-faker'
```

## Usage

**Example: Rendering a string**

```js
renderTemplate('{{ lorem.lines | faker: 1 }}', {}, {
  filters: {
    faker
  }
})
```

Outputs:

```
Saepe nesciunt officiis.
```
