# Baby Names App

This is a web application built with React that allows users to explore popular baby names. It provides a simple and intuitive interface to search for baby names based on gender and displays the results in a user-friendly manner.

## Features

- Search for baby names by gender (boy, girl, or neutral)
- Display a list of baby names matching the search criteria
- Navigate through different pages using a responsive navbar
- Error handling for invalid requests and display appropriate error messages
- Responsive design using Bootstrap for optimal viewing experience on different devices

## Technologies Used

- React: A JavaScript library for building user interfaces
- React Router: A library for handling navigation and routing in a React application
- Axios: A promise-based HTTP client for making API requests
- Bootstrap: A popular CSS framework for creating responsive and stylish web pages

## Getting Started

To run the Baby Names App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/HassanEwida/baby-names-app.git`
2. Navigate to the project directory: `cd baby-names-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000`

## Screenshots

### Home Page
![Home Page Screenshot](screenshots/home.png)

![Home](https://github.com/HassanEwida/baby-names/assets/43070175/a90d1889-a464-44bf-a3d1-b2da7b80087d)

### Baby Names Page
![Baby Names Page Screenshot](screenshots/baby-names.png)

### About Page
![About Page Screenshot](screenshots/about.png)

### Not Found Page
![Not Found Page Screenshot](screenshots/not-found.png)

## API

The Baby Names App uses the [API Ninjas](https://api-ninjas.com/) service to fetch baby names data. It requires an API key to make requests to the API. Make sure to obtain an API key from API Ninjas and replace the `API_KEY` variable in the `src/services/api.js` file with your own key.

## Folder Structure

The project follows a standard folder structure for a React application:

- `src/`: Contains the source code files
  - `components/`: Reusable components used throughout the application
  - `pages/`: Components representing different pages or views
  - `services/`: Services for making API requests
  - `App.js`: The main component that sets up the routing and renders other components
  - `index.js`: The entry point of the application
- `public/`: Contains the public assets and the HTML template
- `package.json`: Defines the project dependencies and scripts
- `README.md`: Provides information and instructions about the project

## Acknowledgements

- The project was developed as part of the React course by Shulamit Tla'or.
- Baby names data is provided by the [API Ninjas](https://api-ninjas.com/) service.

## Contact

For any questions or inquiries, please contact Hassan Ewida at [Hassan@ewida.com](mailto:Hassan@ewida.com).
