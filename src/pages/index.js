import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="rosie-container">
    <img
    	src={require('../images/Rosie_Pic.png')}
    	alt="Rosie Castro Headshot"
    	className="rosie-image"
	/>

    <p>Rosie Castro was born and raised in San Antonio, Texas. She attended both Little Flower Catholic elementary and high schools, where she was president and valedictorian of her class. She later attended Our Lady of the Lake University where she organized the Young Democrats club.
    </p>

	<p>She was president of the Bexar County Young Democrats, VP of the women’s division of the statewide Young Democrats, and Bexar County party chair of the Raza Unida Party.
	</p>

	<p>Rosie worked for the Mexican American Unity Council (MAUC) and the City of San Antonio, earned a master’s degree from the University of Texas-San Antonio (UTSA), and worked with the San Antonio Housing Authority, HACU and retired as Interim Dean from Palo Alto College.
	</p>

	<p>If you’d like to request her as a speaker, or request her consulting services, feel free to reach out to her on <Link to="https://www.linkedin.com/in/rosie-castro-ab87b17/">LinkedIn</Link> or <Link to="https://twitter.com/castrocountry">Twitter</Link>.
	</p>
  </div>
)

export default IndexPage
