import { fetcher } from "./fetcher.js";
import { displayFromDB } from "./display.js";
import { side_bar_disp } from "./sidebar.js";
import { URL } from "./url.js";

async function del_hab() {
  let hbox = document.querySelector(".habits-boxes .container ");
  let anchor_tags = document.querySelector(".anchor-tags");
  let habit_arr_fromDB = await fetcher();

  hbox.addEventListener("click", async (e) => {
    if (!isNaN(parseInt(e.target.id))) {
      let del_id = e.target.id;
      let del_obj = habit_arr_fromDB.find((obj) => obj._id === del_id);
      const del_con = confirm(`Are you sure to delete ${del_obj["hab_name"]}?`);
      if (del_con) {
        let box_id = del_id;

        const options = {
          method: "DELETE",
        };
        const url = URL + `/${box_id}`;

        const response = await fetch(url, options);

        hbox.innerHTML = "";

        displayFromDB();

        anchor_tags.innerHTML = "";
        side_bar_disp();
      }
    }
  });
}

export { del_hab };
