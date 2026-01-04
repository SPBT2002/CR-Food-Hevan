import React,{useEffect, useMemo, useState} from 'react'
import Item from '../components/Item'
import { useAppContext } from '../context/AppContext'
import Searchinput from '../components/Searchinput'

const Menu = () => {
  const {products, searchQuery} = useAppContext()
  const [category, setCategory] = useState([])
  const [type, settype] = useState([])
  const [selectedSort, setselectedSort] = useState('relevant')
  const [filterProducts, setfilterProducts] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [availableTypes, setavailableTypes] = useState([])
  const itemsPerPage = 8

const allCategories = useMemo(() => 
  ["Curry", "Pizza", "Rice", "Noodles", "Dessert", "Drinks", "Fruits"], [])

// Reusable function to toggle filter values
const toggleFilter = (value, setState) => {
  setState((prev) => 
    prev.includes(value)
      ? prev.filter((item) => item !== value)
      : [...prev, value]
  );
}

// Dynamically update types based on selected categories
useEffect(() => {
  const selectedCat = category.length > 0 ? category : allCategories
  const filteredProds = products.filter((p) => selectedCat.includes(p.category))
  const typeSet = new Set(filteredProds.map(p => p.type))
  const newAvailableTypes = [...typeSet].sort()
  setavailableTypes(newAvailableTypes)

  // Remove unavailable types from selection
  settype(prev => prev.filter(t => typeSet.has(t)))
}, [category, products, allCategories])

  const totalPages = 7

  return (
  <div className='max-padd-container px-0 mt-25'>
    {/* White Header Bar */}
    <div className='bg-white h-20 w-full -mt-20 mb-10'></div>
    {/* CONTAINER */}
      <div className='flex flex-col sm:flex-row gap-6'>
      {/* Filters - Left Side */}
      <div className='min-w-72 bg-white p-4 pl-6 lg:pl-12 rounded-r-xl my-4'>
        <Searchinput />
        <div className='px-4 py-3 mt-2 bg-primary rounded-xl'>
          <h5 className='mb-4'>Sort By Price</h5>
          <select onChange={(e)=> setselectedSort(e.target.value)} className='border border-gray-900/10 outline-none bg-white text-gray-30 text-sm font-medium h-8 w-full px-2 rounded-md'>
            <option value="relevant">Relevant</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className='pl-5 py-3 mt-4 bg-primary rounded-xl'>
          <h5 className='mb-4'>
            Categories
          </h5>
          <div className='flex flex-col gap-2 text-sm font-light'>
            {allCategories.map((cat)=> (
              <label  key={cat} className='flex gap-2 text-sm font-medium text-gray-30'>
                <input onChange={(e)=> toggleFilter(e.target.value, setCategory)} type="checkbox" value={cat} checked={category.includes(cat)} className='w-3' />
                  {cat}
              </label>
            ))}
          </div>
        </div>
        <div className='pl-5 py-3 mt-4 bg-primary rounded-xl'>
          <h5 className='mb-4'>Types</h5>
          <div className='flex flex-col gap-2 text-sm font-light'>
          {availableTypes.map((typ)=> (
          <label key={typ} className="flex gap-2 text-sm font-medium text-gray-30">
            <input onChange={(e)=> toggleFilter(e.target.value, settype)} type="checkbox" value={typ} checked={type.includes(typ)} className='w-3' />
              {typ}
          </label>
          ))}
          </div>
        </div>
      </div>
      {/*Filtered Products - Right Side */}
      <div className='max-sm:px-10 bg-white px-4 rounded-1-xl my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6'>
          {products.length > 0 ? (
            products.map((product)=> (
              <Item key={product.id} product={product} />
            ))
          ) : (
            <p className='capitalize' >No products found for selected filters.</p>
          )}
        </div>
        {/* Pagination */}
<div className='flexCenter flex flex-wrap mt-14 mb-10 gap-4'>
  <button 
    disabled={currentPage === 1} 
    onClick={() => setcurrentPage(prev => prev - 1)} 
    className={`btn-solid py-2 px-5 rounded-full ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}>
    Previous
  </button>
  {Array.from({length: totalPages}, (_, index) => ( 
    <button 
      key={index + 1} 
      onClick={() => setcurrentPage(index + 1)}
      className={`btn-light w-12 h-12 rounded-full flex items-center justify-center ${currentPage === index + 1 && 'bg-solidTwo text-white'}`}>
      {index + 1}
    </button>
  ))}
  <button 
    disabled={currentPage === totalPages} 
    onClick={() => setcurrentPage(prev => prev + 1)} 
    className={`btn-solid py-2 px-5 rounded-full ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}>
    Next
  </button>
</div>
      </div>
    </div>
  </div>
  )
}

export default Menu