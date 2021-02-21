export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //we use props.date.getDay() as an index to get the name of the day of the week
  let weekDay = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;
  return (
    <div>{weekDay} {hours}:{minutes}</div>
  )
}