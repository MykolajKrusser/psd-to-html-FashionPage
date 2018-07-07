import React, {Component} from 'react';
import Shop from './Shop/Shop';
import Company from './Company/Company';
import Shop from '../../database/Shop';
import Company from '../../database/Company';
import './Footer.css';

class Footer extends Component{
    state={
        shop: Shop,
        company: Company
    }
    render(){
        return(
            <section id='footer' className='content-wr flex'>
                <div>
                    <h2>W/Fashion</h2>
                    <p>@2018 w/fashion</p>
                </div>
                <Shop/>
                <Company/>
                <div>
                    <h3>Follow Us</h3>
                    <a href={}>
                        <img src={} alt={}/>
                    </a>
                    <a href={}>
                        <img src={} alt={}/>
                    </a>
                    <a href={}>
                        <img src={} alt={}/>
                    </a>
                </div>
            </section>
        );
    }
}

export default Footer;