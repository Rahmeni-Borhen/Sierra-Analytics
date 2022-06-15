import React from 'react'
import video2 from "../imgs/video2.mp4"
import "./Home.css"

const Home = () => {

return(
  <>
  <div> 
    <video  className='video' autoPlay muted loop>
        <source src={video2} type="video/mp4" />
      </video>
    </div>
    <div class="content">
      <div>
  <h1>Sierra Bravo Intelligence</h1>
  <p>Votre partenaire de <span>développement informatique</span> </p>
  <p>pour la conception de vos logiciels, applications mobiles, web et prestations de conseils.</p>
</div>
</div>
      
  </>
    )
}

export default Home ;
