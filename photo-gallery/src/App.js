
import React from "react";
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Gallery from "./components/gallery";

function App() {
  const [images,setImages] = React.useState([]);
  React.useEffect(()=>{
    const storedImages = JSON.parse(localStorage.getItem("images"));
    if(storedImages){
    setImages(storedImages)
    }
  },[])

  return (
    <div className="Wrapper">
      <Header/>
      <Form images = {images} setImages={setImages} />
      <Gallery images={images} setImages={setImages} />
    </div>
  );
}

export default App;
