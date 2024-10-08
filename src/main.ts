import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Game Title";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const buttonText = "Click Here👹";

const butt = document.createElement("button");
butt.innerHTML = buttonText;
app.append(butt);
