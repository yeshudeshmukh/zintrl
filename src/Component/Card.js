import React from "react";
import Data from "../Model/Data";
import Filterbtn from "./Filterbtn";

const category = ['All',...new Set(Data.map((element)=> { return element.category; }))];

const Card = () => {
    const btnCategory=category;
    console.log(btnCategory)
    return (
        <div>
            <h3 className="text-dark">Top Stories for you</h3>
            <Filterbtn  btn={btnCategory} />
            {
                Data.map((element) => {
                    return (
                        <div>
                            <div className="card">
                                <span className="card-subtitle">Hot Scoops </span>
                                <div className="card-grid">
                                    <div>
                                        <h3 className="text-dark">{element.heading}
                                        </h3>
                                        <p className="text-light">{element.description}</p>
                                        <div className="share">
                                            <div>
                                                <ul>
                                                    <li><i className="fa-solid fa-thumbs-up"></i>Relevant</li>
                                                    <li> <i className="fa-solid fa-arrow-up-from-bracket"></i>Share</li>
                                                    <li><i className="fa-solid fa-down-to-bracket"></i>Read Later</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul>
                                                    <li>[Source]</li>
                                                    <li className="text-light">15 mins ago</li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                    <div>
                                        <img src={element.image} alt="not found" width="100%" height="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Card;