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
        offers:[
            {
                img: img1,
                description: '@wfashionstore'
            },
            {img: img2},
            {
                img: img3,
                description: 'Enter Your email for exclusive offers & new arrivals'
            },
            {img: img4},
            {img: img5},
            {img: img6},
            {img: img7}
        ]
    }
    render(){
        return(
            <section id='offers'>
                <div className='content-wr flex'>
                    <div className='offers_col'></div>
                    <div className='offers_col'></div>
                    <div className='offers_col input'></div>
                    <div className='offers_col'></div>
                    <div className='offers_col'></div> 
                    <div className='offers_col'></div>
                    <div className='offers_col'></div>
                </div>
            </section>
        );
    }
}

export default Offers;