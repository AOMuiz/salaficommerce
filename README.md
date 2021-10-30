# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# SalafiCommerce by SalafiDev Team

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.co).<br>
To see this project in action, go to [Demo SalafiCommerce](https://salaficommerce.netlify.app/) on line

## Preview

<span>
Add preview image here
</span>

<hr />

## Getting Started

Clone this repo :
`git clone https://github.com/AOMuiz/salaficommerce.git`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## A brief description of the project

### Task

> List Project Taks Here

## Technologies Used

1. Used `React Js` for building the website.

2. Implemented website styling using `Styled Components` and `Tailwind css`.

3. Used `Error Boundary` npm package for handling errors.

4. Used `Fetch api` for data fecthing.

5. Created `Custom Hooks` for handling fetched data and rendering.

## Style Utilities

### Relative Unit

This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.

## Folder Structure

```
|-- src/
  |-- assets/
  |-- images/
    |-- index.js/
  |-- components/
  |-- constants/
  |-- navigation/
  |-- redux/
  |-- screens/
  |-- utils/
    |-- Helpers/
    |-- Hooks/
|-- App.js
|-- index.js
|-- index.css
|-- tailwind.config.js
|-- serviceWorker.js
|-- setupTests.js
```

- `components` : Folder to put all non shared Component
- `shared/assets` : Folder to put assets like fonts, icons and images
- `shared/components`: Folder to put all shared Component
- `shared/constants` : Folder to put all of ours constant like `api url`, `mock`, `action types` and all others constant data that dont changed
- `shared/helpers` : Folder to put our helpers function like Consume API and formating data or others helpers
- `shared/hooks` : Folder to put all of ours custom hooks/logic for component
- `styles` : Folder to put our Styled Component that reusable

## Style Utilities

### Relative Unit

This project using relative unit based 10px. so you can use `1rem` which means `10px` propeties in css to help ours styling more easier handling Resposive.

### Grid

This project using Grid System which is using 3 Column because based on Content/Data, we only need 3 Column. This Grid system i made it myself using Flexbox. You can find `Grid` file in `src/shared/styles/base/grid.js`. This `Grid` system contain `Container`, `Row` and `Col`.<br>

- How to use it

  ```
  import { Container, Row, Col } from 'path/to/grid/file';

  <Container>
    <Row>
      <Col>Column 1</Col>
      <Col>Column 2</Col>
      <Col>Column 3</Col>
    </Row>
  <Container>
  ```

  or if you only want to use `Container`, well, you dont have to import `Row` and `Col`. but if you want to use `Col` you must wrap with `Container` and `Row`.

  ```
  import { Container, Row, Col } from 'path/to/grid/file';

  <Container>
    <YourComponentHere />
  <Container>
  ```

* Custom Grid<br>
  Also you can modify `Container`, `Row` or `Col` to achieve something that this `Grid` cannot do, or you want to add some value or edit some value.

  ```
  import styled from 'styled-components';
  import { Col } from 'path/to/grid/file';

  const YourCustomComponent = styled(Col)`
    background: orangered;
  `;

  <Container>
    <Row>
      <YourCustomComponent>Column 1</YourCustomComponent>
      <YourCustomComponent>Column 2</YourCustomComponent>
      <YourCustomComponent>Column 3</YourCustomComponent>
    </Row>
  <Container>
  ```

### Media Queries

#### Relative Unit

| State           | Properties  |
| --------------- | ----------- |
| Default         | 1rem = 10px |
| max-width 768px | 1rem = 9px  |
| max-width 576px | 1rem = 8px  |

#### Container

| State            | Properties     |
| ---------------- | -------------- |
| Default          | width = 100%   |
| min-width 576px  | width = 540px  |
| min-width 768px  | width = 720px  |
| min-width 992px  | width = 960px  |
| min-width 1200px | width = 1140px |
