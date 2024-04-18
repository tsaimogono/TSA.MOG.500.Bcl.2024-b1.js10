document.addEventListener("DOMContentLoaded", () => {
    // Attach event listener to solveRoom1 button
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
       // Fetch books.json and find the most recent book
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Attach event listener to solveRoom2 button
    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
         // Update room2Result with the common concepts
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then( async directions => {
                await navigateLabyrinth(directions);
                // Once navigation is complete, display a congratulatory messag
                document.getElementById("room3Result").innerHTML = "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!"; 
            });
            
    });
});

// Function to find the most recent book
function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}


// Function to find the intersection of two sets
function findIntersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}


// Asynchronous function to navigate the labyrinth with a delay between steps
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // Pause for 1 second between steps
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }

}