import React, { useEffect, useState } from 'react';
import Card from '../components/Card';



function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch("https://foodapplicationbackend.onrender.com/api/foodData",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => {
        console.log(data[0], data[1])
        setFoodItem(data[0])
        setFoodCat(data[1])
        console.log(data[0][0].options)
      }
      )

  }, [])


  return (
    <>
       <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    
    <div class="carousel-inner">
        
        <div class="input-group"
        style={{zIndex:'3', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%', width:'100%', maxWidth:'500px'}}
        >
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} class="form-control rounded bg-white text-black p-3" placeholder="Search an Item.." aria-label="Search" aria-describedby="search-addon" />
        </div>

        
        <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" class="d-block w-100 img-fluid" style={{height:'650px',"objectFit": "cover", "filter": "brightness(30%)"}} alt="..." />
            <div class="carousel-caption d-none d-md-block text-white">
            <h5>Order in Minutes</h5>
            <p>Your favorite meals delivered hot and fresh right to your doorstep.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJ1cmdlciUyMHZlY3RvciUyMGltYWdlfGVufDB8fDB8fHww" class="d-block w-100 img-fluid" style={{height:'650px',"objectFit": "cover", "filter": "brightness(30%)"}} alt="..." />
            <div class="carousel-caption d-none d-md-block text-white">
                <h5>Discover Deliciousness</h5>
                <p>Explore a world of flavors with curated dishes from top chefs.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGZvb2R8ZW58MHx8MHx8fDA%3D" class="d-block w-100 img-fluid" style={{"objectFit": "cover", "filter": "brightness(30%)" , height:'650px'}} alt="..." />
            <div class="carousel-caption d-none d-md-block text-white">
                <h5>Tastes that Delight</h5>
                <p>Savor exclusive recipes and daily specials tailored to your taste.</p>
            </div>
        </div>
    </div>

    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

      <div className='container d-flex justify-content-center gap-3 mt-3'>

        {localStorage.getItem('authToken')?
        <div style={{display:'flex', flexDirection:'column'}}>
        
          {foodCat.map((data) => {
            return (
              <>
                <div  style={{display:'flex'}} key={data._id}>
                  <h2>

                   {data.CategoryName} 
                  </h2>
                </div>
                <hr />
                <div style={{ display: 'flex',justifyContent:'center',alignItems:'center', gap: '4px', width: '90vw', flexGrow: '1', flexWrap: 'wrap' }}>
                {foodItem.filter((item) => item.CategoryName === data.CategoryName  && item.name.toLowerCase().includes(search))
                .map(filterItems =>{
                  return(
                  <div key={data._id} >
                    <Card
                     foodItem = {filterItems}
                    options = {filterItems.options[0]}
                    />
                  </div>
                  )
                })}
                </div>

              </>
            )

          })
          }
        </div> : <div> <h1 className='text-warning'>Please Login for Shoping</h1></div>}
      </div>
    </>
  );
}

export default Home;
