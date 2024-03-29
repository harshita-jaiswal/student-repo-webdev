var starships = [];
const url = "https://swapi.py4e.com/api/starships/";
const fetchData = (url) => {
  // REtrieve the data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      starships = data.results;
    })
    .catch((error) => console.error(error))
    .finally(() =>
      console.log("Fetch starships - Promise Implementation - finally block")
    );
};

const createSpaceshipComponent = (spaceship) => {
  const container = document.createElement("section"); // do not modify this line
  container.setAttribute("class", "listWrapper");

  const namePrice = document.createElement("div");
  namePrice.setAttribute("class", "namePrice");

  const name = document.createElement("span");
  name.textContent = spaceship.name;

  const credits = document.createElement("span");
  credits.setAttribute("class", "namePrice__credits");
  const cost = parseInt(spaceship.cost_in_credits);
  credits.textContent = `${
    !isNaN(cost) ? cost.toLocaleString() : spaceship.cost_in_credits
  } credits`;

  const manufacturer = document.createElement("p");
  manufacturer.setAttribute("class", "manufacturer");
  manufacturer.textContent = spaceship.manufacturer;

  const atmSpeedCargoCap = document.createElement("div");
  atmSpeedCargoCap.setAttribute("class", "atmSpeedCargoCap");

  const atmSpeed = getElement(
    "Max atmosphering speed",
    spaceship.max_atmosphering_speed
  );

  const cargoCapacity = getElement(
    "Cargo Capacity",
    parseInt(spaceship.cargo_capacity).toLocaleString()
  );
  cargoCapacity.classList.add("border-left");

  atmSpeedCargoCap.append(atmSpeed);
  atmSpeedCargoCap.append(cargoCapacity);

  namePrice.append(name);
  namePrice.append(credits);

  container.append(namePrice);
  container.append(manufacturer);
  container.append(atmSpeedCargoCap);
  return container; // do not modify this line
};

const getElement = (label, value) => {
  const element = document.createElement("div");
  element.setAttribute("class", "element");

  const elementValue = document.createElement("span");
  elementValue.setAttribute("class", "fontWeight-bolder");
  elementValue.textContent = value;

  const elementLabel = document.createElement("span");
  elementLabel.textContent = label;

  element.append(elementValue);
  element.append(elementLabel);
  return element;
};

const main = document.getElementsByTagName("main")[0];

const filterStarships = (input) => {
  // Return an array with all ships that have less than 10 passengers with more than one crew member
  return input.filter((star) => star.passengers < 10 && star.crew > 1);
};

const reduceStarships = (input) => {
  // Return a String of the cost to purchase all ships in the input array
  const totalCost = input.reduce((accumulator, currentValue) => {
    const cost = parseInt(currentValue.cost_in_credits);
    if (!isNaN(cost)) {
      accumulator += cost;
    }
    return accumulator;
  }, 0);

  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// do not modify the code below
let displayAllButton = document.getElementById("all");
displayAllButton.addEventListener("click", () => {
  displayShipComponents(starships);
});

let filterButton = document.getElementById("filter");
filterButton.addEventListener("click", () => {
  const filteredShips = filterStarships(starships);
  displayShipComponents(filteredShips);
});

let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", () => {
  const totalCost = reduceStarships(starships);
  displayText(totalCost);
});

const clearAndReset = () => {
  let app = document.getElementById("results");
  app.remove();
  app = document.createElement("div");
  app.id = "results";
  app.style.display = "flex";
  app.style.flexWrap = "wrap";
  app.style.justifyContent = "center";
  main.append(app);
};

const displayShipComponents = (starships) => {
  clearAndReset();
  let app = document.getElementById("results");
  for (const ship in starships) {
    const shipComponent = createSpaceshipComponent(starships[ship]);
    app.appendChild(shipComponent);
  }
};

const displayText = (text) => {
  clearAndReset();
  let app = document.getElementById("results");
  let paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.style.backgroundColor = "white";
  paragraph.style.borderRadius = "10px";
  paragraph.style.padding = "30px";
  app.appendChild(paragraph);
};

fetchData(url);
