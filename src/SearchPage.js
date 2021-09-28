import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 august to 30 august . 2 guests.</p>

                <h1>Stays nearby</h1>

                <Button variant="outlined" >Cancellation Flexibility</Button>
                <Button variant="outlined" >Type of place</Button>
                <Button variant="outlined" >Price</Button>
                <Button variant="outlined" >Rooms and beds</Button>
                <Button variant="outlined" >More filters</Button>


            </div>

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5vshared bthrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"

            />

            <SearchResult
                img="https://www.pavillon-monceau.com/files/hotel/pavillon-monceau/chambres/chambre_standard_.jpg"    
                location="Independent luxury studio appartment"
                title="5 Star Luxury Apartment"
                description="2 guest . 3 bedroom . 1 bed . 1.5 shared bthrooms . Wifi . Kitchen"
                star={4.3}
                price="$40 / night"
                total="$157 total"

            />

            
            
            <SearchResult
                img="https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="3 guest . 1 bedroom . 1 bed . 1.5 shared bthrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star={3.85}
                price="$90 / night"
                total="$650 total"

            />
       
            
        </div>
    )
}

export default SearchPage


// <SearchResult
// img=""
// location=""
// title=""
// description=""
// star=""
// price=""
// total=""

// />
