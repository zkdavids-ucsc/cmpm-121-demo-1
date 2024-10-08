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
    counterDiv.innerHTML = count.toString() + " demons";
};

button.addEventListener('click', incrementCounter);