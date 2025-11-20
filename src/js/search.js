const search = document.getElementById("search");

search.addEventListener("change", (e) => {
  const activeTabContent =
    document.getElementsByClassName("tab-pane-active")[0];
  const coinNames = Array.from(
    activeTabContent.querySelectorAll("[data-name]")
  );
  const text = e.target.value;
  const filterCoinNames = coinNames.filter((item) => {
    return item.textContent.toLowerCase().includes(text.toLowerCase()) !== true
      ? item.closest(".tab-content__body-row").classList.add("hidden")
      : item;
  });
  filterCoinNames.forEach((item, index) => {
    item.closest(".tab-content__body-cell").previousElementSibling.textContent =
      index + 1;
  });
  if (e.target.value == "") {
    const rows = Array.from(
      activeTabContent.querySelectorAll(".tab-content__body-row")
    );
    console.log(rows);
    rows.forEach((item) => {
      item.classList.remove("hidden");
    });
  }
});
