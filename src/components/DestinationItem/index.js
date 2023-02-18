// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {name, imgUrl} = destinationsDetails
  return (
    <li className="list-container">
      <img src={`${imgUrl}`} alt={`${name}`} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
