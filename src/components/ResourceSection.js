import React, { Component } from 'react';
import './ResourceSection.css';
import CardComponent from './CardComponent'

function ResourceSection(props) {
    console.log(props);
        return (
            <div className="cards">
            <div className="icon-group">
            <img class="icons" src={`./images/${props.icon}`} alt=""/>
            <h2>{props.title}</h2>
            </div>
            <div class="card-container">
                 {props.data.map(subData => {
                    return<CardComponent title={subData.title} date={subData.date} icon={subData.icon} link={subData.link}/>
                    })
                }


                {/* <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/> */}
                </div>
            </div>
        )
}

export default ResourceSection
