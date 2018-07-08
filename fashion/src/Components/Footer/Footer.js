import React, {Component} from 'react';
import Shop from './Shop/Shop';
import Company from './Company/Company';
import ShopLists from '../../database/Shop';
import CompanyLists from '../../database/Company';
import facebook from '../../img/facebook.svg';
import insta from '../../img/instagramSoc.svg';
import pinterest from '../../img/pinterest.svg'
import './Footer.css';

class Footer extends Component{
    state={
       shopList: ShopLists,
       companyLists: CompanyLists
    }
    render(){
        const shopListLinks = this.state.shopList.map((list)=>{
            return <Shop 
            key={list.key}
            title={list.title}
            href={list.href}
            />
        })
        const CompanyListsLinks = this.state.companyLists.map((list)=>{
            return <Company 
            key={list.key}
            title={list.title}
            href={list.href}
            />
        })
        return(
            <section id='footer' className='flex'>
                <div className="footerCol">
                    <h2>W/Fashion</h2>
                    <p>@2018 w/fashion</p>
                </div>
                <div className="footerCol flex">
                    <h2>Shop</h2>
                    <div className='flex'>{shopListLinks}</div>
                </div>
                <div className="footerCol flex">
                    <h2>Company</h2>
                    <div className='flex'>{CompanyListsLinks}</div>
                </div>
                <div className="footerCol">
                    <h2>Follow Us</h2>
                    <a href='facebook.com'>
                        <img src={facebook} />
                    </a>
                    <a href='instagram.com'>
                        <img src={insta}/>
                    </a>
                    <a href='pinterest.com'>
                        <img src={pinterest}/>
                    </a>
                </div>
            </section>
        );
    }
}

export default Footer;