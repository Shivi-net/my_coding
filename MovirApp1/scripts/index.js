//contructor function
function movie_data (m,n,d,r) {
this.movie_poster = m;
this.name=n;
this.date=d;
this.rating=r;

}


// EventListener for button call add_movies() 
let add = document.getElementById('add')
add.addEventListener('click', () => {
    add_movies()
})

//function to be called on clicking on the button

let add_movies = () =>{
    let form =document.getElementById('form')

    let movie_poster = form.movie_poster.value;
    let name = form.name.value;
    let date = form.date.value;
    let rating=form.rating.value;

    let movie_details = new movie_data(movie_poster,name,date,rating)

    let data = JSON.parse(localStorage.getItem('movies')) || []

    data.push(movie_details)

    localStorage.setItem('movies',JSON.stringify(data))

}

let data = JSON.parse(localStorage.getItem('movies'))


//Display data on DOM
let display_data = (data) => {

    let container = document.getElementById('container')
    container.innerHTML=null

   data.forEach(ele => {
    
    let div = document.createElement('div')

    let image = document.createElement('img')
    image.src=ele.movie_poster;

    let name = document.createElement('h3')
    name.innerText=ele.name;

    let date = document.createElement('h4')
    date.innerText=ele.date;

    let rating = document.createElement('h5')
    rating.innerText=ele.rating;

    div.append(image,name,date,rating)
    container.append(div)
   });
}

display_data(data)