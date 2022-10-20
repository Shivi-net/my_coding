//step-2
function conFunc(i,n,d,r){
this.image=i;
this.name=n;
this.date=d;
this.rating=r;
}

//step-1 
let add = document.getElementById('add')
add.addEventListener('click' , () =>{
    add_movies();
})

let add_movies = () =>{
    let form = document.getElementById('form')

    let image = form.image.value;
    let name = form.name.value;
    let date = form.date.value;
    let rating = form.rating.value;

    //step-3

    let M = new conFunc(image,name,date,rating)

    let data = JSON.parse(localStorage.getItem('movies_data')) || []

    data.push(M)

    localStorage.setItem('movies_data',JSON.stringify(data))
}

let data = JSON.parse(localStorage.getItem('movies_data'))


let append_data = (data) =>{

    let container = document.getElementById('container')
    container.innerHTML=null;
    data.forEach(ele => {
        
    let div = document.createElement('div')

    let image = document.createElement('img')
    image.src=ele.image;

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

append_data(data)

let sortHL = document.getElementById('sortHL')
sortHL.addEventListener('click', ()=>{
    High_To_Low()
})

let High_To_Low = () => {
    data=data.sort(function (a,b){
        return b.rating - a.rating;
    })
    append_data(data)
}


let sortLH = document.getElementById('sortLH')
sortLH.addEventListener('click', ()=>{
    Low_To_High()
})

let Low_To_High = () =>{
    data=data.sort(function (a,b){
        return a.rating - b.rating;
    })
    append_data(data)
}
