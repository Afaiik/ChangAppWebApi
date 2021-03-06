import React from 'react';
import Header from 'components/Header/Header'
import Banner from 'components/Banner/Banner'
import NewClothesList from 'components/NewClothesList/NewClothesList'
import 'pages/Home/Home.css'

const Home = () => {
    return (  
        <div>
            <Header/>
            <div className="header-split"></div>
            <div className="home-container">
                <Banner/>
                <NewClothesList/>
            </div>
        </div>
    );
}
 
export default Home;