function search_habit() {
  let search = document.querySelector(".search-inp");
  search.addEventListener("input", (e) => {
    let search_val = e.target.value.toLowerCase();
    hab_arr.forEach((habs) => {
      const isVisible = habs.habs_name.toLowerCase().includes(search_val);
      habs.ele.classList.toggle("hide", !isVisible);
    });
  });
}
export { search_habit };
