import React from 'react'
import "./HomeMain.css"
import NavBar from "../../Components/NavBar/NavBar"
import PopularCategoriesCard from "../../Components/PopularCategoriesCard/PopularCategoriesCard"
import ItemsCard from "../../Components/ItemsCard/ItemsCard.jsx"
// import  FiSearch from 'react-icons/fi';
import CatForWomen from "../../Assets/cat-for-women.png"
import CatForMen from "../../Assets/cat-for-men..png"
import CatForKids from "../../Assets/cat-for-kids.png"
import CatForAccessories from "../../Assets/cat-for-accessories.png"
import ItemsBg1 from "../../Assets/box-6-bg.png"
import ItemsBg2 from "../../Assets/box-2-bg.png"
import ItemsBg3 from "../../Assets/box-4-bg.png"
import Footer from "../../Components/Footer/Footer"
import { FiSearch } from 'react-icons/fi';


const HomeMain = () => {
  return (
    <div>
      <NavBar />
      <main className="main">
        <h1>Find the best High <br />Quality outfit in one tap</h1>
        <span>We have a wide range of products that serves various Demographic <br />groups and markets. Our product Range are Trendy and always On point</span>

        <form id="home-main-search-form">
          <div>
            <FiSearch className='form-search-icon' />
            <input type="text" placeholder='Try joggers, Polo, T-shirts etc...' className='search-input' />
          </div>
          <button>SEARCH NOW</button>
        </form>
        <div className='achievements'>
          <span>
            <h1>38,942</h1>
            Order Delivered
          </span>
          <span>
            <h1>14,344</h1>
            Registered Customers
          </span>
        </div>
      </main>

      <section className="page-container-lg popular-categories-section">
        <h1>Popular Categories</h1>
        <div className="category-cards mt-4">
          <PopularCategoriesCard backgroundImage={CatForWomen} title="For Women" description="3,495 Products" />
          <PopularCategoriesCard backgroundImage={CatForMen} title="For Men" description="2,847 Products" />
          <PopularCategoriesCard backgroundImage={CatForKids} title="For Kids" description="385 Products" />
          <PopularCategoriesCard backgroundImage={CatForAccessories} title="Accessories" description="2,483 Products" />
        </div>

        <h1 className="top-sales">Top Sales</h1>
        <div className="items-cards">
          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg1} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg2} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg3} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg2} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg3} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg1} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg3} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg1} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg2} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg2} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg3} />

          <ItemsCard
            deletedAmount="USD 9,780"
            price="N6,300"
            title="Top Quality Joggers Pant"
            description="Black With White Stripes"
            bgImage={ItemsBg1} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomeMain