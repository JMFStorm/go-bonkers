import React from "react";
import arttu from "../images/tiimi/IMG_2305.jpeg";
import janne from "../images/tiimi/Janne.jpg";
import anniina from "../images/tiimi/anniina.png";
import tuukka from "../images/tiimi/Tuukka.png";
import junnu from "../images/tiimi/junnu.png";
import def from "../images/tiimi/image-not-found.jpg";

const Tiimi = () => {
  return (
    <div className={"tiimi"}>
      <div className="page-container">
        <div className={"tiimi__title"}>
          <h1>Tiimi</h1>
        </div>
        <div className="tiimi__block">
          <div className="tiimi__person">
            <img className={"tiimi__img"} src={janne} alt="" />
            <div className="tiimi__descr">
              <h2 className={"tiimi__header"}>Janne Fagerström</h2>
              <p className={"tiimi__role"}>Fullstack Developer</p>
              <p className={"tiimi__skills"}>Project Management, Serverside coding & Testing</p>
            </div>
          </div>
          <div className="tiimi__person">
            <img className={"tiimi__img"} src={anniina} alt="" />
            <div className="tiimi__descr">
              <h2 className={"tiimi__header"}>Anniina Aarnio</h2>
              <p className={"tiimi__role"}>Front-end kehittäjä</p>
              <p className={"tiimi__skills"}>JavaScript, React, HTML/SCSS</p>
            </div>
          </div>
          <div className="tiimi__person">
            <img className={"tiimi__img"} src={arttu} alt="" />
            <div className="tiimi__descr">
              <h2 className={"tiimi__header"}>Arttu Sulkonen</h2>
              <p className={"tiimi__role"}>Front-end kehittäjä</p>
              <p className={"tiimi__skills"}>JavaScript, React, HTML/SCSS</p>
            </div>
          </div>
          <div className="tiimi__person">
            <img className={"tiimi__img"} src={tuukka} alt="" />
            <div className="tiimi__descr">
              <h2 className={"tiimi__header"}>Tuukka Ervasti</h2>
              <p className={"tiimi__role"}>Front-end kehittäjä</p>
              <p className={"tiimi__skills"}>JavaScript, React, HTML/SCSS</p>
            </div>
          </div>
          <div className="tiimi__person">
            <img className={"tiimi__img"} src={junnu} alt="" />
            <div className="tiimi__descr">
              <h2 className={"tiimi__header"}>Lee Gerald</h2>
              <p className={"tiimi__role"}>Front-end kehittäjä</p>
              <p className={"tiimi__skills"}>JavaScript, React, HTML/SCSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiimi;
