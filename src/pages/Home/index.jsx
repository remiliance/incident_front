import { useEffect } from 'react'
import { useState } from 'react'

export function sum(a,b){
  return a + b
}


function Home() {

  const [data, setData] = useState([])
  useEffect(() => {

   async function callApi() {
     const response = await fetch(`/localhost:8000/tickets/cmdbci_api/`)
     const { data } = await response.json()
     setData(data)
     console.log(data)
   }
   callApi()
 }, [])
  return <div>Page d'accueil 🏡</div>
}

export default Home
