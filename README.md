
# Getting Started with aida-graphs

This project uses `React`. All typescript dependencies are not needed (you can freely change the `.tsx` extensions to `.jsx`).

## Running the project

In the project directory, you can type:

### `npm install`

initially to install all necessary dependencies, and to run:

### `npm start`

Runs the app in the development mode.\

## Changing the explanations
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The link takes to parameters, `contextialised` and `embellished`. By default, they are set to `false`. You can change them directly using the link. There are four options, which will show the four possible explanation designs:

- Baseline: `http://localhost:3000?embellished=false&contextualised=false` 
- Embellished: `http://localhost:3000?embellished=true&contextualised=false` 
- Contextualised: `http://localhost:3000?embellished=false&contextualised=true` 
- Baseline + contextualised: `http://localhost:3000?embellished=true&contextualised=true` 

Look throughout the project for `TODO` markings as comments, they indicated where hard-coded data is used, and should be replaced by either data from the back-end, or at least proper simulated data.
