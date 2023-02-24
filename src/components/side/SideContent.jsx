import React from "react";
import sideImg from'../../images/side.jpg'

export const SideContent = () => {
  return (
    <>
      <section className="sideContent">
        <div className="sideContent_Top">
            <div className="sideContent_top_img">
                <img src={sideImg} alt="" />
            </div>
        </div>
      </section>
    </>
  );
};
