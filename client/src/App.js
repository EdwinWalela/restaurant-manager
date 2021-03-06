import React,{ Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import './App.css';
import data from './data';

import HomeNavigation from './components/home/HomeNavigation';
import MenuPage from './components/menu/MenuPage';
import OrdersPage from './components/orders/OrdersPage';
import OrderControl from './components/admin/OrderControl';
import Footer from './components/layout/Footer';

class App extends Component {
    
    state = {
        menuItems:[],
        orders:data.orders,
        userOrder:[],
        userOrderDisplay:false,
        navigationDisplay:false
    }

    handleUserOrderDisplay = () =>{
        this.setState({
            userOrderDisplay:!this.state.userOrderDisplay
        })
    }

    handleNavigationDisplay = () =>{
        this.setState({
            navigationDisplay:!this.state.navigationDisplay
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
    // admin mark order as complete
    handleOrderCompletion = (id) =>{
        this.setState({
            orders:this.state.orders.filter(order=>{
                return order.id !== id;
            })
        })
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
                userOrder:this.state.userOrder.filter(item=>{
                    return item.quantity !==0
                })
            })
            return;
        }

        let menuItem = this.state.menuItems.filter((item)=>{
            return item.id === id
        })[0];

        let newOrder = {
            id:menuItem.id,
            name:menuItem.name,
            price:menuItem.price,
            quantity:1
        }
        // Add new item to state
        this.setState({
            userOrder:[...this.state.userOrder,newOrder]
        })
    } 

    handleOrderStatusUpdate = (status,orderId) =>{
        let order = this.state.orders.find(order=>{
            return order.id === orderId
        })
        order.status = status
        let orders = this.state.orders.filter(order=>{
            return order.id !== orderId
        });
        orders.push(order)
        this.setState({
            orders:orders
        })
    }

    handleOrderCreation = () =>{
        // Get number and id of last order
        let number = this.state.orders[this.state.orders.length-1].number;
        let id = this.state.orders[this.state.orders.length-1].id;
        // Generate number for new order
        number++;
        id++;
        // create new order
        let items = this.state.userOrder;
        let newOrder = {
            number,
            id,
            user:'mumu',
            items
        }
        // Update state
        this.setState({
            orders:this.state.orders.push(newOrder),
            userOrder:[]
        })
    }

    async componentWillMount(){
        let res =  await Axios.get("http://localhost:5000/api/menu");
        let menuItems = res.data.menuItems;
        this.setState({
            menuItems
        })
    }

    render() {
        return (
            <Router>
                <div style={{minHeight:'60vh'}}>
                    <Route exact path="/" render={
                        ()=> <HomeNavigation 
                                userOrder = {this.state.userOrder}
                                handleOrderCreation = {this.handleOrderCreation}
                                handleNavigationDisplay = {this.handleNavigationDisplay}
                                handleUserOrderDisplay = {this.handleUserOrderDisplay}
                                navigationDisplay = {this.state.navigationDisplay}
                                userOrderDisplay = {this.state.userOrderDisplay}
                            />
                    }/>
                    <Route path="/our-menu" render={
                        ()=> <MenuPage
                                userOrder = {this.state.userOrder}
                                handleNavigationDisplay = {this.handleNavigationDisplay}
                                handleUserOrderDisplay = {this.handleUserOrderDisplay}
                                handleOrderCreation={this.handleOrderCreation}
                                navigationDisplay = {this.state.navigationDisplay}
                                userOrderDisplay = {this.state.userOrderDisplay}
                                menuItems = {this.state.menuItems}
                                handleUserOrderChange = {this.handleUserOrderChange}
                                handleUserOrderCount = {this.handleUserOrderCount}
                            /> 
                        } />
                    <Route path="/orders" render={
                        ()=> <OrdersPage 
                                userOrder = {this.state.userOrder}
                                orders = {this.state.orders}
                                handleNavigationDisplay = {this.handleNavigationDisplay}
                                handleOrderCreation={this.handleOrderCreation}
                                handleUserOrderDisplay = {this.handleUserOrderDisplay}
                                navigationDisplay = {this.state.navigationDisplay}
                                userOrderDisplay = {this.state.userOrderDisplay}
                            />
                    } />
                    <Route path="/admin" render={
                        ()=> <OrderControl
                                userOrder = {this.state.userOrder}
                                orders = {this.state.orders}
                                handleNavigationDisplay = {this.handleNavigationDisplay}
                                handleUserOrderDisplay = {this.handleUserOrderDisplay}
                                navigationDisplay = {this.state.navigationDisplay}
                                userOrderDisplay = {this.state.userOrderDisplay}
                                handleOrderCompletion = {this.handleOrderCompletion}
                                handleOrderStatusUpdate ={this.handleOrderStatusUpdate}
                        />
                    } />
                </div>
                <Footer />
            </Router>
        )
    }
}


export default App;
