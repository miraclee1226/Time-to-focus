/* eslint-disable no-loop-func */
import React, {useState} from 'react';
import moment from 'moment';
import {HiChevronLeft} from 'react-icons/hi';
import {HiChevronRight} from 'react-icons/hi';


function Calender() {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  function calenderArr () {
    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++ ) {
      result = result.concat(
        <tr key={week}>
          {
            Array(7).fill(0).map((data, index) => {
              let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

              if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td key={index} style={{backgroundColor: '#909fa6'}}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else if(days.format('MM') !== today.format('MM')) {
                return (
                  <td key={index} style={{backgroundColor: '#C0C0C0'}}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })
          }
        </tr>
        )
    }
    return result;
  }
  
  return (
    <div className='calender'>
      <div className='calenderHeader'>
        <HiChevronLeft onClick={()=> { setMoment(getMoment.clone().subtract(1, 'month')) }} className="hichevronLeftIcon hichevronIcon"/>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <HiChevronRight onClick={()=> { setMoment(getMoment.clone().add(1, 'month'))}} className="hichevronRightIcon hichevronIcon"/>
      </div>
      <div className='calenderWeek'>
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <table className='calenderTable'>
        <tbody>
          {calenderArr()}
        </tbody>
      </table>
    </div>
  );
}



export default Calender;
