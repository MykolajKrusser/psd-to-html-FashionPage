import React from 'react';
import Calvin from '../../img/Calvin Klein.png';
import Chanel from '../../img/Chanel.png';
import Dolce from '../../img/Dolce & Gabbana.png';
import Guess from '../../img/Guess Jeans.png';
import Prada from '../../img/Prada.png';
import './Brends.css';

const brends = ()=> <section id='brends' className='content-wr flex'>
    <img src={Calvin} alt='' className='colBrends'/>
    <img src={Chanel} alt='' className='colBrends'/>
    <img src={Dolce} alt='' className='colBrends'/>
    <img src={Guess} alt='' className='colBrends'/>
    <img src={Prada} alt='' className='colBrends'/>
</section>

export default brends;