import React,{ Component } from 'react';
import './App.css';
import data from './data';

import OrderPage from './components/OrderPage';

class App extends Component {
    
    state = {
        menuItems:data.menuItemsData,
        orders:data.ordersData,
        userOrder:[]
    }

    render() {
        return (
            <div>
                <OrderPage
                    menuItems = {this.state.menuItems}
                />
            </div>
        )
    }
}

export default App;
