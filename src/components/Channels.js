function Channel({image, name}) {
  return (
    <div className="channel">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default Channel