## Wished Cities app

### Notes
- React Fullpage for UX.
- Latest version of React, using hooks for **everything**.
- Latest version of Redux, using hooks for **everything** (again).
- Unit testing with `jest` and `react-test-renderer`.

### Project structure
- All the components are structured by the following rules:
  - A folder with the component name in *PascalCase*.
  - A `index.js` file with the component code.
  - A *components* folder with all depending components inside (with the same structure).
  - Optionally, all the files required only by that component.
- The state is managed by Redux using the [*re-ducks*](https://github.com/something/re-ducks) pattern for file structure.

### Try it!
In your local:
- Clone the project
- `npm start`
- Play around!
- If you want to test: `npm test`
