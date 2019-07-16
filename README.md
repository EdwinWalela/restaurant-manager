# Restaurant Management Application
This is a progressive web-app whose purpose is to assist in day-to-day operations in a restaurant e.g making and tracking of user orders

The goal is to develop a full stack application using React and NodeJs (with Express). Initially state will be managed by Component State (Application Level State and Component Level State). Later on in development Redux will be used as the state manager.

## Enviroment Set-up
Ensure Node and npm are installed on your machine

1. Clone repository
2. Run `npm install --save`
3. Run `npm start`

# Components
1. OrderPage
2. FoodSection
3. MenuItem
4. ItemCounter
5. UserOrder

# State
## MenuItems
```js
    [{
        id:Number,
        type:String,
        name:String,
        ingredients:String
    }]
```
## Orders
```js
    [{
        id:Number,
        userId:Number,
        status:String
    }]
```
## UserOrder
```js
    [{
        id:Number,
        quantity:Number,
        unitAmount:Number
    }]
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).