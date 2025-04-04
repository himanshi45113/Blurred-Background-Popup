const containerE1 = document.querySelector(".container");

const btnE1 = document.querySelector(".btn");

const popupContainerE1 = document.querySelector(".popup-container");

const iconE1 = document.querySelector(".icon");


btnE1.addEventListener("click", () => {
containerE1.classList.add("active");
popupContainerE1.classList.remove("active");
});

iconE1.addEventListener("click", () => {
containerE1.classList.remove("active");
popupContainerE1.classList.add("active");

})