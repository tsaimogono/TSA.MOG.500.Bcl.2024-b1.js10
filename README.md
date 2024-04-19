# [JSL10] Submission: Escaping Vanilla JS: Abstraction Challenge

You will:
1. Use the provided Starter Code Repository: https://github.com/CodeSpace-Academy/Module_10_StudentNo_Classcode_Group_Name-Surname_JSL10
2. Code your solution.
3. Commit changes to your GitHub repository.
4. Submit the GitHub Repository Link to the LMS [JSL10] Submission Project Tab.

The Escape Vanilla JS Challenge is an interactive web-based project focusing on debugging skills, problem-solving, and the concept of abstraction. You will navigate through three themed "rooms," each presenting a unique challenge that requires them to debug and correct given JavaScript code to proceed. This adventure is themed around escaping the confines of Vanilla JavaScript to advance towards learning React.

![alt text](<[JSL10 Solution].gif>)

## What You Need to Do:

1. Clone the provided Starter Code Repository to your local development environment (e.g., VSCode): https://github.com/CodeSpace-Academy/Module_10_StudentNo_Classcode_Group_Name-Surname_JSL10
2. Open the cloned project in your code editor.
3. Code your solution for each of the challenges as per the provided instructions.
4. Commit your changes to your local Git repository with meaningful commit messages.
5. Push your local Git repository to your GitHub account.
6. Verify that the changes have been successfully pushed to your GitHub repository.

#### Debugging Tasks

1. **Correct the ID used in the event listener for Room 1.**
2. **Use the correct element ID when displaying results for Room 1.**
3. **Add the missing 'async' keyword to the JS concepts set.**
4. **Correct the function call to find the intersection of `jsConcepts` and `reactConcepts` for Room 2.**
5. **Ensure asynchronous operations are handled correctly in Room 3, particularly by adding `await` before the promise in `navigateLabyrinth`.**
6. **Adjust the `findMostRecentBook` function to correctly compare dates and find the most recent book.**
7. **Fix the `findIntersection` function to correctly determine the intersection of two sets.**
8. **Add the `await` keyword before `new Promise` in `navigateLabyrinth` to ensure the simulation of asynchronous operations works as intended.**

## What You Need to Include:

1. Ensure that your code includes the necessary modifications to meet the challenge requirements.
2. Your GitHub repository should contain the updated code files.

## How We'll Assess Your Work:

1. We will review your GitHub repository to ensure that it contains the updated code files.
2. We will assess the modifications made to the code to verify that they effectively meet the challenge requirements.
3. We will consider the commit history and meaningful commit messages to evaluate your coding process.


# labyrinth game

- This code provides the logic for an escape room experience built with JavaScript. Each room is unlocked by solving a specific task related to JavaScript concepts.

## Bugs

### Room 1:
- **Bug:** Incorrect ID used for attaching the event listener.
- **Bug:** Incorrect element ID used for updating the result.

### Room 2:
- **Bug:** Missing JavaScript concepts in the set.
- **Bug:** Incorrect function call for finding common concepts.

### Room 3:
- **Bug:** Asynchronous function not properly handled.

## How to play

- Open the HTML file containing this JavaScript code in your browser.
- Click the buttons corresponding to each room's puzzle to solve them.
- The results for each room will be displayed below the buttons.

## functionality
- **Room 1:** Find the Most Recent Book
Clicking the "Solve Room 1" button fetches a list of books from "books.json".
The code then finds the most recently published book based on its "published" date.
The title of the most recent book is displayed as a clue to unlock the next room.
- **Room 2:**Find Common Programming Concepts
 Clicking the "Solve Room 2" button defines sets containing JavaScript and React concepts.
The code then attempts to find the intersection between the two concept sets using a function called "findIntersection". There's also an error in this function call.
The common concepts are displayed as a comma-separated list forming the code to unlock the door.
- **Room 3:** Navigate the Labyrinth
Clicking the "Solve Room 3" button fetches directions from "directions.json".
The code then calls an asynchronous function "navigateLabyrinth" to navigate the labyrinth based on the retrieved directions.
After navigating the labyrinth, a congratulatory message is displayed, indicating successful completion of the escape room challenge.

## File Structure
- `index.html`: HTML file containing the interface for solving the rooms.
- `script.js`: JavaScript file containing the logic for solving the rooms.
- `books.json`: JSON file containing book data.
- `directions.json`: JSON file containing navigation directions.

## challenge:
- Fix the identified bugs in the code.
- Explore the code and understand how asynchronous functions are used in Room 3.

## Improment
- Visual Design: Create an engaging visual interface for the escape room using HTML and CSS.
- Sound Effects: Incorporate sound effects to enhance the atmosphere and provide feedback to the playe

## Conclusion
- This escape room game is a well-structured project using JavaScript concepts like working with JSON data, asynchronous functions, and sets. Fixing the bugs and incorporating the suggested enhancements can transform it into a truly immersive and educational experience.

