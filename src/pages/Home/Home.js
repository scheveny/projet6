import React from "react";
import bgHome from "../../assets/bg_title_home.png";
import Card from "../../components/Card/Card";
import data from "../../data/data.json"
import "./Home.scss";

function Home() {
    const cardList = data.map((data) => (
        <Card key={data.id} data={data} />
    ));

    return (
        <section id="homeContent">
            <div id="homeTitle">
                <img src={bgHome} alt="Fond de titre du site" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div id="cardList">
                {cardList}
            </div>
        </section>
    );
}

export default Home;