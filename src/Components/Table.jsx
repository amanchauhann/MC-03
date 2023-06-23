const Table = ({ id, product_name, product_weight, price, calories, ingredients }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{product_name}</td>
            <td>{product_weight}</td>
            <td>{price}</td>
            <td>{calories}</td>
            <td>{ingredients.join(', ')}</td>
        </tr>
    )
}

export default Table