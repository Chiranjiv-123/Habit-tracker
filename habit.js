let habits = ["Read a Book", "going for walk"];
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let hab_obj = {
  // 1:{
  //     hab_name:'Read a Book',
  //     date_day:[false,false,false,false,false,false,false],
  //     start_date:'2024-04-02'
  // },
  // 2:{
  //     hab_name:'Going for walk',
  //     date_day:[false,false,false,false,false,false,false],
  //     start_date:'2024-03-02',
  // }
};
let search_obj = {
  // 1:{
  //     hab_name:'habit',
  //     uska_anchor:`<a href = #box1></a>`
  // }
};
let hab_arr = [];
// disp_habits(habits)
// new_display();
function add_habit() {
  let hbox = document.querySelector(".habits-boxes .container ");
  let add_but = document.querySelector(".add-habit button");
  let anchor_tags = document.querySelector(".anchor-tags");

  // console.log()
  // let habits = []
  add_but.addEventListener("click", () => {
    let hab_inp = document.querySelector(".second-line div input");
    // console.log(hab_inp.value)
    if (hab_inp.value === "") {
      alert("Please Enter an Habit...");
    } else {
      let habit_length = Object.keys(hab_obj).length + 1;
      habits.push(hab_inp.value);
      let hab_val = hab_inp.value;
      hab_obj[habit_length] = {
        hab_name: hab_val,
        date_day: [false, false, false, false, false, false, false],
        date_arr: make_date_arr(),
      };
      hab_inp.value = "";
      // console.log(habits)
      // let weekly_dates = tomorrow_date_day(hab_obj['start_date'],[])
      // date_arr=[]

      // console.log(weekly_dates)
      hbox.innerHTML = "";
      anchor_tags.innerHTML = "";
      // disp_habits(habits);
      new_display();
      side_bar_disp();
      // del_hab()
    }
    //  console.log(habits)
  });
  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "enter") {
      let hab_inp = document.querySelector(".second-line div input");
      // console.log(hab_inp.value)
      if (hab_inp.value === "") {
        alert("Please Enter an Habit...");
      } else {
        let habit_length = Object.keys(hab_obj).length + 1;
        habits.push(hab_inp.value);
        let hab_val = hab_inp.value;
        hab_obj[habit_length] = {
          hab_name: hab_val,
          date_day: [false, false, false, false, false, false, false],
          date_arr: make_date_arr(),
        };
        hab_inp.value = "";
        // console.log(habits)
        // let weekly_dates = tomorrow_date_day(hab_obj['start_date'],[])
        // date_arr=[]

        // console.log(weekly_dates)
        hbox.innerHTML = "";
        anchor_tags.innerHTML = "";

        // disp_habits(habits);
        new_display();
        side_bar_disp();

        // del_hab()
      }
    }
  });
}

function todays_date() {
  let d = new Date();
  let date =
    String(d.getDate()).length == 1
      ? String(d.getDate()).padStart("2", "0")
      : String(d.getDate());
  let month =
    String(d.getMonth() + 1).length == 1
      ? String(d.getMonth() + 1).padStart("2", "0")
      : String(d.getMonth() + 1);
  let fyear = d.getFullYear();
  return `${fyear}-${month}-${date}`;
}

function make_date_arr() {
  let first_date = todays_date();
  let d = new Date(first_date);
  let date_arr = [];
  date_arr.push(first_date);
  for (let i = 0; i < 7; i++) {
    // date_arr.push(date)
    // Adding one date to the present date
    d.setDate(d.getDate() + 1);

    let yyyy = d.getFullYear();
    let mm = String(d.getMonth() + 1);
    let dd = String(d.getDate());

    // Adding leading 0 if the day or month
    // is one digit value
    mm = mm.length == 1 ? mm.padStart("2", "0") : mm;
    dd = dd.length == 1 ? dd.padStart("2", "0") : dd;

    // Printing the present date
    date_arr.push(`${yyyy}-${mm}-${dd}`);
  }
  return date_arr;
}
function getdate(date) {
  //'yyyy-mm-dd'
  let d = new Date(date);
  return d.getDate();
}
function getday(date) {
  //'yyyy-mm-dd'
  let d = new Date(date);
  return days[d.getDay()];
}
function new_display() {
  let hbox = document.querySelector(".habits-boxes .container ");
  for (let i in hab_obj) {
    hbox.innerHTML += `    <div class="habit-box" id=box${
      Object.keys(hab_obj).length + 1 - i
    } >
                <div class="first-row">
                    <div>
                        <span class="habit">${
                          hab_obj[Object.keys(hab_obj).length + 1 - i][
                            "hab_name"
                          ]
                        }</span> 
                        <span class="weekly">weekly</span>
                    </div>
                    
                    <div class="delete-hab" id=${
                      Object.keys(hab_obj).length + 1 - i
                    }><img id=${
      Object.keys(hab_obj).length + 1 - i
    } src="photos/delete_icon.svg" alt=""></div>
                </div>
                <div class="dates">
                    <div class="grid-container">
                        <div class="date_check">
                            <div  class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][0]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][0]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input  ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][0]
                                    ? "checked"
                                    : ""
                                } type="checkbox"  id="_checkbox-0${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-0${
                                  Object.keys(hab_obj).length + 1 - i
                                }">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][1]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][1]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input  ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][1]
                                    ? "checked"
                                    : ""
                                } type="checkbox" id="_checkbox-1${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-1${
                                  Object.keys(hab_obj).length + 1 - i
                                }">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][2]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][2]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input  ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][2]
                                    ? "checked"
                                    : ""
                                } type="checkbox" id="_checkbox-2${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-2${
                                  Object.keys(hab_obj).length + 1 - i
                                }">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][3]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][3]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][3]
                                    ? "checked"
                                    : ""
                                } type="checkbox" id="_checkbox-3${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-3${
                                  Object.keys(hab_obj).length + 1 - i
                                }">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][4]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][4]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][4]
                                    ? "checked"
                                    : ""
                                } type="checkbox" id="_checkbox-4${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-4${
                                  Object.keys(hab_obj).length + 1 - i
                                }">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][5]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][5]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][5]
                                    ? "checked"
                                    : ""
                                } type="checkbox" id="_checkbox-5${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-5${
                                  Object.keys(hab_obj).length + 1 - i
                                }">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][6]
                                )}</span>
                                <span class="day">${getday(
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_arr"
                                  ][6]
                                )}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input ${
                                  hab_obj[Object.keys(hab_obj).length + 1 - i][
                                    "date_day"
                                  ][6]
                                    ? "checked"
                                    : ""
                                } type="checkbox" id="_checkbox-6${
      Object.keys(hab_obj).length + 1 - i
    }">
                                <label for="_checkbox-6${
                                  Object.keys(hab_obj).length + 1 - i
                                }" >
                                    <div class="tick_mark" ></div>
                                </label>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
`;
  }
}
function side_bar_disp() {
  let anchor_tags = document.querySelector(".anchor-tags");
  // for(let i in hab_obj){
  // }
  for (let i in hab_obj) {
    // anchor_ele = `<a href="#box${i}" data-close="close" class>${i} . ${hab_obj[i]['hab_name']} </a>`
    // anchor_tags.innerHTML+=anchor_ele

    let anchor = document.createElement("a");
    anchor.setAttribute("href", `#box${i}`);
    anchor.setAttribute("data-close", `close`);
    anchor.textContent = `${hab_obj[i]["hab_name"]}`;
    anchor_tags.append(anchor);
    let newhab = { habs_name: hab_obj[i]["hab_name"], ele: anchor };
    hab_arr.push(newhab);
  }
}
function open_sidebar() {
  let m_box = document.querySelector("nav");
  let s_box = document.querySelector(".side-bar");
  m_box.addEventListener("click", (e) => {
    if (e.target.dataset.open === "open") {
      setTimeout(() => {
        s_box.style.display = "block";
      }, 100);
      s_box.style.animationName = "slideIn";
      s_box.style.animationDuration = "1s";
      // s_box.style.backdropFilter = 'blur(50%)';
    }
  });
}
open_sidebar();
function close_sidebar() {
  let s_box = document.querySelector(".side-bar");
  s_box.addEventListener(
    "click",
    (e) => {
      console.log(e.target.dataset.close);
      if (e.target.dataset.close === "close") {
        s_box.style.animationName = "slideOut";
        s_box.style.animationDuration = "1s";
        setTimeout(() => {
          s_box.style.display = "none";
        }, 500);
      }
    },
    true
  );
}
close_sidebar();
function search_habit() {
  Object.keys(hab_obj).forEach((k) => {
    hab_arr.push(hab_obj[k]["hab_name"]);
  });
  let search = document.querySelector(".search-inp");
  search.addEventListener("input", (e) => {
    // console.log(e.target.value)
    let search_val = e.target.value.toLowerCase();
    console.log("---------------");
    hab_arr.forEach((habs) => {
      const isVisible = habs.habs_name.toLowerCase().includes(search_val);
      habs.ele.classList.toggle("hide", !isVisible);
    });
  });
}
search_habit();
function checkboxes() {
  let hbox = document.querySelector(".habits-boxes .container ");
  hbox.addEventListener(
    "click",
    (e) => {
      // console.log(e.target.id , e.target.checked)
      if (e.target.id.slice(0, 9) === "_checkbox") {
        // console.log(`box${e.target.id.slice(10,e.target.id.length)}`)
        console.log(`${e.target.id.slice(10, 11)}`);
        if (e.target.checked) {
          let box_id = e.target.id.slice(11, e.target.id.length);
          let checkbox_no = e.target.id.slice(10, 11);
          hab_obj[box_id]["date_day"][checkbox_no] = true;
        } else {
          let box_id = e.target.id.slice(11, e.target.id.length);
          let checkbox_no = e.target.id.slice(10, 11);
          hab_obj[box_id]["date_day"][checkbox_no] = false;
        }
        console.log(hab_obj);
      }
    },
    true
  );
}
checkboxes();
// function add_habit2(){
//     let hbox = document.querySelector(".habits-boxes .container ");
//     let add_but = document.querySelector(".add-habit button");

//     const new_habits = document.createElement('div');
//     new_habits.className = "habit-box";

// }
function del_hab() {
  let hbox = document.querySelector(".habits-boxes .container ");
  let anchor_tags = document.querySelector(".anchor-tags");
  hbox.addEventListener("click", (e) => {
    // console.log(e.target.id)
    if (!isNaN(parseInt(e.target.id))) {
      let del_id = e.target.id;
      const del_con = confirm(
        `Are you sure to delete ${hab_obj[del_id]["hab_name"]}?`
      );
      if (del_con) {
        console.log(del_id);
        let box_no = parseInt(del_id);
        delete hab_obj[box_no];
        // habits.splice(box_no,1);
        // console.log(habits)
        let dupli_obj = {};
        Object.keys(hab_obj).forEach((k, index) => {
          dupli_obj[index + 1] = hab_obj[k];
        });
        hab_obj = dupli_obj;
        console.log(hab_obj);
        hbox.innerHTML = "";

        // disp_habits(habits)
        new_display();
        anchor_tags.innerHTML = "";
        side_bar_disp();
      }
      // else{
      //     hbox.innerHTML=''
      //     new_display();
      // }
    }
  });
  // document.querySelectorAll('.delete-hab').forEach((item)=>{
  //     console.log(item)
  //     item.addEventListener('click',(e)=>{
  //         let del_id = e.target.id;
  //         console.log(del_id);
  //         let box_no = parseInt(del_id);
  //         habits.splice(box_no,1);
  //         // let deleted = delete habits[box_no]
  //         console.log(habits)
  //         hbox.innerHTML=''
  //         disp_habits(habits)
  //         // del_hab()
  //     })
  // })
}
// console.log(del_but)
del_hab();
// let del_but = document.querySelector('.delete-hab');
// del_but.addEventListener('click',(e)=>{

// })

add_habit();
// del_hab()
// del_hab()
