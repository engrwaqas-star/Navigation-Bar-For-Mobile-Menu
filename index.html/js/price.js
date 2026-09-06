const monthlyBtn = document.querySelector("#monthlyBtn");
const yearlyBtn = document.querySelector("#yearlyBtn");
const prices = document.querySelectorAll(".price");
const periods = document.querySelectorAll(".period");
const billedTexts = document.querySelectorAll(".billed-text");
function showMonthlyPrices() {
    prices.forEach((price) => {
        price.textContent = price.dataset.monthly;
    });
    periods.forEach((period) => {
        period.textContent = "/month";
    });
    billedTexts.forEach((text) => {
        text.textContent = "Billed monthly";
    });
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");
}
function showYearlyPrices() {
    prices.forEach((price) => {
        price.textContent = price.dataset.yearly;
    });
    periods.forEach((period) => {
        period.textContent = "/month";
    });
    billedTexts.forEach((text) => {
        text.textContent = "Billed yearly";
    });
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
}
monthlyBtn.addEventListener("click", () => {
    showMonthlyPrices();
});
yearlyBtn.addEventListener("click", () => {
    showYearlyPrices();
});