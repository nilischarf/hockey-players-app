Components & Functionality

App.js
-Sets up React Router for navigation
-Fetches players from json-server
-Stores players in state and updates when new players are added

Navbar.js
-Provides navigation to Home, Players, and About pages

Home.js
-Displays the New York Rangers title and logo

About.js
-Displays information about the application and a logo

Players.js
-Renders the AddPlayerForm and PlayerList

AddPlayerForm.js
-Allows users to add new players to the roster
-Sends a POST request to json-server
-Updates the player list instantly without refreshing
-Clears the form upon submission

PlayerList.js
-Displays all players in a grid layout
-Includes a search bar for filtering by player name
-Includes a dropdown filter for sorting by team position

PlayerCard.js
-Displays individual player details including:
-Name
-Number
-Position
-Image

Styling (App.css)
-Grid Layout: Players appear side by side
-Consistent Image Size: All player images are resized to be the same size
-Search Bar & Filter Alignment: Positioned properly
-Navbar Styling: Blue background with white text

Future improvements could include: adding edit functionality to update player details, allowing players to be deleted from the roster, and fetching live player data from an API. 

This project is licensed under Flatiron School.