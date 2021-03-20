import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './HomeComponent.module.css';
import Product from "../Products/Product";
import axios from "axios";


function HomeComponent () {


    var searchTerm = '';
    const [flyers, setFlyers] = useState({});


   function getProductsByCategory(event){
        let category = event.target.value;

        if(category == 'all') {
            axios.get('http://localhost:80/getProducts')
                .then(
                    res => {
                        console.log(res);
                        setFlyers(
                            res.data
                        );
                    }
                )
        } else {
          axios.get('http://localhost:80/getProductsByCategory/'+category+'')
                .then(
                    res => {
                        console.log(res);
                        setFlyers(
                            res.data
                        );
                    }
                )
        }

    }

    let filterCategories = [
        'Discount',
        'Bricolage',
        'Iper e super',
        'Elettronica',
    ];


    function setCategories(filterCategories) {
        if(filterCategories.length > 0)
        {
            return  filterCategories.map((filterCategory) => {
                return <option value={filterCategory}>{filterCategory}</option>
            })
        } else {
            return <option value="No categories">No categories</option>
        }
    }

    function checkCategories(filterCategories) {
        return (<div>
                <div className="row d-flex align-items-center justify-content-center ">
                    <div className="col-6">
                        <label className="d-block">Categoria:</label>
                            <select defaultValue={'all'} onChange={getProductsByCategory.bind(this)} className="category-filter" name="category">
                                <option value='all'>Seleziona...</option>
                                {setCategories(filterCategories)}
                                <option value='all'>Tutte le categorie</option>
                            </select>
                    </div>
                    <div className="col-6">
                        <label className="d-block">Ricerca Flyer:</label>
                        <input className="w-100" placeholder="Ricerca..." onChange={searchFlyer.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }

    function searchFlyer(input){

            searchTerm = input.target.value;
            let tempFlyers = [];
            tempFlyers.push(flyers);

        if(searchTerm !== '') {
           const filtered = flyers.filter (flyer => {
                if (flyer.title.toLowerCase().includes(searchTerm.toLowerCase()) == true){
                    return flyer
                }
            })
            return setFlyers(filtered)

        } else {
            return setFlyers(tempFlyers)
        }
    }

    function checkFlyers(flyers) {

        if(flyers.length > 0) {

            return flyers.map((flyer) => {
                if(flyer.is_published == 1) {

                    return <div className="col-lg-3 col-6 my-2 product">
                        <Product key={flyer.id} flyer={flyer}></Product>
                        </div>

                } else {
                    return <div></div>
                }
            });
        } else {
            return <span></span>;
        }
    }

 return <div>
            <div>{checkCategories(filterCategories)}</div>
            <div className="row my-3">{checkFlyers(flyers)}</div>
 </div>;
};

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
