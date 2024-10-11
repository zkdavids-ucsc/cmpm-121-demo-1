import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My Evil Pals";
document.title = gameName;

//header
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

//click button
const buttonText = "Plot Evil👹";
const clickButton = document.createElement("button");
clickButton.innerHTML = buttonText;
app.append(clickButton);

//counter
let count: number = 0;
const counterDiv = document.createElement("h2");
counterDiv.innerHTML = count.toString() + " units of evil";
app.append(counterDiv);

let upgradeValue = 0;

const button = document.createElement("button");

//items
interface Item {
  name: string;
  cost: number;
  rate: number;
  purchased: number;
  button: HTMLButtonElement;
}

const availableItems: Item[] = [
  { name: "Goblin", cost: 10, rate: 0.1, purchased: 0, button },
  { name: "Ogre", cost: 100, rate: 2, purchased: 0, button },
  { name: "Demon", cost: 1000, rate: 50, purchased: 0, button },
];

for (let i = 0; i < availableItems.length; i++) {
  const upgradeButton = document.createElement("button");
  upgradeButton.innerHTML = `${availableItems[i].name} <br />Cost: ${availableItems[i].cost.toFixed(2)}<br />Purchased: ${availableItems[i].purchased}`;
  availableItems[i].button = upgradeButton;
  upgradeButton.onclick = () => {
    count -= availableItems[i].cost;
    upgradeValue += availableItems[i].rate;
    availableItems[i].purchased += 1;
    availableItems[i].cost *= 1.15;
    upgradeButton.innerHTML = `${availableItems[i].name} <br />Cost: ${availableItems[i].cost.toFixed(2)} <br />Purchased: ${availableItems[i].purchased}`;
    update();
  };
  app.append(upgradeButton);
}

const growthRate = document.createElement("h2");
growthRate.innerHTML = upgradeValue.toString() + " units of evil/sec";
app.append(growthRate);

const incrementClick = (): void => {
  count += 1;
  counterDiv.innerHTML = count.toFixed(2) + " units of evil";
  update();
};

clickButton.addEventListener("click", incrementClick);

let zero = performance.now();

function increment() {
  const value = ((performance.now() - zero) / 1000) * upgradeValue;
  count += value;
  counterDiv.innerHTML = count.toFixed(2) + " units of evil";
  zero = performance.now();
  update();
  requestAnimationFrame(increment);
}
requestAnimationFrame(increment);

function update() {
  growthRate.innerHTML = upgradeValue.toFixed(2) + " units of evil/sec";
  for (let i = 0; i < availableItems.length; i++) {
    availableItems[i].button.disabled = count < availableItems[i].cost;
  }
}
