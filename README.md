# 5.6 Secrets Project

A simple Node.js project that fetches random secrets from an API and displays them on a web page using **Express** and **EJS**.

## Features

- Fetches a random secret from [App Brewery Secrets API](https://secrets-api.appbrewery.com/random)  
- Displays the secret along with the username who shared it  
- Styled using Google Fonts and custom CSS  

## Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Axios (for API requests)
- Nodemon (for development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/riiddhii757/5.6-Secrets-Project.git
cd 5.6-Secrets-Project

2. Install dependencies:
   npm install

3. Running the Project
   npx nodemon solution.js

4. Open your browser and navigate to:
    http://localhost:3000
    
You should see a random secret displayed on the page.

Note:
CSS is embedded in index.ejs for simplicity but you can move it to public/styles/main.css for better structure.