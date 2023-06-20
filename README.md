# React Testing POC with Jest / React Testing Library
This repository contains unit tests for a TypeScript React app built with Vite. The tests are written using Jest and React Testing Library.

## Technology
- React v18.2.0
- Typescript v5.0.2

## Other tools used
- [Vite](https://vitejs.dev/guide/)
- [Jest](https://jestjs.io/es-ES/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

## Components tested
- InputForm
- LabelText
- PokemonList: use the [pokeapi](https://pokeapi.co/) and [axios](https://axios-http.com/es/docs/intro)

## Configure your project to do the unit test
To run the test for the project, run the follow the next steps:

1. Install the following dependencies:

```
npm install --dev jest babel-jest @babel/preset-env @babel/preset-react
npm install --dev @testing-library/react @testing-library/dom @testing-library/user-event @types/jest jest-environment-jsdom
npm install --dev jest-svg-transformer
npm install --save-dev @babel/core @babel/preset-typescript
npm install --save-dev identity-obj-proxy
```

2. Add the next script in the `package.json` file:

```
"test": "jest --watchAll=false --coverage --CI=true"
```

3. Create the `babel.config.js` file and add this:
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        '@babel/preset-typescript',
    ],
};
```
4. Create the `jest.config.js` file and add this:
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
	"\\.(css|less|scss)$": "identity-obj-proxy",
  }
}
```
5. Create the `jest.setup.js` file and let it empty. Here you will have the previous installations that your test will need.

