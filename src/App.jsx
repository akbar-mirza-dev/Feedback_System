
import { useEffect, useState } from "react"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import HeartLoader from "./components/HeartLoader";

export default function App() {

  const [loading,setLoading] = useState(true)

useEffect(()=>{

setTimeout(()=>{
setLoading(false)
},2500)

},[])

if(loading){
return <HeartLoader/>
}


  return (
    <>
    <Header />
     <Home />
    <Footer />
    </>
    
  );
}