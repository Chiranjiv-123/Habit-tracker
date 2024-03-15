let habits = ['Read a Book','going for walk']
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
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
    // disp_habits(habits)
    // new_display();
    function add_habit(){
        let hbox = document.querySelector(".habits-boxes .container ");
        let add_but = document.querySelector(".add-habit button");
        // console.log()
        // let habits = []
        add_but.addEventListener('click',()=>{
            let hab_inp = document.querySelector(".second-line div input")
            // console.log(hab_inp.value)
            if (hab_inp.value===''){
                alert('Please Enter an Habit...')
            }
            else{
                let habit_length = Object.keys(hab_obj).length + 1;
                habits.push(hab_inp.value)
                let hab_val = hab_inp.value
                hab_obj[habit_length] = {hab_name:hab_val,date_day:[false,false,false,false,false,false,false],date_arr:make_date_arr()}
                hab_inp.value = '';
                // console.log(habits)
                // let weekly_dates = tomorrow_date_day(hab_obj['start_date'],[])
                // date_arr=[]

                // console.log(weekly_dates)
                hbox.innerHTML=''
                // disp_habits(habits);
                new_display();
                // del_hab()
            }
            //  console.log(habits)
            
            

        })
        window.addEventListener('keydown',(e)=>{
            if(e.key.toLowerCase() === "enter"){
                let hab_inp = document.querySelector(".second-line div input")
            // console.log(hab_inp.value)
                if (hab_inp.value===''){
                    alert('Please Enter an Habit...')
                }
                else{
                    let habit_length = Object.keys(hab_obj).length + 1;
                    habits.push(hab_inp.value)
                    let hab_val = hab_inp.value
                    hab_obj[habit_length] = {hab_name:hab_val,date_day:[false,false,false,false,false,false,false],date_arr:make_date_arr()}
                    hab_inp.value = '';
                    // console.log(habits)
                    // let weekly_dates = tomorrow_date_day(hab_obj['start_date'],[])
                    // date_arr=[]
    
                    // console.log(weekly_dates)
                    hbox.innerHTML=''
                    // disp_habits(habits);
                    new_display();
                    // del_hab()
                }
            }
        })
    }
    
    
    function todays_date(){
        let d = new Date();
        let date = String(d.getDate()).length==1?String(d.getDate()).padStart('2','0'):String(d.getDate());
        let month = String(d.getMonth()+1).length==1?String(d.getMonth()+1).padStart('2','0'):String(d.getMonth()+1);
        let fyear = d.getFullYear();
        return `${fyear}-${month}-${date}`
    }

    
    function make_date_arr(){
        let first_date = todays_date();
        let d = new Date(first_date);
        let date_arr = []
        date_arr.push(first_date) 
        for(let i = 0;i<7;i++){
            
            // date_arr.push(date)
            // Adding one date to the present date 
            d.setDate(d.getDate() + 1); 
        
            let yyyy = d.getFullYear() 
            let mm = String(d.getMonth() + 1) 
            let dd = String(d.getDate()) 
        
            // Adding leading 0 if the day or month 
            // is one digit value 
            mm = mm.length == 1 ? mm.padStart('2', '0') : mm; 
            dd = dd.length == 1 ? dd.padStart('2', '0') : dd; 
            
            // Printing the present date 
           date_arr.push(`${yyyy}-${mm}-${dd}`);
        }
        return date_arr
    }
    function getdate(date){//'yyyy-mm-dd'
        let d = new Date(date)
        return d.getDate() 

    }
    function getday(date){//'yyyy-mm-dd'
        let d = new Date(date)
        return days[d.getDay()]
    
    }
    function new_display(weekly_dates){
        let hbox = document.querySelector(".habits-boxes .container ");
        for(let i in hab_obj){
            hbox.innerHTML += `    <div class="habit-box" id=box${Object.keys(hab_obj).length+1-i} >
                <div class="first-row">
                    <div>
                        <span class="habit">${hab_obj[Object.keys(hab_obj).length+1-i]['hab_name']}</span> 
                        <span class="weekly">weekly</span>
                    </div>
                    
                    <div class="delete-hab" id=${Object.keys(hab_obj).length+1-i}><img id=${Object.keys(hab_obj).length+1-i} src="photos/delete_icon.svg" alt=""></div>
                </div>
                <div class="dates">
                    <div class="grid-container">
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][0])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][0])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-0${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-0${Object.keys(hab_obj).length+1-i}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][1])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][1])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-1${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-1${Object.keys(hab_obj).length+1-i}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][2])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][2])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-2${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-2${Object.keys(hab_obj).length+1-i}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][3])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][3])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-3${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-3${Object.keys(hab_obj).length+1-i}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][4])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][4])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-4${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-4${Object.keys(hab_obj).length+1-i}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][5])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][5])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-5${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-5${Object.keys(hab_obj).length+1-i}">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">${getdate(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][6])}</span>
                                <span class="day">${getday(hab_obj[Object.keys(hab_obj).length+1-i]['date_arr'][6])}</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-6${Object.keys(hab_obj).length+1-i}">
                                <label for="_checkbox-6${Object.keys(hab_obj).length+1-i}" >
                                    <div class="tick_mark" ></div>
                                </label>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
`
        }
    }
    function checkboxes(){
        let hbox = document.querySelector(".habits-boxes .container ")
        hbox.addEventListener('click',(e)=>{
            // console.log(e.target.id , e.target.checked)
            if(e.target.id.slice(0,9)==='_checkbox' ){
                // console.log(`box${e.target.id.slice(10,e.target.id.length)}`)
                console.log(`${e.target.id.slice(10,11)}`)
                if(e.target.checked){
                    let box_id = e.target.id.slice(11,e.target.id.length);
                    let checkbox_no = e.target.id.slice(10,11)
                    hab_obj[box_id]['date_day'][checkbox_no]=true; 
                }
                else{
                    let box_id = e.target.id.slice(11,e.target.id.length);
                    let checkbox_no = e.target.id.slice(10,11)
                    hab_obj[box_id]['date_day'][checkbox_no]=false;
                }
                console.log(hab_obj)
            }
        },true)
    }
    checkboxes();
    // function add_habit2(){
    //     let hbox = document.querySelector(".habits-boxes .container ");
    //     let add_but = document.querySelector(".add-habit button");
        
    //     const new_habits = document.createElement('div');
    //     new_habits.className = "habit-box";


    // }
    function disp_habits(habits){
        let hbox = document.querySelector(".habits-boxes .container ");
        for (let i = 0;i<habits.length;i++){
                hbox.innerHTML += `    <div class="habit-box" id=${habits.length-1-i} >
                <div class="first-row">
                    <div>
                        <span class="habit">${habits[habits.length-1-i]}</span> 
                        <span class="weekly">weekly</span>
                    </div>
                    
                    <div class="delete-hab" id=${habits.length-1-i}><img id=${habits.length-1-i} src="photos/delete_icon.svg" alt=""></div>
                </div>
                <div class="dates">
                    <div class="grid-container">
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-0">
                                <label for="_checkbox-0">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-1">
                                <label for="_checkbox-1">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-2">
                                <label for="_checkbox-2">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-3">
                                <label for="_checkbox-3">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-4">
                                <label for="_checkbox-4">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26">
                                <input type="checkbox" id="_checkbox-5">
                                <label for="_checkbox-5">
                                    <div class="tick_mark"></div>
                                </label>
                            </div>
                        </div>
                        <div class="date_check">
                            <div class="date_day">
                                <span class="date">14</span>
                                <span class="day">Wed</span>    
                            </div>
                            <div class="checkbox-wrapper-26" >
                                <input type="checkbox" id="_checkbox-6" >
                                <label for="_checkbox-6" >
                                    <div class="tick_mark" ></div>
                                </label>
                            </div>
                        </div>

                        
                        

                    </div>
                </div>
            </div>
`
            }
    }

   
        
    

    function del_hab(){
        let hbox = document.querySelector(".habits-boxes .container ");
        hbox.addEventListener('click',(e)=>{
            // console.log(e.target.id)
            if(!isNaN(parseInt(e.target.id))){
                let del_id = e.target.id;
                const del_con = confirm(`Are you sure to delete ${hab_obj[del_id]['hab_name']}?` )
                if(del_con){
                    console.log(del_id);
                let box_no = parseInt(del_id);
                delete hab_obj[box_no];
                // habits.splice(box_no,1);
                // console.log(habits)
                let dupli_obj = {}
                Object.keys(hab_obj).forEach((k,index)=>{
                    dupli_obj[index+1] = hab_obj[k] 
                })
                hab_obj = dupli_obj
                console.log(hab_obj)
                hbox.innerHTML=''
                // disp_habits(habits)
                new_display();
                }
                // else{
                //     hbox.innerHTML=''
                //     new_display();
                // }
                

            }
            

        }) 
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
    del_hab() 
        // let del_but = document.querySelector('.delete-hab');
        // del_but.addEventListener('click',(e)=>{

            
        // })

    
    
    add_habit()
    // del_hab()
    // del_hab()