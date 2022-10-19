

let add = document.getElementById('add')
add.addEventListener('click', function (){
    add_Image()
})


//step-1 function to accept image
function add_Image(){
    let image = document.getElementById('image').value;

   let x = JSON.parse(localStorage.getItem('images')) || []

   x.push(image)

   localStorage.setItem('images',JSON.stringify(x))
    
}

let start = document.getElementById('start')
start.addEventListener( "click",function (){
    slideshow()
})

function slideshow(){
    let x = JSON.parse(localStorage.getItem('images')) || []

    let container = document.getElementById('container')
    container.innerHTML=null;

    let i=0;

    let picture = document.createElement('img')
    picture.src=x[0];

    container.append(picture)

    let id = setInterval(function (){

        if(i==5){
            i=0;
        }
        console.log(i)

      picture.src=x[i]

      container.append(picture)

        i++;

    }, 2000)

}

