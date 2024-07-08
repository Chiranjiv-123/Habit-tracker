import { fetcher } from "./fetcher.js";
async function side_bar_disp() {
  let anchor_tags = document.querySelector(".anchor-tags");

  const habit_arr_fromDB = await fetcher();

  for (let i of habit_arr_fromDB) {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", `#box${i._id}`);
    anchor.setAttribute("data-close", `close`);
    anchor.textContent = `${i["hab_name"]}`;
    anchor_tags.append(anchor);
    let newhab = { habs_name: i["hab_name"], ele: anchor };
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

function close_sidebar() {
  let s_box = document.querySelector(".side-bar");
  s_box.addEventListener(
    "click",
    (e) => {
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

export { side_bar_disp, open_sidebar, close_sidebar };
