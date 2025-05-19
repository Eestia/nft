import './cards.css'
import image from "../../../public/images/image-equilibrium.jpg"
import image2 from "../../../public/images/icon-view.svg"
import image3 from "../../../public/images/icon-ethereum.svg"
import image4 from "../../../public/images/icon-clock.svg"
import image5 from "../../../public//images/image-avatar.png"
function Cards() {
    return (
    <section id='card'>
        <div id='bleu'><img id='cube' src={image2} alt="yeux" /></div>
        <div id='cube-div'>
            <img id='cube' src={image} alt="Equilibrium" />
        </div>
        <div id='div-txt1'>
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes <br/>
            balance and calm.</p>
        </div>
        <div id='div-txt-group'>
            <div className='div-txt2'>
                <div><img src={image3} alt="losange" /></div>
                <div id='p1'><p>0.041ETH</p></div>
            </div>
            <div className='div-txt2'>
                <div><img src={image4} alt="clock" /></div>
                <div id='p2'><p>3 days left</p></div>
            </div>
        </div>
        <div className="barre"></div>
        <div id='last-div'>
            <div><img src={image5} alt="pic" /></div>
            <div><p>Creation of <span>Jules Wyvern</span></p></div>
        </div>
    </section>
    );
}
export default Cards;