import React from 'react'
import './Home.css';
import profileImg from '../../assets/zenitsu1.jpg';


function Home() {
  return (
    <div>
        <section className="home">
    <div className="home-content">
        <h1> Hi, I am Zenitsu Agatsuma </h1>
        <h2> I am a member of the Demon Slayer Corps. </h2>
        <p>  I may come off as a coward who’s constantly panicking and screaming, but there's more to me than meets the eye. Though I’m terrified of demons and often doubt myself, when I fall asleep or lose consciousness, my true strength awakens. I use Thunder Breathing, a powerful sword style that focuses on incredible speed and precision. My signature move, Thunderclap and Flash, is fast enough to take down demons in an instant. I only mastered the first form of Thunder Breathing—but I’ve perfected it to a level that even surprises my enemies. My hair is yellow with orange tips from being struck by lightning, and while I dream of a peaceful life (preferably married to a cute girl), I still fight bravely to protect others. Deep down, I’m proof that even those who are afraid can be heroes too.
             </p>
        <button className="home-btn">Download cv</button>
    </div>
    <div className="home-img">
        <img src ={profileImg} alt=" Salman Khan" />
     </div>
    </section>
</div>
    
  );
}

export default Home