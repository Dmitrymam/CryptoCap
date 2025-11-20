const tabs = Array.from(document.querySelectorAll(".tab-item"));
const tabContent = document.querySelector(".tab-content");
const tabsContent = Array.from(tabContent.querySelectorAll(".tab-pane"));

tabs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const activeTab = document.querySelector(".active");
    e.currentTarget !== activeTab
      ? e.currentTarget.classList.add("active")
      : null;
    activeTab.classList.remove("active");
    console.log(e.currentTarget.getAttribute("data-tab"));
    tabsContent.forEach((item) => {
      e.currentTarget.getAttribute("data-tab") == item.getAttribute("id")
        ? item.classList.replace("tab-pane-hidden", "tab-pane-active")
        : item.classList.replace("tab-pane-active", "tab-pane-hidden");
    });
  });
});
