import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'
import './calendar.scss'

function calendar() {
    return (
        <div className='Calendar'>
            <ScheduleComponent style={{height: "100vh"}} currentView='Month' >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} ></Inject>
            </ScheduleComponent>
            
        </div>
    )
}

export default calendar