
import React from 'react';

const Featured = ({ featured, toggleFeatured, gameId }) => (
  <span>
    {
      featured ? (
        <a onClick={() => toggleFeatured(gameId)} className="ui right yellow corner label">
          <i className="star icon" />
        </a>
      ) : (
        <a onClick={() => toggleFeatured(gameId)} className="ui right corner label">
          <i className="empty star icon" />
        </a>
      )

    }
  </span>
)

export default Featured;
