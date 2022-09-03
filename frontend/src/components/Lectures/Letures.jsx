import { Nabvar } from "../Navbar/Navbar"
import "./Lectures.css"
export const Lectures=()=>{
    return(
        <div>
            <Nabvar/>
            <div className="lec">
                <p>Lectures</p>
            </div>
            <div className="lec-content">
                <div className="lec-sub">
                    <p>Thrive Regular Standup <span className="live">LIVE</span></p>
                    <p><span>Swanand Kadam</span>  Scheduled <span>Coading</span>  at <span>10 Aug, 22 </span> - <span> 12:30 pm</span></p>
                </div>
                <button className="present">Present</button>
            </div>
            <div className="lec-content">
                <div className="lec-sub">
                    <p>scrum 09.08.2022 <span className="live">LIVE</span></p>
                    <p><span>Nrupul</span>  Scheduled <span>Scrum</span>  at <span>9 Aug, 22 </span> - <span> 9:00 am</span></p>
                </div>
                <button className="apsent">Absent</button>
            </div>
            <div className="lec-content">
                <div className="lec-sub">
                    <p>Weekly connect call <span className="live">LIVE</span></p>
                    <p><span>Yogesh</span>  Scheduled <span>Scrum</span>  at <span>7 Aug, 22 </span> - <span> 12:00 pm</span></p>
                </div>
                <button className="apsent">Absent</button>
            </div>
            <div className="lec-content">
                <div className="lec-sub">
                    <p>Thrive Regular Standup <span className="live">LIVE</span></p>
                    <p><span>Swanand Kadam</span>  Scheduled <span>Scrum</span>  at <span>1 Aug, 22 </span> - <span> 11:00 am</span></p>
                </div>
                <button className="apsent">Absent</button>
            </div>
        </div>
    )
}