import React, { useEffect } from "react";
import { connect } from "react-redux";
import SortingHat2 from "../images/SortingHat2.png";
import { getHouse } from "../store/actions/houseAction";



const HpHouse = props => {
    useEffect(() => {
        props.getHouse();
    }, []);
    return (
        <div className="homepage">
            <h1>Welcome To Hogwarts</h1>
            <h3>Which House will you be in?</h3>
            <p>Click the Sorting Hat to find out!</p>
            <img onClick={props.getHouse} src={SortingHat2} className="SortingHat" alt="Hat">
            </img>
            <h1>{props.house} !</h1>
            <p>{props.error}</p>

        </div>
    )
}

const mapStateToProps = state => {
    console.log("mapStateToProps state: ", state)
    return {
        house: state.house,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getHouse }
)(HpHouse);