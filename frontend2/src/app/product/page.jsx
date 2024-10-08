import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <>
  <div className='w-full h-[500px] flex  gap-7 bg-teal-100 '>
  <details className="dropdown none">
  <summary className="btn m-1 ml-4">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link href='/pricing'>Mi</Link></li>
    <li><a>Mi</a></li>
  </ul>
</details>

<details className="dropdown">
  <summary className="btn m-1 ml-4">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
    <details className="dropdown">
  <summary className="btn m-1 ml-4">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown">
  <summary className="btn m-1 ml-4">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
    <details className="dropdown">
  <summary className="btn m-1 ml-4">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<details className="dropdown">
  <summary className="btn m-1 ml-4">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

      </div>
    </>
  )
}

export default Product