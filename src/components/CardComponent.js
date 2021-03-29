import React, { Component } from 'react';
import './CardComponent.css'

function CardComponent(props) {
        return (
            <div>
                <a class="link-card" target="_blank" href={`${props.link}`}>
                <div class="card story-card text-black">
                <div class="card-content">
                <h3>{props.title}</h3>
                <div class="bottom-card">
                <p class="webcastDate">{props.date}</p>
                <img src={`./images/${props.icon}`} alt="" />
                </div>
                </div>
                </div>
                </a>
            </div>
        )
}

export default CardComponent
