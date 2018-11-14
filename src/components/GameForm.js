import React from 'react';

const tags = [
  {_id: 1, name: "dice"},
  {_id: 2, name: "economic"},
  {_id: 3, name: "family"}
];

const genres =[
  {_id: 1, name: "abstract"},
  {_id: 2, name: "euro"},
  {_id: 3, name: "ameritrash"}
];

class GameForm extends React.Component {

  state = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    players: '',
    featured: false,
    tags: [],
    genre: 1,
    publisher: 0
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }

  handleStringChange = e =>
    this.setState({ [e.target.name]: e.target.value });
  handleNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value,10)});
  handleCheckboxChange = e =>
    this.setState({ [e.target.name]: e.target.checked });
  toggleTag = tag =>
    this.state.tags.includes(tag._id)
      ? this.setState({ tags: this.state.tags.filter(id => id !== tag._id ) })
      : this.setState({ tags: [...this.state.tags, tag._id]})
  handleGenreChange = genre => {this.setState({ genre: genre._id }); console.log(genre, this.state.genre);};

  render(){
    return(
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Game Title</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="full game title"
              value ={this.state.name}
              onChange={this.handleStringChange}
            />
          </div>

          <div className="field">
            <label htmlFor="description">Game Description</label>
            <textarea
              type="text"
              id="description"
              name="description"
              placeholder="full game description"
              value ={this.state.description}
              onChange={this.handleStringChange}
            />
          </div>

          <div className="three fields">
            <div className="field">
              <label htmlFor="price">Price (in cents)</label>
              <input
                type="number"
                id="price"
                name="price"
                value ={this.state.price}
                onChange={this.handleNumberChange}
              />
            </div>
            <div className="field">
              <label htmlFor="duration">Duration (in min)</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value ={this.state.duration}
                onChange={this.handleNumberChange}
              />
            </div>
            <div className="field">
              <label htmlFor="players">Players</label>
              <input
                type="text"
                id="players"
                name="players"
                value ={this.state.players}
                onChange={this.handleStringChange}
              />
            </div>
          </div>

          <div className="inline fields">
            <input
              id="featured"
              name="featured"
              type="checkbox"
              checked={this.state.featured}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="featured">Featured?</label>
          </div>

          <div className="field">
            <label>Tags </label>
            {
              tags.map(tag=> (
                <div key={tag._id} className="inline fields">
                  <input
                    id={`tag-${tag._id}`}
                    type="checkbox"
                    checked={this.state.tags.includes(tag._id)}
                    onChange={ () => this.toggleTag(tag)}
                  />
                  <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
                </div>

              ))
            }
          </div>

          <div className="field">
            <label>Genres</label>
            {
              genres.map(genre => (
                <div key={genre._id} className="inline field">
                  <input
                    id={`genre-${genre._id}`}
                    type="radio"
                    checked={this.state.genre === genre._id}
                    onChange={() => this.handleGenreChange(genre)}
                  />
                  <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
                </div>
              ))
            }
          </div>

          <div className="field">
            <label>Publisher</label>
            <select
              name="publisher"
              value={this.state.publisher}
              onChange={this.handleNumberChange}
            >
              <option value="0">Choose publisher</option>
              {this.props.publishers.map(publisher => (
                  <option value={publisher._id} key={publisher._id}>{publisher.name}</option>
              ))}
            </select>
          </div>

          <button className="ui button" type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default GameForm;
