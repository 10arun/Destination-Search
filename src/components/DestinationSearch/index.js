// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-bar-container">
            <input
              type="search"
              placeholder="search"
              onChange={this.onChangeInput}
              value={searchInput}
              className="search-bar"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-logo"
            />
          </div>
          <ul className="ui-container">
            {searchResults.map(eachRes => (
              <DestinationItem key={eachRes.id} destinationsDetails={eachRes} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
