import React, { Component } from 'react'
import './Portfolio.css'
import ProductService from '../../service/ProductService'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }

    viewProduct(id) {
        this.props.history.push(`/portfolio/view-product/${id}`);
    }

    editProduct(id) {
        this.props.history.push(`/portfolio/add-product/${id}`); 
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data});
        }); 

    }

    addProduct() {
        this.props.history.push('/portfolio/add-product/_add');
    }

    render() {
        return (
            <div className='portfolio-bg'>
                <h2 className="text-center">Product List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add product </button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> 名称 </th>
                                <th> 品牌 </th>
                                <th> 数量 </th>
                                <th> 价格 </th>
                                <th> 截团时间 </th>
                                <th> 进度 </th>
                                <th> 操作 </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.products.map(
                                    product => 
                                    <tr key = {product.id}>
                                        <td> {product.name} </td>
                                        <td> {product.brand} </td>
                                        <td> {product.quantity} </td>
                                        <td> {product.price} </td>
                                        <td> {product.ddl} </td>
                                        <td> {product.progress} </td>
                                        <td> 
                                            <button onClick = { () => this.editProduct(product.id)} className="btn btn-info">更新 </button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.viewProduct(product.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
