import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import axios from'axios'

export default function Home() {
  const [search, setSearch] = useState('')
  const [foodItems, setFoodItems] = useState([])
  const [foodCat, setFoodCat] = useState([])

  const loadData = async () => {

    await axios.get(`https://foodzie-server.vercel.app/api/foodData`)
    // await axios.get(`http://localhost:4040/api/foodData`)
    .then(res => {
      console.log(res)
      const response_fooditems = res.data.food_items 
      const response_foodcat = res.data.food_cat
      setFoodItems(response_fooditems)
      setFoodCat(response_foodcat)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <div>
        {' '}
        <Navbar />{' '}
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: 'contain !important' }}
        >
          <div
            className="carousel-inner"
            id="carousel"
            style={{ maxHeight: '500px' }}
          >
            <div className="carousel-caption" style={{ zIndex: '10' }}>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src={'https://source.unsplash.com/random/100×100/?biriyani'}
                style={{ filter: 'brightness(30%)' }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={'https://source.unsplash.com/random/100×100/?dosa'}
                style={{ filter: 'brightness(30%)' }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={'https://source.unsplash.com/random/100×100/?pizza'}
                style={{ filter: 'brightness(30%)' }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {foodCat !== 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-5">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItems !== 0 ? (
                  foodItems
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase()),
                    )
                    .map((filteredData) => {
                      return (
                        <>
                          <div
                            key={filteredData._id}
                            className="col-12 col-md-6 col-lg-3 me-3"
                          >
                            <Card data={filteredData} />
                          </div>
                        </>
                      )
                    })
                ) : (
                  <h1>  something went wrong </h1>
                )}
              </div>
            )
          })
        ) : (
          <h1> something went wrong </h1>
        )}
      </div>
      <div>
        {' '}
        <Footer />{' '}
      </div>
    </>
  )
}
