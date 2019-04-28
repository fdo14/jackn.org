import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './styles.css'
import {TimelineMax, TweenLite} from "gsap/TweenMax";
import {Elastic} from "gsap/all";
import $ from "jquery";


import TheHive from './img/cards/hive.png';
import Concomp from './img/cards/concomp.png';
import PoliTweet from './img/cards/politweet.png';
import CampusForSale from './img/cards/campus.png';
import SickFit from './img/cards/sickfits.png';
import Survvey from './img/cards/survvey.png';
import Geopins from './img/cards/geopins.png';
import AverageJoes from './img/cards/joes.png';
import DD from './img/cards/dd.png';
import Lissen from './img/cards/lissen.png'
import Skills from './img/cards/skills.png';
import Edu from './img/cards/edu.png';

import Web from './img/language.png';
import GitHub from './img/github.png';
import Dribble from './img/dribble.png';
import Home from './img/house.png';

const cards = [
  Skills,
  Edu,
  Lissen,
  DD,
  AverageJoes,
  PoliTweet,
  CampusForSale,
  Geopins,
  Survvey,
  Concomp,
  SickFit,
  TheHive
]

const dribbleLinks = [
  "",
  "",
  "",
  "https://dribbble.com/shots/6172154-D-D-Health-App",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
]

const webLinks = [
  "",
  "",
  "",
  "https://dd-health-app.herokuapp.com/",
  "https://average-joes-nichols.netlify.com/",
  "",
  "",
  "https://my-react-app.jacknichols404.now.sh/",
  "https://survvey-nichols.herokuapp.com/",
  "http://www.concussioncompetencies.com",
  "https://sickfits-react-prod-nichols.herokuapp.com/",
  "http://www.thehivenet.org/"
]

const githubLinks = [
  "https://github.com/fdo14",
  "https://github.com/fdo14",
  "https://github.com/fdo14/WifiChangerApp",
  "https://github.com/fdo14/dd-health-app",
  "https://github.com/fdo14/average-joes",
  "https://github.com/fdo14/politweet",
  "https://github.com/fdo14/campus-forsale",
  "https://github.com/fdo14/GeoPins",
  "https://github.com/fdo14/Survvey",
  "https://github.com/fdo14/ConcussionCompetencies",
  "https://github.com/fdo14/SickFits",
  "https://github.com/fdo14/TheHive"
]

const onMouseOverGithub = (i) => {
  var tl = new TimelineMax({repeat:-1,repeatDelay:2})
  .to(`#githubCard${i}`, .5, { scaleX:1.5, scaleY:1.5})
  .to(`#githubCard${i}`,0.4,{rotation:10})
  .to(`#githubCard${i}`,7,{rotation:0, ease:Elastic.easeOut.config(0.9,0.1)});
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const renderGlobe = (i) => {
  if(webLinks[i]){
    return(
      <img id={`globe${i}`} src={Web} onClick={() => window.open(webLinks[i])} className="topLink" onMouseEnter={() => onMouseOverGlobe(i)} onMouseLeave={() => onMouseExitGlobe(i)} alt=''/>
    );
  }
}

const renderGitHub = (i) => {
  if(githubLinks[i]){
    return(
      <img id={`githubCard${i}`} src={GitHub} onClick={() => window.open(githubLinks[i])} className="topLinkLeft" onMouseEnter={() => onMouseOverGithub(i)} onMouseLeave={() => onMouseExitGithub(i)} alt=''/>
    );
  }
}

const renderDribble = (i) => {
  if(dribbleLinks[i]){
    return(
      <img id={`dribble${i}`} src={Dribble} onClick={() => window.open(dribbleLinks[i])} className="bottomLinkLeft" onMouseEnter={() => onMouseOverDribble(i)} onMouseLeave={() => onMouseExitDribble(i)} alt=''/>
    );
  }
}

const onMouseOverDribble = (i) => {
  var tl = new TimelineMax({repeat:-1,repeatDelay:2})
  .to(`#dribble${i}`, .5, { scaleX:1.5, scaleY:1.5})
  .to(`#dribble${i}`,0.4,{rotation:10})
  .to(`#dribble${i}`,7,{rotation:0, ease:Elastic.easeOut.config(0.9,0.1)});
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const onMouseExitDribble = (i) => {
  var tl = new TimelineMax()
  .to(`#dribble${i}`, .5, { scaleX:1, scaleY:1})
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const onMouseExitGithub = (i) => {
  var tl = new TimelineMax()
  .to(`#githubCard${i}`, .5, { scaleX:1, scaleY:1})
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const onMouseOverGlobe = (i) => {
  var tl = new TimelineMax({repeat:-1,repeatDelay:2})
  .to(`#globe${i}`, .5, { scaleX:1.5, scaleY:1.5})
  .to(`#globe${i}`,0.4,{rotation:10})
  .to(`#globe${i}`,7,{rotation:0, ease:Elastic.easeOut.config(0.9,0.1)});
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const onMouseExitGlobe = (i) => {
  var tl = new TimelineMax()
  .to(`#globe${i}`, .5, { scaleX:1, scaleY:1})
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const onMouseOverHome = (i) => {
  var tl = new TimelineMax({repeat:-1,repeatDelay:2})
  .to(`#home${i}`, .5, { scaleX:1.5, scaleY:1.5})
  .to(`#home${i}`,0.4,{rotation:10})
  .to(`#home${i}`,7,{rotation:0, ease:Elastic.easeOut.config(0.9,0.1)});
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}

const onMouseExitHome = (i) => {
  var tl = new TimelineMax()
  .to(`#home${i}`, .5, { scaleX:1, scaleY:1})
  setTimeout(function() { //Start the timer
    tl.kill();
  }, 4000)
}


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, y: i * -4, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = (thots) => {
  const renderHome = (i) => {
    return(
      <img id={`home${i}`} src={Home} className="bottomLink"  onClick={zoomOut} onMouseEnter={() => onMouseOverHome(i)} onMouseLeave={() => onMouseExitHome(i)} alt=''/>
    );
  }

  const zoomOut = () => {
    thots.onHomeClick();
    var tl = new TimelineMax();
    tl.to('#svg', 1.2, {attr:{ viewBox:"0 -250 1250 1250"}});
    var folderFront = $('#panel > *');
    TweenLite.to(folderFront, 1.5, {x:0, y:0});
    TweenLite.to('#projects', 1.5, {x:60, y:350});
  }


  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.2 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div className={`cardTopBottom-${i}`} {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} >
        {renderGlobe(i)}
        {renderGitHub(i)}
        {renderHome(i)}
        {renderDribble(i)}
      </animated.div>
    </animated.div>

  ))
}


export default Deck;
