import React from 'react';

interface types{
    startDate: string,
    endDate: string,
    title: string,
    company: string 
}

const Card = ({ startDate, endDate, title, company }: types) => {
    return (
        <div className="bg-cards p-6 rounded-lg shadow-lg w-70">
          <div className="text-sm text-accent">
            {startDate} - {endDate}
          </div>
          <div className="text-lg font-semibold text-white mt-2">
            {title}
          </div>
          <div className="mt-4 text-gray-400">
            <span className="text-accent">•</span> {company}
          </div>
        </div>
      );
  }

export default Card;