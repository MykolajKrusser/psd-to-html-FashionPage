import React, {Component} from 'react';
import  './Offers.css';
import img1 from '../../img/instagram.svg';
import img2 from '../../img/offer2.jpg';
import img3 from '../../img/offer3.jpg';
import img4 from '../../img/offer4.jpg';
import img5 from '../../img/offer5.jpg';
import img6 from '../../img/offer6.jpg';
import img7 from '../../img/offer7.jpg';


class Offers extends Component {
    state ={

    }
    render(){
        
        return(
            <section id='offers'>
                <div className='content-wr flex'>
                    <div className='offers_col'>
                        <img src={img1} alt='instagram_logo' className='instagram_logo'/>
                        <p>@wfashionstore</p>
                        <p>follow us on instagram</p>
                    </div>
                    <div className='offers_col'>
                        <img src={img2} alt=""/>
                    </div>
                    <div className='offers_col input'>
                        <p>Enter your email for<br/><span>exlusive offers</span> & new arrivals</p>
                        <input type='text' placeholder='Your email'/>
                        <button>Sign Up</button>
                    </div>
                    <div className='offers_col'>
                        <img src={img4} alt=""/>
                    </div>
                    <div className='offers_col'>
                        <img src={img5} alt=""/>
                    </div> 
                    <div className='offers_col'>
                        <img src={img6} alt=""/>
                    </div>
                    <div className='offers_col'>
                        <img src={img7} alt="facebook-temp"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Offers;