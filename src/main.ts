import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Game Title";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const buttonText = "Click Here👹";

const button = document.createElement("button");
button.innerHTML = buttonText;
app.append(button);

let count: number = 0;
const counterDiv = document.createElement("h2");
counterDiv.innerHTML = count.toString() + " demons";
app.append(counterDiv);

const incrementClick = (): void => {
  count += 1;
  counterDiv.innerHTML = count.toFixed(2) + " demons";
  upgrade1.disabled = count < 10;
  upgrade2.disabled = count < 100;
  upgrade3.disabled = count < 1000;
};

button.addEventListener("click", incrementClick);

let zero = performance.now();
let upgradeValue = 0;

function increment() {
  const value = ((performance.now() - zero) / 1000) * upgradeValue;
  count += value;
  counterDiv.innerHTML = count.toFixed(2) + " demons";
  zero = performance.now();
  upgrade1.disabled = count < 10;
  upgrade2.disabled = count < 100;
  upgrade3.disabled = count < 1000;
}
requestAnimationFrame(increment);
setInterval(increment, (performance.now() - zero) / 1000);

const upgrade1 = document.createElement("button");
upgrade1.innerHTML = "Upgrade (S)";

const upgrade2 = document.createElement("button");
upgrade2.innerHTML = "Upgrade (M)";

const upgrade3 = document.createElement("button");
upgrade3.innerHTML = "Upgrade (L)";

let numUpgrade1 = 0;
let numUpgrade2 = 0;
let numUpgrade3 = 0;
upgrade1.disabled = count < 10;
upgrade2.disabled = count < 100;
upgrade3.disabled = count < 1000;

app.append(upgrade1, upgrade2, upgrade3);

const upgradeCounter1 = (): void => {
  count -= 10;
  upgradeValue += 0.1;
  numUpgrade1 += 1;
  growthRate.innerHTML = upgradeValue.toString() + " demons/sec";
  numUpgrades.innerHTML =
    "S: " +
    numUpgrade1.toString() +
    " M: " +
    numUpgrade2.toString() +
    " L: " +
    numUpgrade3.toString();
  upgrade1.disabled = count < 10;
  upgrade2.disabled = count < 100;
  upgrade3.disabled = count < 1000;
};

upgrade1.addEventListener("click", upgradeCounter1);

const upgradeCounter2 = (): void => {
  count -= 100;
  upgradeValue += 2;
  numUpgrade2 += 1;
  numUpgrades.innerHTML =
    "S: " +
    numUpgrade1.toString() +
    " M: " +
    numUpgrade2.toString() +
    " L: " +
    numUpgrade3.toString();
  growthRate.innerHTML = upgradeValue.toString() + " demons/sec";
  upgrade1.disabled = count < 10;
  upgrade2.disabled = count < 100;
  upgrade3.disabled = count < 1000;
};

upgrade2.addEventListener("click", upgradeCounter2);

const upgradeCounter3 = (): void => {
  count -= 1000;
  upgradeValue += 50;
  numUpgrade3 += 1;
  growthRate.innerHTML = upgradeValue.toString() + " demons/sec";
  numUpgrades.innerHTML =
    "S: " +
    numUpgrade1.toString() +
    " M: " +
    numUpgrade2.toString() +
    " L: " +
    numUpgrade3.toString();
  upgrade1.disabled = count < 10;
  upgrade2.disabled = count < 100;
  upgrade3.disabled = count < 1000;
};

upgrade3.addEventListener("click", upgradeCounter3);

const numUpgrades = document.createElement("h2");
numUpgrades.innerHTML =
  "S: " +
  numUpgrade1.toString() +
  " M: " +
  numUpgrade2.toString() +
  " L: " +
  numUpgrade3.toString();
app.append(numUpgrades);

const growthRate = document.createElement("h2");
growthRate.innerHTML = upgradeValue.toString() + " demons/sec";
app.append(growthRate);