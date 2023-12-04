import React from 'react'

type Props = {
    dateString: string;
  };
  

const DateTimeFormattor = (props: Props) => {

    if (props.dateString) {
        const review_date: any = new Date(props.dateString);
        let hours = parseInt(review_date.getHours());
        if (hours != 12) {
          hours = hours % 12;
        }
        let twelve_hours = review_date.getHours();
        let dateString =
          review_date.getDate() +
          "/" +
          parseInt(review_date.getMonth() + 1) +
          "/" +
          review_date.getFullYear();
        let timeString =
          hours + ":" + review_date.getMinutes() + ":" + review_date.getSeconds();
        let meridium = twelve_hours >= 12 ? "PM" : "AM";
    
        const fullDate = dateString + " " + timeString + " " + meridium;
    
        // / Split the date-time string into parts
        const parts = fullDate.split(/[\s\/:]/);
    
        // Add leading zeros to single-digit components
        const formattedDateTime = `${parts[0].padStart(2, "0")}/${parts[1].padStart(
          2,
          "0"
        )}/${parts[2]} ${parts[3].padStart(2, "0")}:${parts[4].padStart(
          2,
          "0"
        )}:${parts[5].padStart(2, "0")} ${parts[6]}`;
        return <span>{formattedDateTime}</span>;
      }
      return <span>N/A</span>
  
}

export default DateTimeFormattor