import React from 'react';

function OrderDetail({ match }) {
    const { id } = match.params; // Get the id from the URL params

    // Demo order items
    const orderItems = [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 30 },
    ];

    // Here you would typically fetch the order details based on the id
    // For this example, we'll just display the id and demo order items
    return (
        <div>
            <h2>Order Detail</h2>
            <p>Order ID: {id}</p>
            <h3>Items:</h3>
            <ul>
                {orderItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            {/* Add other order details here */}
        </div>
    );
}

export default OrderDetail;
