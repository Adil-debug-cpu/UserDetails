About "Github-Collab-Users" Application:

It was an absolute pleasure to build this. Given the requirement being a basic application, no external libraries were added
outside of React Router. Also of note is there is no state management library (Redux, MobX, etc.) as the nature of state and
data were fairly simple. If there was to be a possibility of prop drilling or more complexity, I would have turned to React
Context first and Redux for a more robust solution.

Styling was fairly light with about 100 lines of CSS reached. My preference is typically SCSS and I thought of to use
styled components (certainly possible to convert over); however, I did not feel the need to complicate the styling too much.

The Github API is paginated so I believed the best approach was to create pseudo-pages for the list view. The API only
gave me about 5 pages worth of data; I would have liked to have a total number of users and total number of pages to account
for some of the data being passed to be returned on fetch as to not hardcode the page numbers. I have added an additional
small toggle feature to sort users alphabetically and to unsort.

Thank you for your time to review,

Stanley Nguyen

Installation:

1. Please run 'npm install' to install all necessary dependencies
2. Please run 'npm start' to start appliaction after step 1. Application should display and be functional.
