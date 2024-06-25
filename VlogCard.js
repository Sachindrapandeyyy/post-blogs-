import React from 'react';

const VlogCard = ({ vlog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <video controls className="w-full h-48 object-cover">
        <source src={vlog.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-4">
        <h2 className="text-xl font-bold">{vlog.title}</h2>
        <p className="text-gray-600">{vlog.description}</p>
      </div>
    </div>
  );
};

export default VlogCard;
