let index = 0;

function changeColors(){

    let colors = ["red" , "orange" , "yellow" , "black" , "blue" , "pink"];

    document.getElementsByTagName("body")[0].style.background = colors [index++];

    if (index > colors.length -1){
        index = 0;

    }
    
};