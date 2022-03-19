import React from "react";
import { useState,useEffect } from "react";

export default function Card() {

    const [object,setObject] = useState({});

    useEffect(() => {
        fetch('https://api.covid19api.com/summary').then((response) => {
            return response.json();
        }).then((data) => {
            // setObject(data.Global);
            console.log("Hi I am called")
        })
    })

  return (
    <>
      <div class="row my-5">
        <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "20rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Total Deaths</h3>
              <h3 class="card-text" style={{textShadow : "3px 3px black",textAlign :"center"}}>
              {object.TotalDeaths}
              </h3>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "20rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Total Confirmed</h3>
              <h3 class="card-text" style={{textShadow : "3px 3px black",textAlign :"center"}}>
                {object.TotalConfirmed}
              </h3>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "20rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Total Recovered</h3>
              <h3 class="card-text" style={{textShadow : "3px 3px black",textAlign :"center"}}>
                {object.TotalRecovered}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
      <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "20rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Country</h3>
              <h3 class="card-text" style={{textShadow : "3px 3px black",textAlign :"center"}}>
                Global
              </h3>
            </div>
          </div>
        </div>
        <div class="col-sm-3 mx-auto">
          <div class="card bg-dark" style={{ width: "20rem" }}>
            <div class="card-body text-light">
              <h3 class="card-title" style={{textAlign :"center"}}>Date Updated</h3>
              <h3 class="card-text" style={{textShadow : "3px 3px black",textAlign :"center"}}>
                {object.Date}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
