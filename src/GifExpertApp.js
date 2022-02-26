import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
// import PropTypes from 'prop-types'




const GifExpertApp = props => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([]);
    
    // const handleAdd = () =>{
    //     setCategories([...categories, 'HULK'])
    //     setCategories( c => [...c, 'HULK'])
    // }

  return (
      <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories = {setCategories}/>
    <hr />

    <ol>
        {
            categories.map((e) => <GifGrid key = {e} category = {e}/>)
        }
    </ol>

    </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp