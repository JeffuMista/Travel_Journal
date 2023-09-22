import React from "react"
import './App.css'
import NavBar from './Nav'
import Card from './card'
import data from './data'

const Cards = data.map(item => {
  return <Card 
  key={item.id}
  {...item}
  />
})
export default function App() {
  return (
    <div className="App">
        <NavBar />
        {Cards}
    </div>
  )
  };