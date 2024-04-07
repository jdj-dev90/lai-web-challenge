
# NextJS Project with ChakraUI and Apollo Client

## Overview

This project is a Next.js application utilising TypeScript, ChakraUI for UI components, and Apollo Client for querying a public GraphQL API. It features a responsive design, a user information blocking element, and paginated data display from "The Rick and Morty API".

## Features

- Responsive design for mobile and desktop
- Initial blocking element to collect user's username and job title
- Data persistence for user information across reloads
- GraphQL data fetching with Apollo client
- Paginated list display of items from "The Rick and Morty API"
- Direct linking to specific pages of paginated data
- Detailed modal view for selected items

## Setup and Installation

1. **Clone the repository**
   
```
git clone https://github.com/jdj-dev90/lai-web-challenge.git
cd lai-web-challenge
```

2.  **Install dependencies**
```
npm install
```

3.  **Running the project locally**
```
npm run dev
```


Navigate to `http://localhost:3000` in your browser to view the app.

## Usage

1. **User Information Blocking Element**

- On initial load, a modal/page will prompt for the username and job title.
- This information is saved and persisted across reloads.

2. **Viewing and Updating User Information**

- The user's information is viewable in a designated area within the app.
- Users can update their information after the initial submission.

3. **GraphQL Data Fetching**

- The app uses Apollo Client to fetch data from "The Rick and Morty API".
- Displayed data includes images and other relevant information from the API.

4. **Pagination and Direct Linking**

- Data is displayed in a paginated format on the "Characters Page".
- Users can navigate directly to a specific page via URL (e.g. /?page=3).

5. **Item Detail View**

- Clicking an item on the "Characters Page" opens a modal displaying detailed information about the item.

## Deployment

The project is deployed on Vercel's free tier. You can access the live application at:

[Live Application URL](#)

## API Reference

This project uses [The Rick and Morty API](https://rickandmortyapi.com/graphql) for fetching character and episode information, including images. The documentation can be found at [The Rick and Morty API Documentation](https://rickandmortyapi.com/documentation/#graphql)


