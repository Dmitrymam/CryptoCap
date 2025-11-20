const tabs = Array.from(document.querySelectorAll(".tab-item"));
const tabContent = document.querySelector(".tab-content");
const tabsContent = Array.from(tabContent.querySelectorAll(".tab-pane"));


//     search.addEventListener("change", (e) => {
//       const text = e.target.value;

//       const filterCoinNames = coinNames.filter((item) => {
//         return item.textContent.toLowerCase().includes(text.toLowerCase()) !==
//           true
//           ? item.closest(".tab-content__body-row").classList.add("hidden")
//           : item;
//       });

//       filterCoinNames.forEach((item, index) => {
//         item.closest(
//           ".tab-content__body-cell"
//         ).previousElementSibling.textContent = index + 1;
//       });
//       e.target.value = "";
//     });
//   }
// });

tabs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const activeTab = document.querySelector(".active");
    
    e.currentTarget !== activeTab
      ? e.currentTarget.classList.add("active")
      : null;
    activeTab.classList.remove("active");
    tabsContent.forEach((item) => {
      e.currentTarget.getAttribute("data-tab") == item.getAttribute("id")
        ? item.classList.replace("tab-pane-hidden", "tab-pane-active")
        : item.classList.replace("tab-pane-active", "tab-pane-hidden");
    });
   
    }
  )});

