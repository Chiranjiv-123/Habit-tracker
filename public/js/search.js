import { fetcher } from "./fetcher.js";
import { hab_arr } from "./sidebar.js";
async function search_habit() {
  // const habit_arr_fromDB = await fetcher();
  // habit_arr_fromDB.forEach((obj) => {
  //   hab_arr.push(obj["hab_name"]);
  // });
  console.log(hab_arr);
  let search = document.querySelector(".search-inp");
  search.addEventListener("input", (e) => {
    let search_val = e.target.value.toLowerCase();
    console.log(search_val);
    console.log(hab_arr);
    hab_arr.forEach((habs) => {
      const isVisible = habs.habs_name.toLowerCase().includes(search_val);
      habs.ele.classList.toggle("hide", !isVisible);
    });
  });
}
export { search_habit };
