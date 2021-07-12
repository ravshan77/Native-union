import React from 'react';
import foundImg from "../../assets/404/no_result.gif";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link} from "react-router-dom";
import "./404.css"

const PageNoteFounding = () => {

    return (
        <div className="notFound">
            <h3 className="notfind">Sorry, the product you were looking for was not found</h3>
            <div><img src={foundImg}/></div>
        </div>
    )
}

export default PageNoteFounding
