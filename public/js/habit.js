import { displayFromDB } from "./display.js";
import { add_habit_toDatabase } from "./addHabit.js";
import { checkboxes } from "./checkbox.js";
import { del_hab } from "./delHabit.js";
import { side_bar_disp, open_sidebar, close_sidebar } from "./sidebar.js";
import { search_habit } from "./search.js";

add_habit_toDatabase();
displayFromDB();
checkboxes();
del_hab();

side_bar_disp();
open_sidebar();
close_sidebar();

search_habit();
