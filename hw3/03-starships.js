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
  container.style.padding = "30px 20px";
  container.style.background = "var(--white)";
  container.style.margin = "10px";
  container.style.borderRadius = "10px";
  container.style.flex = "1 1 46%";
  // container.style.width = "50%";

  const namePrice = document.createElement("div");
  namePrice.style.display = "flex";
  namePrice.style.justifyContent = "space-between";
  namePrice.style.fontWeight = "bolder";

  const name = document.createElement("span");
  name.textContent = spaceship.name;
  name.style.flex = "1";

  const credits = document.createElement("span");
  const cost = parseInt(spaceship.cost_in_credits);
  credits.textContent = `${
    !isNaN(cost) ? cost.toLocaleString() : spaceship.cost_in_credits
  } credits`;

  const manufacturer = document.createElement("p");
  manufacturer.style.margin = "0";
  manufacturer.style.padding = "5px 0";
  manufacturer.style.maxWidth = "90%";
  manufacturer.textContent = spaceship.manufacturer;

  const atmSpeedCargoCap = document.createElement("div");
  atmSpeedCargoCap.style.display = "flex";
  atmSpeedCargoCap.style.margin = "15px 0 0";

  const atmSpeed = getElement(
    "Max atmosphering speed",
    spaceship.max_atmosphering_speed
  );

  const cargoCapacity = getElement(
    "Cargo Capacity",
    parseInt(spaceship.cargo_capacity).toLocaleString()
  );
  cargoCapacity.style.borderLeft = "1px solid var(--light-gray)";

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
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.width = "50%";
  element.style.alignItems = "center";
  element.style.padding = "0 10px";
  element.style.textAlign = "center";

  const elementValue = document.createElement("span");
  elementValue.style.fontWeight = "bolder";
  elementValue.textContent = value;

  const elementLabel = document.createElement("span");
  elementLabel.textContent = label;
  elementLabel.style.textAlign = "center";
  elementLabel.style.margin = "0";

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
