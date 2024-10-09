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

const incrementCounter = (): void => {
  count += 1;
  counterDiv.innerHTML = count.toFixed(2) + " demons";
  upgrade.disabled = count < 10;
};

button.addEventListener("click", incrementCounter);

// setInterval(incrementCounter, 1000);

let zero = performance.now();
let upgradeValue = 0;
function increment() {
  const value = ((performance.now() - zero) / 1000) * upgradeValue;
  count += value;
  counterDiv.innerHTML = count.toFixed(2) + " demons";
  zero = performance.now();
  upgrade.disabled = count < 10;
}
requestAnimationFrame(increment);
setInterval(increment, (performance.now() - zero) / 1000);

const upgrade = document.createElement("button");
upgrade.innerHTML = "Upgrade";
app.append(upgrade);
upgrade.disabled = count < 10;

const upgradeCounter = (): void => {
  count -= 10;
  upgradeValue += 1;
  upgrade.disabled = count < 10;
};

upgrade.addEventListener("click", upgradeCounter);
