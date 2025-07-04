function User({image, name}) {
  return (
    <div className="user">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}

export default User