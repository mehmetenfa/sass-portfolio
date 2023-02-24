import React from "react";
import sideImg from "../../images/side.jpg ";

export const SideContent = () => {
  return (
    <>
      <section className="sideContent">
        <div className="sideContent_Top">
          <div className="sideContent_top_img">
            <img src={sideImg} alt="" />
            <div className="sideContent_top_img_name">
              <h3>Linda M. Bellamy</h3>
              <span>Sr. Developer</span>
            </div>
          </div>
          <div className="sideContent_top_social">
            {socialIcon.map((icons) => (
              <div className={icons.class}>
                <span>{icons.icon}</span>
              </div>
            ))}
          </div>
          <div className="sideContent_bottom">
            <div className="sideContent_bottom_skils">
              {side.map((item) => (
                <div className="sideContent_skill_box">
                  <Progress
                    title={item.text}
                    done={item.num}
                    back={item.class}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
