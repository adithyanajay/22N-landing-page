function ShowCards({img, name, time,place,age, ticket}) {
  return (
    <div className="bg-color-grey-800 flex items-center gap-5 my-5 rounded-md">
      <div className="showcard-img ">
        <img src={img} alt="show-image w-full" />
      </div>
      <div className="content w-3/5">
        <h2 className="show-name-time text-lg font-semibold">{name} {time}</h2>
        <p className="show-place">{place}</p>
        <div className="show-tags flex">
          <div className="tag age">{age}</div>
          <div className="ticket">{ticket}</div>
        </div>
      </div>
    </div>
  )
}

export default ShowCards
