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
const button = document.createElement("button");
button.innerHTML = buttonText;
app.append(button);

//counter
let count: number = 0;
const counterDiv = document.createElement("h2");
counterDiv.innerHTML = count.toString() + " units of evil";
app.append(counterDiv);

//upgrades
const upgrade1 = document.createElement("button");
upgrade1.innerHTML = "Goblin <br /> Cost: 10";

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "Ogre <br /> Cost: 100";

const upgrade3 = document.createElement("button");
upgrade3.innerHTML = "Demon <br /> Cost: 1000";

app.append(upgrade1, upgrade2, upgrade3);

let upgradeValue = 0;
let numUpgrade1 = 0;
let numUpgrade2 = 0;
let numUpgrade3 = 0;
let upgradeCost1 = 10;
let upgradeCost2 = 100;
let upgradeCost3 = 1000;
upgrade1.disabled = count < 10;
upgrade2.disabled = count < 100;
upgrade3.disabled = count < 1000;

const numUpgrades = document.createElement("h2");
numUpgrades.innerHTML =
  "Goblins: " +
  numUpgrade1.toString() +
  " - Ogres: " +
  numUpgrade2.toString() +
  " - Demons: " +
  numUpgrade3.toString();
app.append(numUpgrades);

const growthRate = document.createElement("h2");
growthRate.innerHTML = upgradeValue.toString() + " units of evil/sec";
app.append(growthRate);

const incrementClick = (): void => {
  count += 1;
  counterDiv.innerHTML = count.toFixed(2) + " units of evil";
  upgrade1.disabled = count < upgradeCost1;
  upgrade2.disabled = count < upgradeCost2;
  upgrade3.disabled = count < upgradeCost3;
};

button.addEventListener("click", incrementClick);

let zero = performance.now();

function increment() {
  const value = ((performance.now() - zero) / 1000) * upgradeValue;
  count += value;
  counterDiv.innerHTML = count.toFixed(2) + " units of evil";
  zero = performance.now();
  upgrade1.disabled = count < upgradeCost1;
  upgrade2.disabled = count < upgradeCost2;
  upgrade3.disabled = count < upgradeCost3;
}
requestAnimationFrame(increment);
setInterval(increment, (performance.now() - zero) / 1000);

const upgradeCounter1 = (): void => {
  count -= 10;
  upgradeValue += 0.1;
  numUpgrade1 += 1;
  upgradeCost1 *= 1.15;
  upgrade1.innerHTML = "Goblin <br /> Cost: " + upgradeCost1.toFixed(2);
  update();
};

upgrade1.addEventListener("click", upgradeCounter1);

const upgradeCounter2 = (): void => {
  count -= 100;
  upgradeValue += 2;
  numUpgrade2 += 1;
  upgradeCost2 *= 1.15;
  upgrade2.innerHTML = "Ogre <br /> Cost: " + upgradeCost2.toFixed(2);
  update();
};

upgrade2.addEventListener("click", upgradeCounter2);

const upgradeCounter3 = (): void => {
  count -= 1000;
  upgradeValue += 50;
  numUpgrade3 += 1;
  upgradeCost3 *= 1.15;
  upgrade3.innerHTML = "Demon <br /> Cost: " + upgradeCost3.toFixed(2);
  update();
};

upgrade3.addEventListener("click", upgradeCounter3);

function update() {
  growthRate.innerHTML = upgradeValue.toFixed(2) + " units of evil/sec";
  numUpgrades.innerHTML =
    "Goblins: " +
    numUpgrade1.toString() +
    " - Ogres: " +
    numUpgrade2.toString() +
    " - Demons: " +
    numUpgrade3.toString();
  upgrade1.disabled = count < upgradeCost1;
  upgrade2.disabled = count < upgradeCost2;
  upgrade3.disabled = count < upgradeCost3;
}
