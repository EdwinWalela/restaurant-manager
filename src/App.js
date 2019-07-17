import React,{ Component } from 'react';
import './App.css';
import data from './data';

import OrderPage from './components/OrderPage';
import Footer from './components/layout/Footer';

class App extends Component {
    
    state = {
        menuItems:data.menuItemsData,
        orders:data.ordersData,
        userOrder:[],
        userOrderDisplay:false
    }

    handleUserOrderDisplay = () =>{
        this.setState({
            userOrderDisplay:!this.state.userOrderDisplay
        })
    }

    changeQuantity = (item,mode)=>{
        let newItem = item;
        
        if(mode === 1){
            newItem.quantity++;
        }else{
            if(newItem.quantity !== 0){
                newItem.quantity--;
            }
        }
        return newItem;
    }

    handleUserOrderCount = (id) =>{

       let count = this.state.userOrder.filter(item=>{
            return item.id === id;
       })[0];
       
       return count ? count.quantity : 0
    }

    // When a menu-item's counter changes
    handleUserOrderChange = (id,mode) =>{
        let itemExists = false;
        // Increment item quantity
        this.state.userOrder.map(item=>{
            if(item.id === id){
                itemExists = true;
                return this.changeQuantity(item,mode)
            }
        })

        // Exit loop if item already existed to avoid adding item twice
        if(itemExists){
             // Update state
            this.setState({
                userOrder:this.state.userOrder
            })
            return;
        }

        let menuItem = this.state.menuItems.filter((item)=>{
            return item.id === id
        })[0];

        let newOrder = {
            id:menuItem.id,
            quantity:1
        }
        // Add new item to state
        this.setState({
            userOrder:[...this.state.userOrder,newOrder]
        })
    } 

    render() {
        return (
            <div>
                <OrderPage
                    handleUserOrderDisplay = {this.handleUserOrderDisplay}
                    userOrderDisplay = {this.state.userOrderDisplay}
                    menuItems = {this.state.menuItems}
                    handleUserOrderChange = {this.handleUserOrderChange}
                    handleUserOrderCount = {this.handleUserOrderCount}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
