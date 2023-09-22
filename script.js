const navBar = document.createElement("div");
const body = document.querySelector("body");
body.append(navBar);
navBar.style.padding = "10px";
body.style.margin = "0";
navBar.setAttribute("class", "navBar");
navBar.style.backgroundColor = "#3b2f63";
navBar.style.backgroundImage =
  "radial-gradient(ellipse at 0% bottom, rgba(118,72,160,0.7) 0%, rgba(118,72,160,0) 60%),radial-gradient(ellipse at 90% bottom, #523f8c 0%, rgba(82,63,140,0) 40%)";
navBar.style.display = "grid";
navBar.style.gridTemplateColumns =
  "1.5fr 0.8fr 1.1fr 0.7fr 0.7fr 0.7fr 0.9fr 5fr 1fr 0.7fr 0.9fr";

for (let i = 1; i < 12; i++) {
  const gridElements = document.createElement("div");
  gridElements.setAttribute("class", `gridElements${i}`);
  navBar.append(gridElements);
}

const gridElOne = document.querySelector(".gridElements1");
const herokuIcon = document.createElement("img");
herokuIcon.src =
  "https://elements.heroku.com/assets/logo-c23865d5508ad41e5d964c3c786d7116718fe4f405118e46fc15f1ec1ec352df.svg";
gridElOne.append(herokuIcon);

const gridElTwo = document.querySelector(".gridElements2");
const productsA = document.createElement("a");
gridElTwo.append(productsA);
productsA.innerText = "Products";
productsA.style.color = "rgba(242, 238, 255, 0.6)";
productsA.style.opacity = "0.5";
const moreSign = document.createElement("img");
moreSign.src =
  "https://elements.heroku.com/assets/nav-dropdown-caret-ba97e0224fe2bafdae2aafa5baff99d11d70d95e5e774561ee0e00480ab03bf8.svg";
gridElTwo.append(moreSign);
moreSign.style.opacity = "0.5";
gridElTwo.style.alignSelf = "center";
productsA.style.padding = "5px";

const gridElThree = document.querySelector(".gridElements3");
const marketA = document.createElement("a");
gridElThree.append(marketA);
marketA.innerText = "Marketplace";
marketA.style.color = "rgba(242, 238, 255, 0.6)";
marketA.style.opacity = "0.5";
const moreSign2 = document.createElement("img");
moreSign2.src =
  "https://elements.heroku.com/assets/nav-dropdown-caret-ba97e0224fe2bafdae2aafa5baff99d11d70d95e5e774561ee0e00480ab03bf8.svg";
gridElThree.append(moreSign2);
moreSign2.style.opacity = "0.5";
gridElThree.style.alignSelf = "center";
marketA.style.padding = "5px";

const gridElFour = document.querySelector(".gridElements4");
const pricingA = document.createElement("a");
gridElFour.append(pricingA);
pricingA.innerText = "Pricing";
pricingA.style.color = "rgba(242, 238, 255, 0.6)";
pricingA.style.opacity = "0.5";
gridElFour.style.alignSelf = "center";
pricingA.style.padding = "5px";

const gridElFive = document.querySelector(".gridElements5");
const docA = document.createElement("a");
gridElFive.append(docA);
docA.innerText = "Documentation";
docA.style.color = "rgba(242, 238, 255, 0.6)";
docA.style.opacity = "0.5";
gridElFive.style.alignSelf = "center";
docA.style.padding = "5px";

const gridElSix = document.querySelector(".gridElements6");
const supA = document.createElement("a");
gridElSix.append(supA);
supA.innerText = "Support";
supA.style.color = "rgba(242, 238, 255, 0.6)";
supA.style.opacity = "0.5";
gridElSix.style.alignSelf = "center";
supA.style.padding = "5px";

const gridElSeven = document.querySelector(".gridElements7");
const moreA = document.createElement("a");
gridElSeven.append(moreA);
moreA.innerText = "More";
moreA.style.color = "rgba(242, 238, 255, 0.6)";
moreA.style.opacity = "0.5";
const moreSign3 = document.createElement("img");
moreSign3.src =
  "https://elements.heroku.com/assets/nav-dropdown-caret-ba97e0224fe2bafdae2aafa5baff99d11d70d95e5e774561ee0e00480ab03bf8.svg";
gridElSeven.append(moreSign3);
moreSign3.style.opacity = "0.5";
gridElSeven.style.alignSelf = "center";
moreA.style.padding = "5px";

const gridElNine = document.querySelector(".gridElements9");
const input = document.createElement("input");
gridElNine.append(input);
gridElNine.style.alignSelf = "center";
input.style.border = "1px solid transparent";
input.style.borderRadius = "4px";
input.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
input.style.height = "25px";
input.style.marginRight = "14px";
const label = document.createElement("label");
gridElNine.append(label);
label.innerText = "Search Elements";
label.style.color = "white";
label.style.position = "relative";
label.style.top = "-25px";
label.style.left = "15px";

const gridElTen = document.querySelector(".gridElements10");
const logInA = document.createElement("a");
gridElTen.append(logInA);
logInA.innerText = "Log in";
gridElTen.style.alignSelf = "center";
logInA.style.color = "white";
logInA.style.paddingRight = "10px";
const span = document.createElement("span");
gridElTen.append(span);
span.innerText = "or";
span.style.color = "rgba(242, 238, 255, 0.6)";
span.style.opacity = "0.5";

const gridElEleven = document.querySelector(".gridElements11");
const btn = document.createElement("button");
gridElEleven.append(btn);
btn.innerText = "Sign up";
gridElEleven.style.alignSelf = "center";
gridElEleven.style.padding = "6px";
btn.style.borderRadius = "4px";
btn.style.backgroundColor = "#3B2F63";
btn.style.boxShadow = "none";
btn.style.color = "white";
btn.style.padding = "6px 12px";
