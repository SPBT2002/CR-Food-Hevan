import React,{useEffect, useMemo, useState} from 'react'
import Item from '../components/Item'
import { useAppContext } from '../context/AppContext'
import Searchinput from '../components/Searchinput'

const Menu = () => {
  const {products,searchQuery} = useAppContext()
  const [category, setcategory] = useState([])
  const [type, settype] = useState([])
  const [selectedSort, setselectedSort] = useState('relevant')
  const [filterProducts, setfilterProducts] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [availableTypes, setavailableTypes] = useState([])
  const itemsPerPage = 8

const allCategories = useMemo(() => 
  ["Curry", "Pizza", "Rice", "Noodles", "Dessert", "Drinks", "Fruits"], [])

  return (
    <div className='max-padd-container px-0 mt-18'>
      {/* CONTAINER */}
      <div>
      {/* Filters - Left Side */}
      <div>
        <Searchinput />
        <div>
          <h5 className='mb-4'>Sort By Price</h5>
          <select className=''>
            <option value="relevant">Relevant</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <h5 className='mb-4'>
            Categories
          </h5>
          <div>
            {allCategories.map((cat)=> (
              <label  key={cat} className=''>
                <input type="checkbox" value={cat} checked={category.includes(cat)} className='w-3' />
                  {cat}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h5 className='mb-4'>Types</h5>
          <div>
          {availableTypes.map((typ)=> (
          <label key={type} className="">
            <input type="checkbox" value={typ} checked={type.includes(typ)} className='w-3' />
              {typ}
          </label>
          ))}
          </div>
        </div>
      </div>
      {/*Filtered Products - Right Side */}
      <div>
        <div>
          {products.length > 0 ? (
            products.map((product)=> (
              <Item product={product} />
            ))
          ) : (
            <p className='capitalize' >No products found for selected filters.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Menu