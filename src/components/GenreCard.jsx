const GenreCard = (props) => {

  return (
    <div className="card" key={props.id} onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.gameCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
