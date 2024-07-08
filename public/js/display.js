import { getdate, getday } from "./date.js";
import { fetcher } from "./fetcher.js";
async function displayFromDB() {
  const habit_arr_fromDB = await fetcher();

  let hbox = document.querySelector(".habits-boxes .container ");
  for (let i of habit_arr_fromDB.reverse()) {
    hbox.innerHTML += `    <div class="habit-box" id=box${i._id} >
                      <div class="first-row">
                          <div>
                              <span class="habit">${i["hab_name"]}</span>
                              <span class="weekly">weekly</span>
                          </div>
  
                          <div class="delete-hab" id=${i._id}><img id=${
      i._id
    } src="photos/delete_icon.svg" alt=""></div>
                      </div>
                      <div class="dates">
                          <div class="grid-container">
                              ${date_check(i, 0)}
                              ${date_check(i, 1)}
                              ${date_check(i, 2)}
                              ${date_check(i, 3)}
                              ${date_check(i, 4)}
                              ${date_check(i, 5)}
                              ${date_check(i, 6)}
                          </div>
                      </div>
                  </div>
      `;
  }
}

function date_check(i, n) {
  let str = `<div class="date_check">
    <div  class="date_day">
        <span class="date">${getdate(i["date_arr"][n])}</span>
        <span class="day">${getday(i["date_arr"][n])}</span>
    </div>
    <div class="checkbox-wrapper-26">
        <input  ${
          i["date_day"][n] ? "checked" : ""
        } type="checkbox"  id="_checkbox-${n}${i._id}">
        <label for="_checkbox-${n}${i._id}">
            <div class="tick_mark"></div>
        </label>
    </div>
  </div>`;
  return str;
}

export { displayFromDB };
