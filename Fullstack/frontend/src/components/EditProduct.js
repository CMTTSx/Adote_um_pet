/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title: title,
            price: price
        });
        history.push("/");
    }

    useEffect(() => {
        getProductById();
    },[]);

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    return (
        <div>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">Título</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ title } 
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder="Título"
                    />
                </div>
                <div className="field">
                    <label className="label">Preço</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ price } 
                        onChange={ (e) => setPrice(e.target.value) }
                        placeholder="Preço"
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Editar</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
