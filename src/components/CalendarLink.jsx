
function CalendarLink({img, text}) {
  return (
    <div className="bg-color-grey-800 py-3 flex flex-col justify-center items-center gap-3 w-28 rounded-md">
      <div className="calendarlink-img mx-auto">
        <img src={img} alt="calendar-image" />
      </div>
      <p className="calendar-para font-semibold text-white">{text}</p>
    </div>
  )
}

export default CalendarLink
