var ifDark = false;

function darkModeFunc() {
    const lightBackground = document.querySelector('.darkModeContainer');
    const darkBackground = document.querySelector('.darkModeContainer2');

    if (ifDark){
        ifDark = false;
        lightBackground.classList.remove('hidden');
        var element = document.body;
        element.classList.remove("dark-mode");
    }
    
    else{
        var element = document.body;
        element.classList.toggle("dark-mode");
        lightBackground.classList.add('hidden');
        ifDark = true;
    }
    

}