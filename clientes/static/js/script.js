const inputName = document.querySelector("[data-js='name']");
const colors = document.querySelectorAll("[data-js='btn-color']");
const models = document.querySelectorAll("[data-js='btn-model']");
const logos = document.querySelectorAll("[data-js='btn-logo']");
const card = document.querySelector("[data-js='card']");
const cardBg = document.querySelector("[data-js='card-bg']");

const handleCardName = (e) =>
  (document.querySelector(".card-name").innerText = e.target.value);

const handleCardColor = (e) => {
  const color = e.target.classList[0];
  switch (color) {
    case "color1":
      cardBg.style.background =
        "linear-gradient(71.32deg, #009da8 0%, #17dbfd 100%)";
      break;
    case "color2":
      cardBg.style.background =
        "linear-gradient(71.32deg, #47b3d1 0%, #ec81a1 100%)";
      break;
    case "color3":
      cardBg.style.background =
        "linear-gradient(71.32deg, #434343 0%, #000000 100%)";
      break;
    case "color4":
      cardBg.style.background =
        "linear-gradient(71.32deg, #ff8ba4 0%, #4eaaad 58.45%, #40e9e9 100%)";
      break;
    case "color5":
      cardBg.style.background =
        "linear-gradient(71.32deg, #cc64a4 0%, #f15cb3 51.06%, #f5a6e4 100%)";
      break;
  }

  cardBg.classList.add("card-bg__animation");
  setTimeout(() => {
    card.style.background = cardBg.style.getPropertyValue("background");
    cardBg.classList.remove("card-bg__animation");
  }, 1000 * 0.6);
};

const handleCardTemplate = (e) => {
  const template = e.target.value;
  template === "Vertical"
    ? card.classList.add("vertical")
    : card.classList.remove("vertical");
};

const handleCardLogo = (e) => {
  const logo = e.currentTarget.id;
  logo === "logo2"
    ? card.classList.add("logo2")
    : card.classList.remove("logo2");
};

logos.forEach((logo) => logo.addEventListener("click", handleCardLogo));
models.forEach((model) => model.addEventListener("click", handleCardTemplate));
colors.forEach((color) => color.addEventListener("click", handleCardColor));
inputName.addEventListener("input", handleCardName);
