import './cards.css'

function Cards() {
    return (
    <section id='card'>
        <div id='bleu'><img id='cube' src="/images/icon-view.svg" alt="yeux" /></div>
        <div id='cube-div'>
            <img id='cube' src="/images/image-equilibrium.jpg" alt="Equilibrium" />
        </div>
        <div id='div-txt1'>
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes <br/>
            balance and calm.</p>
        </div>
        <div id='div-txt-group'>
            <div className='div-txt2'>
                <div><img src="/images/icon-ethereum.svg" alt="losange" /></div>
                <div id='p1'><p>0.041ETH</p></div>
            </div>
            <div className='div-txt2'>
                <div><img src="/images/icon-clock.svg" alt="clock" /></div>
                <div id='p2'><p>3 days left</p></div>
            </div>
        </div>
        <div className="barre"></div>
        <div id='last-div'>
            <div><img src="/images/image-avatar.png" alt="pic" /></div>
            <div><p>Creation of <span>Jules Wyvern</span></p></div>
        </div>
    </section>
    );
}
export default Cards;