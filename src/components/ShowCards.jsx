function ShowCards({img, name, time,place,age, ticket}) {
  return (
    <div className="bg-color-grey-800 flex items-center gap-5 my-5 rounded-md cursor-pointer hover:shadow-sm hover:px-4 transition-all duration-500">
      <div className="showcard-img ">
        <img src={img} alt="show-image w-full" />
      </div>
      <div className="content w-3/5 py-5 flex flex-col lg:gap-3">
        <h2 className="show-name-time text-lg font-semibold lg:text-2xl">{name} {time}</h2>
        <p className="show-place text-sm lg:text-xl">{place}</p>
        <div className="show-tags flex gap-4">
          <div className="tag age bg-white px-1 rounded-sm text-blue-400">{age}</div>
          <div className="ticket bg-white px-1 rounded-sm text-blue-400">{ticket}</div>
        </div>
      </div>
    </div>
  )
}

export default ShowCards
