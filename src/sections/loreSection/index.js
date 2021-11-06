import React from "react";
import "./style.css";
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../../assets/images/goose.png';

const Index = ({ searchQuery, setSearchQuery })  => {
    const [apiData, setApiData] = useState();
    const [ apiR, setApiR] = useState();

const fetchData = async (e)=>{
        e.preventDefault();
        try{

            const response = await fetch(' https://api.openai.com/v1/engines/babbage/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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',
            },
            body: JSON.stringify({
                "prompt": apiData,
                "temperature": 0.7,
                "max_tokens": 400,
                "top_p": 0.11,
                "frequency_penalty": 1.23,
                "presence_penalty": 1.22
            }),
        });

        const data = await response.json();

            if (data){
                setApiR(data.choices[0].text);
                console.log(data.choices[0].text);
            }
        }catch(e){
            console.log(e.message);
        }
    }

  return (
    <Router>
            <div className="App section-space" id="lore">
            <div class="section-heading container">
          <h2 className="text-center">GoosePunks Lore <br /> 🦢</h2><br />
        </div> 
                <img src={logo} className="App-logo" alt="logo" />
                <br />
    <form  
        action="/"
        method="get"
        autoComplete="on"
        onSubmit={fetchData}
        className="text-center"
    >
        <label htmlFor="header-search">
            <span className="visually-hidden">
                Generate your own GoosePunks' Lore
            </span>
        </label>
        <div class="input-group input-group-lg container">
        <input
            type="text"
            // id="header-search"
            placeholder="Create ur GoosePunks' Lore"
            class="form-control"
            autoComplete="on"
            aria-label="Large" 
            value={apiData}
            onChange={(e) => setApiData(e.target.value)}
        />
        <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="submit" value="send" data-toggle="modal" data-target="#exampleModal">Create 🦢</button>
        </div>
        </div>
    </form>
    {/* Modal */}
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">GoosePunks' Lore</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                {/* {apiR} */}
                <h5>
                {apiR ? apiR : "loading..."}
                </h5>
      </div>
      <div class="modal-footer"> 
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
    
            </div>
        </Router>
);
  };

export default Index;
