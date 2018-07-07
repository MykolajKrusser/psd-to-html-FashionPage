import React, {Component} from 'react';
import Shop from './Shop/Shop';
import Company from './Company/Company';
import ShopLists from '../../database/Shop';
import CompanyLists from '../../database/Company';
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
            <section id='footer' className='content-wr flex'>
                <div>
                    <h2>W/Fashion</h2>
                    <p>@2018 w/fashion</p>
                </div>
                <div>
                   {shopListLinks}
                </div>
                <div>
                    {CompanyListsLinks}
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <a >
                        <img />
                    </a>
                    <a >
                        <img />
                    </a>
                    <a >
                        <img />
                    </a>
                </div>
            </section>
        );
    }
}

export default Footer;