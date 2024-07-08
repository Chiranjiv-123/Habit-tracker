import { displayFromDB } from "./display.js";
import { make_date_arr } from "./date.js";
import { side_bar_disp } from "./sidebar.js";
import { URL } from "./url.js";
function add_habit_toDatabase() {
  let hbox = document.querySelector(".habits-boxes .container ");
  let add_but = document.querySelector(".add-habit button");
  let anchor_tags = document.querySelector(".anchor-tags");

  add_but.addEventListener("click", async () => {
    let hab_obj_new = {};
    let hab_inp = document.querySelector(".second-line div input");

    if (hab_inp.value === "") {
      alert("Please Enter an Habit...");
    } else {
      let hab_val = hab_inp.value;

      hab_obj_new = {
        hab_name: hab_val,
        date_day: [false, false, false, false, false, false, false],
        date_arr: make_date_arr(),
      };

      hab_inp.value = "";
      hbox.innerHTML = "";
      anchor_tags.innerHTML = "";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hab_obj_new),
      };
      const url = URL;

      const response = await fetch(url, options);

      displayFromDB();
      side_bar_disp();
    }
  });
  window.addEventListener("keydown", async (e) => {
    if (e.key.toLowerCase() === "enter") {
      let hab_obj_new = {};
      let hab_inp = document.querySelector(".second-line div input");

      if (hab_inp.value === "") {
        alert("Please Enter an Habit...");
      } else {
        let hab_val = hab_inp.value;

        hab_obj_new = {
          hab_name: hab_val,
          date_day: [false, false, false, false, false, false, false],
          date_arr: make_date_arr(),
        };

        hab_inp.value = "";

        hbox.innerHTML = "";
        anchor_tags.innerHTML = "";

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hab_obj_new),
        };
        const url = "http://localhost:3000/api/habits";

        const response = await fetch(url, options);

        displayFromDB();
        side_bar_disp();
      }
    }
  });
}

export { add_habit_toDatabase };
