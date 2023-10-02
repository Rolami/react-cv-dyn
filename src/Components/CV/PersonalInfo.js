import React from 'react';

function PersonalInfo({ data }) {
  return (
    <div className="personal-info">
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Address: {data.address}</p>
    </div>
  );
}

export default PersonalInfo;