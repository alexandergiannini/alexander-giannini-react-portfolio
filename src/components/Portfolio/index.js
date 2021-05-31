import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
 // const { currentCategory } = props;
  return (
    <section>
      <h1>Portfolio</h1>
      <div className="flex-row">

      <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/7.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://buylocal-3000.herokuapp.com/" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/matt-gross-27/buy-local" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>

        <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/0.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://guarded-ravine-67476.herokuapp.com/" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/alexandergiannini/sports-blog-friends" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>

        <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/1.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://alexreveles.github.io/movie-hunt-app/" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/alexreveles/movie-hunt-app" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>

        <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/2.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://limitless-coast-45003.herokuapp.com/notes" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/alexandergiannini/note-taker-express-11" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>

        <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/3.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://alexandergiannini.github.io/workday-scheduler-05/" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/alexandergiannini/workday-scheduler-05" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>

        <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/4.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://alexandergiannini.github.io/weather-challenge-06/" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/alexandergiannini/weather-challenge-06" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>

        <div className="portfolio-image">
        <img src={require('../../assets/small/commercial/5.jpg').default} className="img-thumbnail mx-1">
        </img>
        <a href="https://alexandergiannini.github.io/javascript-code-quiz/" target="_blank" className="portfolio-image-application-url">Website</a>
        <a href="https://github.com/alexandergiannini/javascript-code-quiz" target="_blank" className="portfolio-image-application-repo">GitHub Repository</a>
        </div>
        
        
        
      </div>
    </section>
  );
}
export default Portfolio;
