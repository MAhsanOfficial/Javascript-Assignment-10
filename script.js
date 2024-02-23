 
 
    
    const fruits = ["Grapes", "Banana", "Apple", "Guava", "Mango"];

    
    function displayFruits() {
      const fruitsList = document.getElementById("fruitsList");
      fruits.forEach(fruit => {
        const listItem = document.createElement("li");
        listItem.textContent = fruit;
        fruitsList.appendChild(listItem);
      });
    }

    displayFruits(); 
    let numbers = [1, 2, 3, 4, 5];

     
    function displayNumbers() {
      document.getElementById("numbers").textContent = numbers.join(", ");
    }

    displayNumbers();  
    function addNumber() {
      const randomNumber = Math.floor(Math.random() * 10) + 1;  
      numbers.push(randomNumber);
      displayNumbers();
    }

     function removeNumber() {
      if (numbers.length > 0) {
        numbers.pop();
        displayNumbers();
      } else {
        alert("Array is Undefined!");
      }
    }
 
    function findIndex() {
      const numberToFind = parseInt(prompt("Enter The number To Find The Correct index:"));
      const index = numbers.indexOf(numberToFind);
      if (index !== -1) {
        alert(`Index of ${numberToFind} is: ${index}`);
      } else {
        alert(`${numberToFind} This Not found in the Array.`);
      }
    }
  