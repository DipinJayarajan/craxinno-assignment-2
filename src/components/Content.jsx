import React from 'react'
import "./Content.css"
import Bg from "../assets/Bg.png"
import Card1 from "../assets/icon.png"
import Card2 from "../assets/icon(1).png"
import Card3 from "../assets/icon(2).png"

const Content = () => {
  return (
    <div className='content'>
      <div className='container'>
        <img src={Bg} className="picture" alt='bg' />
        <div className='bg-content'>
        <h1 className='helo'>Integrated with Social Media</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id nisl tellus rhoncus, imperdiet consequat ornare. </p>
        <button>
          <span>Learn More</span>
        </button>
        </div>
        <div className='card-container'> 
        <div>
        <div>
        <img src={ Card1} alt="card1" />
        </div>
        <div className='card-body'>
        <p>Facebook</p>
        <span>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis risus dui faucibus eu.</span>
        </div>
        </div>
        </div>

        <div className='card-container2'> 
        <div>
        <div>
        <img src={ Card2} alt="card1" className='card2' />
        </div>
        <div className='card-body'>
        <p>Google</p>
        <span>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis risus dui faucibus eu.</span>
        </div>
        </div>
        </div>

        <div className='card-container3'> 
        <div>
        <div>
        <img src={ Card3} alt="card1" className='card3' />
        </div>
        <div className='card-body'>
        <p>Twitter</p>
        <span>Lorem ipsum dolor sit amet,consectetur adipiscing elit. Duis risus dui faucibus eu.</span>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Content