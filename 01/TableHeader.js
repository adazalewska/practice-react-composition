import React from 'react';

export default class TableHeader extends React.Component{
    render() {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sum</th>
                </tr>
            </thead>
        )  
    }
}