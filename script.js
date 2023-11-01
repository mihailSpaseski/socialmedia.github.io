document.getElementById("Generate").addEventListener("click", function() {
    const wordBoxValue = document.getElementById("WordBox").value;
    const speedValue = parseInt(document.getElementById("Speed").value);

    // Clear the page
    document.body.innerHTML = "";

    // Center and style the text
    const centeredText = document.createElement("div");
    centeredText.id = "centeredText";
    centeredText.style.textAlign = "center";
    centeredText.style.fontSize = "24px";
    centeredText.style.marginTop = "100px";
    centeredText.textContent = wordBoxValue;
    document.body.appendChild(centeredText);

    // Create a "Start" button
    const startButton = document.createElement("button");
    startButton.id = "Start";
    startButton.textContent = "Start";
    startButton.style.textAlign = "center";
    startButton.style.fontSize = "24px";
    startButton.style.marginTop = "100px";
    document.body.appendChild(startButton);

    const resetButton = document.createElement("button");
    resetButton.id = "Reset";
    resetButton.textContent = "Reset";
    resetButton.style.textAlign = "center";
    resetButton.style.fontSize = "24px";
    resetButton.style.marginTop = "100px";
    document.body.appendChild(resetButton);

    // Function to display words one by one
    function displayWords(wordList) {
        let currentIndex = 0;
        const interval = 60000 / speedValue; // Calculate interval based on words per minute

        const displayNextWord = () => {
            if (currentIndex < wordList.length) {
                centeredText.textContent = wordList[currentIndex];
                currentIndex++;
                setTimeout(displayNextWord, interval);
            } else {
                centeredText.textContent = "КРАЈ.";
            }
        };

        // Add event listener to "Start" button
        startButton.addEventListener("click", function() {
            displayNextWord();
        });
    }

    const words = wordBoxValue.split(" ");
    displayWords(words);

    document.getElementById("Reset").style.display = "block";

    
});

document.getElementById("Reset").addEventListener("click", function() {
    // Toggle back to the input container
    document.querySelector(".container").style.display = "block";
    document.querySelector(".output-container").style.display = "none";

    // Clear and reset the input fields
    document.getElementById("WordBox").value = "";
    document.getElementById("Speed").value = "";

    // Hide the "Reset" button
    document.getElementById("Reset").style.display = "none";
});
