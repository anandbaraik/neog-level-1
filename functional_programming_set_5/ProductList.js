const products = [
    { id: 1, name: "Apple iPhone 13 Pro", price: 999, category: "Electronics" },
    { id: 2, name: "Samsung Galaxy S21", price: 799, category: "Electronics" },
    { id: 3, name: "Fitbit Versa 3 Smartwatch", price: 229, category: "Fitness" },
    {
      id: 4,
      name: "Bose QuietComfort 35 II Headphones",
      price: 299,
      category: "Audio"
    },
    { id: 5, name: "Kindle Paperwhite", price: 149, category: "Books" }
  ];
  export default function ProductList() {
    return (
      <div>
        <h1>2) Online Store</h1>
        <ul>
          {products.map((item, index) => (
            <li key={index}>
              Name: {item.name} | Price: {item.price} | Category: {item.category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
