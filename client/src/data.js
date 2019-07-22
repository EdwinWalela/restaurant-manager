module.exports = {
    menuItemsData:[
        {
            id:1,
            type:'side',
            name:'fries',
            ingredients:'',
            price:100
        },
        {
            id:2,
            type:'side',
            name:'burger',
            ingredients:'',
            price:350
        },
        {
            id:3,
            type:'side',
            name:'onion rings',
            ingredients:'10 pieces',
            price:200
        },
        {
            id:4,
            type:'drink',
            name:'Fanta',
            ingredients:'500ml',
            price:100
        },
        {
            id:5,
            type:'meal',
            name:'Super Combo',
            ingredients:'2 fries, 6 wings, 1 burger and one 2 liter Soda',
            price:1200
        }
    ],
    orders:[
            {
                number:21,
                id:1,
                user:'edwin',
                status:0,
                items:[
                    {
                        id:"fries",
                        quantity:2
                    },
                    {
                        id:'soda',
                        quantity:1
                    },
                    {
                        id:'super combo',
                        quantity:1
                    }
                ]
            },
            
    ]   
}