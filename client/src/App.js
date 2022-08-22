import Axios from 'axios';
import React, { useState, useEffect } from "react";
//use state --> reactive variable
//use effect --> run code when something changes

import './App.css';
import Offcanvas from './components/Offcanvas';

function App() {
  const [itemname, setitemname] = useState('');
  const [itemid, setitemid] = useState('');
  const [itemprice, setitemprice] = useState('');
  const [itemlist, setitemlist] = useState([]);



  //run code when something changes
  //run when open website
  //run this only once
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then(res => {
      console.log(res.data);
      setitemlist(res.data);
    }).catch(err => {
      console.log("Error 444");
      console.log(err);
    }
    )
  }, [])

  const submitForm = () => {
    alert("Form Submitted");
    Axios.post("http://localhost:3001/api/insert", { itemname: itemname, itemid: itemid, itemprice: itemprice })
    setitemlist([...itemlist, { itemname: itemname, itemid: itemid, itemprice: itemprice }]).catch(err => console.log(err));
    alert("Form Submitte2");

  }

  const DeleteCard = (e) => {
    alert("http://localhost:3001/api/delete/" + e);
    Axios.delete("http://localhost:3001/api/delete/" + e).then(alert("item Deleted")).catch(console.log("Error"));
    // Axios.delete("http://localhost:3001/api/delete", itemid)
    // setitemlist([...itemlist, { itemname: itemname, itemid: itemid, itemprice: itemprice }]).catch(err => console.log(err));



    Axios.get("http://localhost:3001/api/get").then(res => {
      console.log(res.data);
      setitemlist(res.data);
    }).catch(err => {
      console.log("Error 444");
      console.log(err);
    }
    )

  }

  return (
    <div className="App">
      <Offcanvas />

      <div className="container text-center my-5  justify-content-center d-flex">
        <div className="row">
          <div className="col-md-2">
            <h1>ItemName</h1>
            <input className="m-3" type="text" name="movieName" onChange={(e) => { setitemname(e.target.value) }} />
            <h1>ItemID</h1>
            <input className="m-3" type="text" name="review" onChange={(e) => { setitemid(e.target.value) }} />
            <h1>ItemPrice</h1>
            <input className="m-3" type="text" name="review" onChange={(e) => { setitemprice(e.target.value) }} />
            <button onClick={submitForm} type="button" class="btn btn-primary m-5">submit</button>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">



          {itemlist.map(val => {
            return (
              <div className="col-md-3">
                <div className="card m-3">
                  <h5 className="card-title">{val.itemname}</h5>
                  <p className="card-text"> id:{val.itemid}</p>
                  <p className="card-text"> ${val.itemprice}</p>
                  <a href={'#'} class="btn btn-primary" onClick={() => DeleteCard(val.itemid)}>Delete</a>
                </div>
              </div>

            );
          })}

        </div>

      </div>



    </div>
  );
}

export default App;




