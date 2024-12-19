

import React, {useState} from 'react'

import Banner from '../compntes/Banner'
import Collections from '../compntes/Collections'

import Footer from '../compntes/Footer'
import Top from '../compntes/Top'

import { Gents, Ladies } from '../compntes/data'
import WomanCollections from '../compntes/WomanCollections'
const MainPage = () => {


  const [genstFashion, setGentsFashion] = useState(Gents)
  const [ladiesFashion, setLadiesFashion] = useState(Ladies)
  
  

  return (
    <div>
      <Top />
      <Banner />
      <Collections genstFashion= {genstFashion}/>
      <WomanCollections ladiesFashion= {ladiesFashion}/>
      <Footer />
      
      
    </div>
  )
}

export default MainPage
