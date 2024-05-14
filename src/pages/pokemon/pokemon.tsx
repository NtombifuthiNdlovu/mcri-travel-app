
import { useEffect } from "react";
import Header from "../../reusables/Header/Header";

const PackingPage = () => {

  useEffect (()=> {
    fetch('http://localhost:3000/pokemon',{
        method: "GET"
    }).then(response=> {
        return response.json();
    }).then(data =>{
        return console.log("data")
    })
  })
  return (
    <>
      <Header />

      <div className="page-content">
        <h1>PackingPage</h1>

        <p>This is an example page. Use this example to create your own pages</p>
      </div>
    </>
  )
}

export default PackingPage;