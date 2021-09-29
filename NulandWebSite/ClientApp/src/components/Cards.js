import React, { Component } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listings: [],
        };
    }

    refreshList() {
        fetch("api/Listings")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ listings: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const { listings } = this.state;
        return (
            <div className="cards">
                <h1>Check out these GREAT homes!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            {listings.map((list) => (
                                <li>
                                <CardItem
                                    src={'Photos/' + list.PhotoFileName1}
                                    text={`${list.Type} in ${list.City}, AZ`}
                                    label={list.Type}
                                    path="/listings"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}