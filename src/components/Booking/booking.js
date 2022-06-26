import { useState } from 'react';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import Data from './Schedule.json';
import {default as Staff} from './Staff';

export default function Booking() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
        <div className="accordion" id="chapters">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="#selectDate">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#select-Date" aria-expanded="true" aria-controls="select-Date">
                                   <b>Step 1: Select Date </b>
                                </button>
                            </h2>
                            <div id="select-Date" className="accordion-collapse collapse show" aria-labelledby="#selectDate"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    
                                    {/* <div className='calendar-container'>
                                        <Calendar onChange={setDate} value={date}
                                        maxDate={new Date(Date.now()+ 12096e5)} // will not allow date later than today
                                minDate={new Date()} // will not allow date before 1st July 2015
                                />
                                    </div> */}
                                    <p className='text-center'>
                                        <span className='bold'>Selected Date:</span>{' '}
                                        {date.toDateString()}
                                    </p>
                                    <p className='text-center '><i>Scheduling is only available 2 weeks in advance</i></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="selectStaff">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#select-Staff" aria-expanded="true" aria-controls="select-Staff">
                                    <b> Step 2. Select Staff </b>
                                </button>
                            </h2>
                            <div id="select-Staff" className="accordion-collapse collapse" aria-labelledby="selectStaff"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <Staff/>

                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="selectTime">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#select-Time" aria-expanded="false" aria-controls="select-Date">
                                    <b> Step 3. Select Time </b>
                                </button>
                            </h2>
                            <div id="select-Time" className="accordion-collapse collapse" aria-labelledby="selectTime"
                                data-bs-parent="#chapters">
                                <div className="accordion-body">
                                    <p> On {date.toDateString()}, the following time slots follow:</p>
                                    
                                    {((Data[date.getDate()].length)!==0)?
                                    (Data[date.getDate()]).map((time) =>(
                                        <button key={time} type="button" className="btn btn-outline-primary px-3 m-2" ><b>{time}</b></button>
                                    ))
                                    :<p> On {date.toDateString()},We have not available time slots</p>}

                                    <p>Please arrive <b>at least 10 minutes before </b> your scheduled appointment</p>
                                </div>
                            </div>
                        </div>
                    </div>
      
    </div>
  );
}