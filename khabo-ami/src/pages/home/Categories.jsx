import React from 'react'

const categoryItems = [
    {
        id:1,
        title: "Main Dish",
        des: "(86 dishes)",
        img: "/home/category_section/img1.png"
    },
    {
        id:2,
        title: "Main Dish",
        des: "(86 dishes)",
        img: "/home/category_section/img1.png"
    },
    {
        id:3,
        title: "Main Dish",
        des: "(86 dishes)",
        img: "/home/category_section/img1.png"
    },
    {
        id:4,
        title: "Main Dish",
        des: "(86 dishes)",
        img: "/home/category_section/img1.png"
    },
]

const Categories = () => {
  return (
    <div className='section-container py-16'>
      <div className='text-center'>
        <p className='subtitle'>Customer Favorites</p>
        <h2 className='title'>Popular Categories</h2>
      </div>
      {/* Categories Cards */}
      <div className='flex flex-col sm:flex-row gap-8 justify-around items-center mt-12'>
        {
            categoryItems.map((item, index)=>
                <div key={index} className='shadow-lg rounded-3xl bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                    <div className='flex w-full mx-auto items-center justify-center'>
                        <img src={item.img} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28'/>
                    </div>
                    <div className='mt-5 space-y-1'>
                        <h5>{item.title}</h5>
                        <p>{item.des}</p>
                    </div>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Categories
