import { calendar_info } from "../constants"
import CalendarLink from "./CalendarLink"

function CalendarLinks() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Zoek evenementen</h2>
      <div className="calendar-links w-full flex justify-around items-center">
        {
            calendar_info.map((data, key)=> {
                return(<CalendarLink img={data.img} text={data.text} key={key} />)
            })
        }
      </div>
    </div>
  )
}

export default CalendarLinks
