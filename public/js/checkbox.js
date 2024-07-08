import { fetcher } from "./fetcher.js";
import { URL } from "./url.js";
async function checkboxes() {
  let hbox = document.querySelector(".habits-boxes .container ");
  const habit_arr_fromDB = await fetcher();
  hbox.addEventListener(
    "click",
    async (e) => {
      // console.log(e.target.id , e.target.checked)
      if (e.target.id.slice(0, 9) === "_checkbox") {
        // console.log(`box${e.target.id.slice(10,e.target.id.length)}`)
        // console.log(`${e.target.id.slice(10, 11)}`);
        if (e.target.checked) {
          let box_id = e.target.id.slice(11, e.target.id.length);

          let checkbox_no = parseInt(e.target.id.slice(10, 11));

          let check_obj = habit_arr_fromDB.find((obj) => obj._id === box_id);
          check_obj["date_day"][checkbox_no] = true;

          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(check_obj),
          };
          const url = URL + `/${box_id}`;

          const response = await fetch(url, options);
        } else {
          let box_id = e.target.id.slice(11, e.target.id.length);

          let checkbox_no = parseInt(e.target.id.slice(10, 11));

          let check_obj = habit_arr_fromDB.find((obj) => obj._id === box_id);
          check_obj["date_day"][checkbox_no] = false;

          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(check_obj),
          };
          const url = URL + `/${box_id}`;

          const response = await fetch(url, options);
        }
      }
    },
    true
  );
}

export { checkboxes };
