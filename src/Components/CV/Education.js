import React from 'react';

function Education({ data }) {
  return (
    <div className="education">
      <h2>Education</h2>
      {data.map((educationItem, index) => (
        <div key={index}>
          <p>Degree: {educationItem.degree}</p>
          <p>School: {educationItem.school}</p>
          <p>Year: {educationItem.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
