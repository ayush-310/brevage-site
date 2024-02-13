import React from 'react';
import { Col } from 'react-bootstrap';
import data from "../cards/CardData.json";
import "../cards/Card.css";
import { Link } from "react-router-dom";

export function Card({ searchTerm }) {

    return (
        <div className='section'>

            <div className='aa'>
                <h1 className=''>Cocktails</h1>
            </div>
            <div className='cocktails-center'>

                {data.filter((val) => {
                    if (searchTerm === "") {
                        return true;
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return true;
                    }
                    return false;
                }).map((val) => (
                    <Col key={val.id} className='cocktail' lg={3}>
                        <div className='ww'>
                            <img src={val.img} alt={val.name} />
                        </div>
                        <div className='ss'>
                            <h3 className='fs-2'>{val.name}</h3>
                            <div className='tt'>
                                <div>
                                    <p>{val.category}</p>
                                    <p className='pp'>{val.info}</p>
                                </div>
                                {/* Wrap the button with a Link component */}
                                <button className="button-40">
                                    <Link to={`/detail/${val.id}`}>Details</Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                ))}
            </div>
        </div>
    )
}
