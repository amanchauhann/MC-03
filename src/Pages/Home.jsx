import { useState } from "react"
import Table from "../Components/Table"
import { useData } from "../Contexts/Context"
import "./main.css"

const Home = () => {
    const { products_data } = useData()
    const [search_value, set_search_value] = useState("")
    const [filters, set_filters] = useState({
        search: '',
        sort: ''
    })

    const search_handler = (e) => {
        set_search_value(e.target.value)
        set_filters(prev => ({ ...prev, search: e.target.value }))
    }

    const filtered_data = products_data.filter(({ product_name }) => product_name.toLowerCase().trim().includes(search_value.toLowerCase().trim()))
    console.log("a", filters)

    const sort_handlder = (e) => {
        const choosen_sort = e.target.innerText
        console.log(e.target.innerText)
        set_filters(prev => ({ ...prev, sort: choosen_sort }))
    }


    const sorted_data = filtered_data.sort(function (a, b) { return a.id - b.id });
    console.log("o", sorted_data)
    return (
        <div className="container">
            <div>
                <input type="text" onChange={search_handler} value={search_value} />
            </div>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th onClick={sort_handlder}>ID</th>
                        <th>Product Name</th>
                        <th>Product Weight</th>
                        <th>Price</th>
                        <th>Calories</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered_data.map(each_product => <Table {...each_product} />)}
                </tbody>
            </table>


        </div>
    )
}

export default Home