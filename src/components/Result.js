import React, { Component } from 'react';
import './Result.css';
import ResourceSection from './ResourceSection'

function Result(props) {
    // console.log(props.data[0].id);
    // props.data.map(singleData => {

    // })
        return (
            <div>
                {props.data.map(singleData => {
                    if(singleData.length > 0){
                        return <ResourceSection data={singleData} type={singleData[0] ? singleData[0].type : ''} title={singleData[0] ? singleData[0].type : ''} icon={singleData[0] ? singleData[0].icon : ''}/>
                    }
                    else{
                        return
                    }
                   
    })}
                {/* <ResourceSection title="Webcast" icon="pc"/>
                <ResourceSection/>
                <ResourceSection/>
                <ResourceSection/>
                <ResourceSection/>
                <ResourceSection/>
                <ResourceSection/>
                <ResourceSection/> */}
            </div>
        )
}

export default Result
