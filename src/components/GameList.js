import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';

const GameList = ({ games, toggleFeatured }) => (
	<div className="ui four cards">
		{
			games.length === 0 ? (
				//console.log("no hay juegos")
					<div className="ui icon message">
					  <i className="icon info"></i>
						<div className="content">
							<div className="header">there are no games yet!</div>
							<p>please add!</p>
						</div>
					</div>

			) : (games.map(game => <GameCard game={game} toggleFeatured={toggleFeatured} key={game._id} />))
		}

	</div>
);

GameList.propTypes = {
	games: PropTypes.arrayOf(PropTypes.object).isRequired
};

GameList.defaultProps = {
	games: []
}
export default GameList;
