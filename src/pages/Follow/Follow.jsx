import React from 'react'
import "./Follow.css"
import FollowData from "../../data/FollowData/FollowData"
import VanillaTilt from "vanilla-tilt"
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const Follow = () => {

    const [hidden,setHidden] =React.useState(true)
    const handleHidden = () => {
        setHidden(!hidden)
    }
    console.log(hidden)

    // VanillaTilt.init(document.querySelectorAll(".follow_card"), {
	// 	max: 25,
	// 	speed: 900
	// });

    return (
        <div className="Follow background_f">
                        <p className="Explore_title">@NATIVEUNION</p>
            <h1 className="LOOKS_title">Follow US</h1>
            <div className={`${hidden ? "follow_cards" : "follow_cards add_hidden"}`}>
                {FollowData.map((follow) =>
                    {
                        return (
                            <div className="follow_card">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <img src={follow.source} />
                            </div>
                        )
                    }
                )}
            </div>
            <button className="hidden_card_btn" onClick={handleHidden}>{hidden ? <AddIcon/> : <KeyboardArrowUpIcon />}</button>
        </div>
    )
}

export default Follow
