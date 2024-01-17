import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import JuicePage from './Pages/JuicePage';
import StrainPage from './Pages/StrainPage';
import HomePage from './Pages/HomePage'
import Header from './Components/Header';
import ErrorPage from './Pages/ErrorPage';
import StorePage from './Pages/StorePage';
import ShoppingCart from './Pages/ShoppingCart'



function App() {

  const [juices, setJuices] = useState([])
  const [strains, setStrains] = useState([])
  const [stores, setStores] = useState([])
  const [searchText, setSearchText] = useState('')


  //console.log(juices) Debugging:Pass (DB.Json data in running on server)

  useEffect(()=>{
      fetch('http://localhost:3000/juices')
      .then(res => res.json())
      .then(juiceData =>{
        setJuices(juiceData)
      })
    }, [])

  useEffect(()=>{
    fetch('http://localhost:3000/strains')
    .then(res => res.json())
    .then(strainData =>{
      setStrains(strainData)
    })
  },[])

  useEffect(()=>{
    fetch('http://localhost:3000/stores')
    .then(res => res.json())
    .then(storeData =>{
      setStores(storeData)
    })
  },[])
 



    // SEARCH BAR //
    function updateSearchText (event){
      setSearchText(event.target.value)
    }

    //FILTERING JUICES (NAME, COLLAB,FLAVOR) //
    const juiceFilter = juices.filter((juice)=>{
      return juice.name.toLowerCase().includes(searchText.toLowerCase()) || juice.collab.toLowerCase().includes(searchText.toLowerCase()) || juice.flavor.toLowerCase().includes(searchText.toLowerCase()) || juice.price.toLowerCase().includes(searchText.toLowerCase())
    })

    //FILTERING STRAINS (NAME, TYPE, AROMA, TASTE, THC LVL)//
    const strainFilter = strains.filter((strain)=>{
      return strain.name.toLowerCase().includes(searchText.toLowerCase()) || strain.type.toLowerCase().includes(searchText.toLowerCase()) || strain.aroma.toLowerCase().includes(searchText.toLowerCase()) || strain.taste.toLowerCase().includes(searchText.toLowerCase()) || strain.thc_level.toLowerCase().includes(searchText.toLowerCase())
    })
    //FILTERING STORE (NAME &. BOROUGH)//
    const storeFilter = stores.filter((store)=>{
      return store.name.toLowerCase().includes(searchText.toLowerCase()) || store.borough.toLowerCase().includes(searchText.toLowerCase()) || store.zipCode.toLowerCase().includes(searchText.toLowerCase())
    })
    
    const routes = [
      {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/juicepage",
        element: <>
        <JuicePage juices={juiceFilter} setJuices={setJuices} updateSearchText={updateSearchText}/>
        </>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/strainpage",
        element: <>
        <StrainPage strains={strainFilter} setStrains={setStrains} updateSearchText={updateSearchText}/>
        </>,
        errorElement: <ErrorPage/>
      },
      {
        path:"/storepage",
        element:<>
        <StorePage stores={storeFilter} updateSearchText={updateSearchText}/>
        </>,
        errorElement: <ErrorPage/>
      },{
        path:"/ShoppingCart",
        element:<>
        <ShoppingCart/>
        </>,
        errorElement: <ErrorPage/>
      }

    ]
    
    const router = createBrowserRouter(routes)

    return (
      <>
      <div className="app">
        <header>
         <Header />
         <RouterProvider router={router} />
        
        </header>
       
      </div>
      </>
    );
}

export default App;

