import React from "react";

function Experience({ data }) {
    return (
        <div className="experience">
            <h2>Experience</h2>
        {data.map((experienceItem, index) => (
            <div key={index}>

            <p>Company: {experienceItem.company}</p>
            <p>Position: {experienceItem.position}</p>
            <p>Year: {experienceItem.year}</p>
            
            </div>
        ))}
        </div>
    );
}
export default Experience;