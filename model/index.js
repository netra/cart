/**
 * Cart Model which is going to pull data from MongoDB
 * 
 */
var CartModel = {

  // As a temporary work around, I am mocking the data
  // In real-app this data would be coming from the Backend APIs.
  getData: function() {
    return  {
      items: [
        {
          quantity: 1,
          image: "/images/samtv.jpg",
          description: "Samsung TV 65 inches, Flat Screen with 2000 pixel resolution",
          price: "250",
          seller: "WalMart.com",
          zipcode: "94087",
          saved: "299.99",
          totalSavings: 50,
          careplan: 25.00
        },
        {
          quantity: 2,
          image: "/images/tv-1.jpeg",
          description: "LG TV 52 inches, Flat Screen with 4000 pixel resolution",
          price: "250",
          seller: "Ebay.com",
          zipcode: "94087",
          saved: "329.99",
          totalSavings: 100,
          careplan: 105.00
        }
      ]
    };
  },
  setData: function() {
    
  }
};

module.exports = CartModel;
