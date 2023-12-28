document.addEventListener("DOMContentLoaded", function () {
    // Data from Python script
    const persons = [
        {"name": "Shubh", "Age": 23, "City": "Bhopal"},
        {"name": "Bhuvi", "Age": 17, "City": "Delhi"},
        {"name": "Anushka", "Age": 22, "City": "Indore"}
    ];

    // Output to the console
    persons.forEach(person => {
        console.log(`Name: ${person.name}, Age: ${person.Age}, City: ${person.City}`);

        // Output to HTML
        const outputContainer = document.getElementById("output-container");

        // Create person container
        const personDiv = document.createElement("div");
        personDiv.classList.add("person");

        // Create and append name, age, and city elements
        const nameElement = document.createElement("div");
        nameElement.classList.add("name");
        nameElement.textContent = `Name: ${person.name}`;
        personDiv.appendChild(nameElement);

        const ageElement = document.createElement("div");
        ageElement.classList.add("age");
        ageElement.textContent = `Age: ${person.Age}`;
        personDiv.appendChild(ageElement);

        const cityElement = document.createElement("div");
        cityElement.classList.add("city");
        cityElement.textContent = `City: ${person.City}`;
        personDiv.appendChild(cityElement);

        // Append the person container to the output container
        outputContainer.appendChild(personDiv);
    });
});
