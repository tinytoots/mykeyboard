import React, { Component } from 'react';
import ProductService from '../../service/ProductService'; 

export default class UpdateProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // get id from route
            id: this.props.match.params.id,
            name: '',
            brand: '',
            quantity: '',
            price: '',
            ddl: '',
            progress: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        // this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        // this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount() {
        ProductService.getProductById(this.state.id).then( (res) =>{
            let product = res.data;
            this.setState({name: product.name,
                brand: product.brand,
                quantity: product.quantity,
                price: product.price,
                ddl: product.ddl,
                progress: product.progress
            });
        })
    }

    updateProduct = (e) => {
        e.preventDefault();
        let product = {name: this.state.name, brand: this.state.brand, quantity: this.state.quantity, price: this.state.price, ddl: this.state.ddl, progress: this.state.progress};
        console.log('product => ' + JSON.stringify(product));
        ProductService.updateEmployee(product, this.state.id).then( res => {
            this.props.history.push('/portfolio/products');
        });
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value}); 
    }

    changeBrandHandler= (event) => {
        this.setState({brand: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    changeDdlHandler= (event) => {
        this.setState({ddl: event.target.value});
    }

    changeProgressHandler= (event) => {
        this.setState({progress: event.target.value});
    }

    

    cancel() {
        this.props.history.push('/portfolio/products');
    }

    render() {
        return (
            <div style={{marginTop: '150px'}}>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3> Update Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> 名称: </label>
                                        <input placeholder="名称" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> 品牌: </label>
                                        <input placeholder="品牌" name="brand" className="form-control"
                                        value={this.state.brand} onChange={this.changeBrandHandler} />
                                    </div> 
                                    <div className = "form-group">
                                        <label> 数量: </label>
                                        <input placeholder="数量" name="quantity" className="form-control"
                                        value={this.state.quantity} onChange={this.changeQuantityHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> 价格: </label>
                                        <input placeholder="价格" name="price" className="form-control"
                                        value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> 截团日期: </label>
                                        <input placeholder="截团日期" name="ddl" className="form-control"
                                        value={this.state.ddl} onChange={this.changeDdlHandler} />
                                    </div>

                                    <div className = "form-group">
                                        <label> 进度: </label>
                                        <input placeholder="进度" name="progress" className="form-control"
                                        value={this.state.progress} onChange={this.changeProgressHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
