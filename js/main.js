function btn_clicked(btn_id){
    alert("This button is currently in progress")
}

function follow_on_insta(){
    window.open("https://www.instagram.com/aarav.kaushik17/","_blank")
}
function open_projects(project_id){
    if(project_id == "Memo_AI"){
        window.open("https://github.com/1234vishalsharma/AI-Assistance","_blank")
    }
    else if(project_id =="paint_app"){
        window.open("https://github.com/1234vishalsharma/DoPaint","_blank")
    }
    else if(project_id == "calc"){
        window.open("https://github.com/1234vishalsharma/Oasis-Infobyte/tree/main/My_calculator","_blank")
    }
    else if(project_id == "e_comm"){
        window.open("https://github.com/1234vishalsharma/E_commerce_APP","_blank")
    }
    else if(project_id=="temp_cnvrt"){
        window.open("https://github.com/1234vishalsharma/Bharat-Intern-Task/tree/main/TempCnvrt","_blank")
    }
    else if(project_id == "TTT"){
        window.open("https://github.com/1234vishalsharma/CodeClause-Internship-Task/tree/main/ZERO_KATA","_blank")
    }
    else if(project_id == "todo"){
        window.open("https://github.com/1234vishalsharma/Oasis-Infobyte/tree/main/Todolist","_blank")
    }
}

function open_platforms(platform_id){
    if(platform_id == "leet_code"){
       
        window.open("https://leetcode.com/yatharthkaushik17/","_blank")
    }
    else if(platform_id == "gfg"){
        window.open("https://auth.geeksforgeeks.org/user/yatharthk8g7p/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user","_blank")
    }
    else if(platform_id == "hrank"){
        window.open("https://www.hackerrank.com/profile/yatharthkaushik1","_blank")
    }
}

function download_resume(){
    // to be implemented
    alert("Press Ok to download resume");
        try{
            window.location.href = "images/resume.jpg";
         }catch(e){}
}

function showMenu(){
    let menu = document.querySelector(".menu_header");
    menu.classList.toggle("show_menu");
}