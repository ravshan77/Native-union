import React, { useEffect } from "react";
import "./Sponsors.css";
import SponsorData from "../../data/SponsorData/Sponsor";

const Sponsors = () => {
  const len = SponsorData.length - 1;

  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  return (
    <div className="Sponsors">
      {SponsorData.map((sponsorText, indx) => {
        return (
          <div className="Sponsors_container" key={indx}>
            <div className="sponsor_text_item">
              <p className={activeIndex == indx ? "block_text" : "none_text"}>
                {sponsorText.text}
              </p>
            </div>
          </div>
        );
      })}
      <div className="Sponsors_container">
        <div className="sponsor_comp_item">
          {SponsorData.map((sponsorIcon, ind) => {
            return (
              <div
                key={ind}
                className={
                  activeIndex == ind ? "block_opacity" : "none_opacity"
                }
                onClick={() => setActiveIndex(ind)}
              >
                <img className="sponsor_img" src={sponsorIcon.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

{
  /* <div className="sponsor_text_item b">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus sunt dolorem ipsam vel necessitatibus, voluptas at recusandae eos. Error consequuntur numquam temporibus aliquid eveniet perferendis deserunt placeat, ex quisquam.</p>
</div>
<div className="sponsor_comp_item b">
    <div className="sponsor_comp b"><img src="https://cdn.shopify.com/s/files/1/0066/9050/4822/files/monocle_300x.png?v=1568411972" /></div>
</div> */
}
