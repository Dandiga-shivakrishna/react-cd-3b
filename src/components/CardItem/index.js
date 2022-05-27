import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li>
      <li className={className}>
        <div className="user-card-container">
          <h1 className="user-name"> {title} </h1>
          <p className="user-designation"> {description} </p>
          <div className="img-style">
            <img src={imgUrl} className="avatar" alt={title} />
          </div>
        </div>
      </li>
    </li>
  )
}
export default CardItem
