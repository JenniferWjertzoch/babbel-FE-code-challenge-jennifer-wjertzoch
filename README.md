# Rolling dice in turn - Frontend Coding Challenge

## Challenge description

In this challenge, I built a local game where players compete by rolling dice in turn.

A trusty BE developer has implemented an API endpoint on http://localhost:8000 for returning a game response which contains these properties:

- `matchId` - a unique id per match
- `players` - an array of 2-4 players which is randomly generated
  - `imageUrl` - the image url for the individual player. (served by the local server)
  - `id` - unique id of the user
  - `name` - the players name
- `scoreToWin` - the score the user must reach to win the match

## The Game

The challenge is to take this response from the API and make a functioning game out of it.

For this you must display each of the players on the page.
Each player takes a turn rolling by clicking a button. The points per roll will be minimum 1 point & maximum 6 points.
Player 1 goes first then Player 2 etc. and once the last player has rolled, return back to player 1.
Each player continues to roll until a player scores equal to or higher than the `scoreToWin`. This player wins the match.
When a player wins the match, post the `winnerId` and `gameId` to the specified endpoint successfully. Display a congratulatory message in any way you see fit.

**What needed to be done:**

- Layout the page as per the mockup. Please see the [mockup here](./mockup.png)
- Only the current player can roll, represented visually as well as functionally
- The winning player should be represented visually
- Display a winning message in away you see fit
- The players should not be able to continue rolling once the game has ended.
- Optional:
  - Using version control
  - Writing tests (Jest & React-Test-Renderer are configured)

### API endpoints

Make sure you have run `npm run start` so the server is available.

- GET: http://localhost:8000/api/game
- POST: http://localhost:8000/api/game
  - body (JSON)
    - matchId: **string**
    - winnerId: **string**

### How to get started

Then run:

```sh
npm install
```

Once all the packages are installed then run:

```sh
npm run start
```

Navigate to http://localhost:8080 to see the application running.

A server will also start on http://localhost:8000
