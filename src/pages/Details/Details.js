import React from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import HostName from "../../components/HostName/HostName";
import HostPicture from "../../components/HostPicture/HostPicture";
import Rating from "../../components/Rating/Rating";
import NotFound from "../../pages/NotFound/NotFound";

function Details() {
    const { id } = useParams();

    const appart = data.find((appart) => appart.id === id);
    if (appart === undefined) {
        return <NotFound />;
    } else {
        return (
            <section className="detailsContainer">
                <div className="carouselContainer">
                    <Carousel pictures={appart.pictures} />
                </div>
                <div className="basicInfos">
                    <div className="leftBasicInfos">
                        <h2 className="detailsTitle">{appart.title}</h2>
                        <p className="detailsLocation">{appart.location}</p>
                        <div className="tagContainer">
                            <Tag />
                        </div>
                    </div>
                    <div className="rightBasicInfos">
                        <div className="hosterInfos">
                            <HostName hostName={appart.host.name} />
                            <HostPicture src={appart.host.picture} />
                        </div>
                        <Rating rating={appart.rating} />
                    </div>
                </div>
                <div className="collapseGlobal">
                    <Collapse content={appart.description} label="Description">
                    </Collapse>
                    <Collapse list={appart.equipments} label="Équipements">
                    </Collapse>
                </div>
            </section>
        );
    }
}

export default Details;
