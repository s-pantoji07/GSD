const categories = [
    {
      "name": "Pasta and Rice",
  "image": "https://imgs.search.brave.com/Ex1ZraBV_bSj75udfjJkU6saQ6MKwFsmolTZEKaDLvU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxscmVjaXBlcy5j/b20vdGhtYi92d0gz/akF1Q2xQbTZ3SGhY/RU11d25XMVU5SGs9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9D/b29rLVJpY2UtTGlr/ZS1QYXN0YS0zeDIt/MS0zNDBiZDg3ZDRj/ZDU0NjMzOTI4YmUz/NmRjZmRlYzY1Zi5q/cGc",
  "products": [
    {
      "name": "Basmati Rice",
      "price_before_discount": 250,
      "price_after_discount": 200,
      "discount": 20,
      "add_to_cart": false,
      "review": 4.7,
      "heart_button": false,
      "image": "https://imgs.search.brave.com/llwq_GuWfyTQmh8Gc6UyJ3-6kBPX4H52oP98ePIKLG4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb29rZWQtcGxh/aW4td2hpdGUtYmFz/bWF0aS1yaWNlLXRl/cnJhY290dGEtYm93/bF80NjY2ODktMjQ2/MzEuanBnP3NlbXQ9/YWlzX2h5YnJpZA"
    },
    {
      "name": "Sona Masoori Rice",
      "price_before_discount": 180,
      "price_after_discount": 150,
      "discount": 17,
      "add_to_cart": false,
      "review": 4.5,
      "heart_button": false,
      "image": "https://imgs.search.brave.com/OLqKy9RIHyxkZwI4tD7ZKqm0WMkIlB55upGhJmNXijs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vRGVj/Y2FuLVNvbmEtTWFz/b29yaS1SaWNlLTEw/LUxCXzFhMDIzNzFj/LWY2YWMtNGY0Ny1h/YjhjLWNiNDgyZWE5/MThmYy5lNjViYmJl/MjNmOWExMWRkNzkz/NGUxMDRjMTU1NjA3/MS5qcGVnP29kbkhl/aWdodD01ODAmb2Ru/V2lkdGg9NTgwJm9k/bkJnPUZGRkZGRg"
    },
    {
      "name": "Poha (Flattened Rice)",
      "price_before_discount": 120,
      "price_after_discount": 90,
      "discount": 25,
      "add_to_cart": false,
      "review": 4.4,
      "heart_button": false,
      "image": "https://imgs.search.brave.com/nfoi4V-j5_iCV6e3scf5rB_LXmFzcfdy-Y_jCRPUhgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxK1MxdkZvK2hM/LmpwZw"
    },
    {
      "name": "Ragi Vermicelli",
      "price_before_discount": 150,
      "price_after_discount": 120,
      "discount": 20,
      "add_to_cart": false,
      "review": 4.6,
      "heart_button": false,
      "image": "https://imgs.search.brave.com/t9tv7deISgFzM5kTQRHZ0OvsURJzr5b6oLSbSZJq3EA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYWNo/aWZvb2RzLmNvbS9j/ZG4vc2hvcC9maWxl/cy9hYWNoaS1SYWdp/LVZlcm1pY2VsbGku/d2VicD92PTE3Mjcw/ODk1Mjcmd2lkdGg9/MTk0Ng"
    },
    {
      "name": "Whole Wheat Pasta",
      "price_before_discount": 200,
      "price_after_discount": 160,
      "discount": 20,
      "add_to_cart": false,
      "review": 4.5,
      "heart_button": false,
      "image": "https://imgs.search.brave.com/jnuvsM-oQlZkn4u8XH8yXBePuzCyXeLpND_vebgbI-g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0dGhpcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL3NpdGVz/LzQvMjAyNC8wMy9k/ZS1jZWNjby13aG9s/ZS13aGVhdC1mdXNp/bGxpLmpwZz9xdWFs/aXR5PTgyJnN0cmlw/PWFsbCZ3PTY0MA"
    }
        
      ],
    },
    // {
    //   name: "Dairy and Eggs",
    //   image: "https://via.placeholder.com/100",
    //   products: [
    //     {
    //       name: "Whole Wheat Bread",
    //       price_before_discount: 150,
    //       price_after_discount: 120,
    //       discount: 20,
    //       add_to_cart: false,
    //       review: 4.6,
    //       heart_button: false,
    //       image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format",
    //     },
    //     {
    //       name: "Croissant",
    //       price_before_discount: 200,
    //       price_after_discount: 160,
    //       discount: 20,
    //       add_to_cart: false,
    //       review: 4.8,
    //       heart_button: false,
    //       image: "https://images.unsplash.com/photo-1617970386185-b4a3a8e799b4?w=500&auto=format",
    //     },
    //     {
    //       name: "French Baguette",
    //       price_before_discount: 180,
    //       price_after_discount: 140,
    //       discount: 22,
    //       add_to_cart: false,
    //       review: 4.5,
    //       heart_button: false,
    //       image: "https://images.unsplash.com/photo-1614695007356-7b252d794dbb?w=500&auto=format",
    //     },
    //   ],
    // },
    // {
    //   name: "Beverages",
    //   image: "https://via.placeholder.com/100",
    //   products: [
    //     {
    //       name: "Orange Juice",
    //       price_before_discount: 120,
    //       price_after_discount: 100,
    //       discount: 16,
    //       add_to_cart: false,
    //       review: 4.3,
    //       heart_button: false,
    //       image: "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=500&auto=format",
    //     },
    //   ],
    // },
    // {
    //   name: "Meat & Poultry",
    //   image: "https://via.placeholder.com/100",
    //   products: [
    //     {
    //       name: "Chicken Breast",
    //       price_before_discount: 300,
    //       price_after_discount: 250,
    //       discount: 16,
    //       add_to_cart: false,
    //       review: 4.7,
    //       heart_button: false,
    //       image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&auto=format",
    //     },
    //   ],
    // },
    // {
    //   name: "Dairy & Eggs",
    //   image: "https://via.placeholder.com/100",
    //   products: [
    //     {
    //       name: "Organic Eggs",
    //       price_before_discount: 200,
    //       price_after_discount: 180,
    //       discount: 10,
    //       add_to_cart: false,
    //       review: 4.8,
    //       heart_button: false,
    //       image: "https://images.unsplash.com/photo-1547919760-1a76e51458cb?w=500&auto=format",
    //     },
    //   ],
    // },
  ];
  
  module.exports = { categories };


// const categories = [
//   {
//     "name": "DairyAndEggs",
//     "image": "https://imgs.search.brave.com/szcm0t1xUwSe7ZmDiqBmtW0sMgfFwCxRnkGBZQffY58/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NjE4NTk0Ny9waG90/by9kcmlua3Mtc3Rp/bGwtbGlmZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YkpF/NE8wdHlhZDZhTDZE/QnF0MFZUbW9kTVhV/bl9KQ2VRWFFMTldP/RXpHZz0",
//     "products": [
//       {
//         "name": "Milk",
//         "price_before_discount": 60,
//         "price_after_discount": 50,
//         "discount": 16,
//         "add_to_cart": false,
//         "review": 4.7,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1602544985073-6b02f5909d85?w=500&auto=format"
//       },
//       {
//         "name": "Cheese",
//         "price_before_discount": 120,
//         "price_after_discount": 100,
//         "discount": 17,
//         "add_to_cart": false,
//         "review": 4.5,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1587263082103-c0d5da4be678?w=500&auto=format"
//       },
//       {
//         "name": "Butter",
//         "price_before_discount": 80,
//         "price_after_discount": 70,
//         "discount": 12,
//         "add_to_cart": false,
//         "review": 4.6,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1560747343-cb7f0f198ba0?w=500&auto=format"
//       },
//       {
//         "name": "Yogurt",
//         "price_before_discount": 100,
//         "price_after_discount": 85,
//         "discount": 15,
//         "add_to_cart": false,
//         "review": 4.8,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1616823300573-83d2a823e51b?w=500&auto=format"
//       },
//       {
//         "name": "Eggs",
//         "price_before_discount": 70,
//         "price_after_discount": 60,
//         "discount": 14,
//         "add_to_cart": false,
//         "review": 4.9,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1562269879-7b3edac67b53?w=500&auto=format"
//       },
//       {
//         "name": "Cream",
//         "price_before_discount": 90,
//         "price_after_discount": 80,
//         "discount": 11,
//         "add_to_cart": false,
//         "review": 4.7,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1602544985073-6b02f5909d85?w=500&auto=format"
//       },
//       {
//         "name": "Sour Cream",
//         "price_before_discount": 110,
//         "price_after_discount": 95,
//         "discount": 13,
//         "add_to_cart": false,
//         "review": 4.6,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1576584133930-c6a3b65d7209?w=500&auto=format"
//       },
//       {
//         "name": "Cottage Cheese",
//         "price_before_discount": 85,
//         "price_after_discount": 70,
//         "discount": 18,
//         "add_to_cart": false,
//         "review": 4.9,
//         "heart_button": false,
//         "image": "https://images.unsplash.com/photo-1562269879-7b3edac67b53?w=500&auto=format"
//       }
//     ]
//   }
  
  
  
// ];

// module.exports = { categories };