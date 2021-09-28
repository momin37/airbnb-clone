import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className="home">

            <Banner />

            <div className="home__section">
                <Card 
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep"
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Online Experiences" 
                description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes" 
                description="Comfortable private places, with room for fiends or family"
                />


            </div>

            <div className="home__section">
                <Card src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep"
                price = "$130/night"
                />
                <Card src="https://thumbor.forbes.com/thumbor/2000x1009/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cdb058a5218470008b0b00f%2FNobu-Ryokan-Malibu%2F0x0.jpg%3Ffit%3Dscale?im_w=720"
                title="Online Experiences" 
                description="Unique activities we can do together, led by a world of hosts."
                price = "$350/night"
                />
                <Card src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/154669344.jpg?k=f78fbe34ab26efc4865a0517a940daf6e340d7de897873e8d2083caa2a66955d&o=?im_w=720"
                title="Entire homes" 
                description="Comfortable private places, with room for fiends or family"
                price = "$70/night"
                />


            </div>
            
            
            
        </div>
    )
}

export default Home
