      import React from 'react'
      
      export default function Searchbar() {
        return (
          <div>
            <div id="search-product-wrapper">
               <div id="search-product">
                  <h3 className='search-label'>Search for products &amp; services </h3>
                  <div id="search-area" class="cBFlex cBJcc">
                     <input type="text" id="search-input" placeholder=" Enter product/service name" name="ss" class="ui-autocomplete-input mx-2 search-text" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true" />
                     <button id="searchBtn" onclick="redirectsearch()"><i class="fa fa-search"></i> Search</button>
                  </div>
               </div>
      </div> 
          </div>
        )
      }
      