
/*-------------------------  images gallery code start  ----------------------------*/

fetch('https://pixabay.com/api/?key=26113932-b0ab5a2c2513e8edee2347b2f&q=food&image_type=photo')
.then(Response=>Response.json())
.then(data=>images_gallery(data.hits))

const images_gallery=data=>{
    document.getElementById('error-massage').innerText=''
    const parent=document.getElementById('images-gallery')
    data.forEach(image=>{
        const div=document.createElement('div');
        div.innerHTML=`
            <div class='w-100 h-100'>
            <img src='${image.largeImageURL}' class='w-100 h-100'>
            </div>
        `
        parent.appendChild(div)
        
    });
}

/*-------------------------  images gallery code ends  ----------------------------*/





/*-------------------------  search img gallery code ends  ----------------------------*/

document.getElementById('search-input').addEventListener('keypress', (event)=>{
    if(event.key=='Enter'){
       const search= document.getElementById('search-input').value;
       searchValue(search)
       document.getElementById('search-input').value=''
    }
})


const searchValue=(value)=>{

    if(value==''){
      document.getElementById('error-massage').innerText=`You didn't write anything. Please search by typing something`;
      const parent=document.getElementById('images-gallery')
      parent.textContent=''
        return;
    }

    const url=`https://pixabay.com/api/?key=26113932-b0ab5a2c2513e8edee2347b2f&q=${value}&image_type=photo`
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>search_data(data.hits))

}

const search_data=(images)=>{
    
    if(images.length==0){
        document.getElementById('error-massage').innerText=`Sorry, some of these names were not found`;
        const parent=document.getElementById('images-gallery')
        parent.textContent=''
        return;
    }
    document.getElementById('error-massage').innerText=''
    const parent=document.getElementById('images-gallery')
    parent.textContent=''
    images.forEach(image=>{
        const div=document.createElement('div');
        div.innerHTML=`
            <div class='w-100 h-100'>
            <img src='${image.largeImageURL}' class='w-100 h-100'>
            </div>
        `
        parent.appendChild(div)
        
    });
}
