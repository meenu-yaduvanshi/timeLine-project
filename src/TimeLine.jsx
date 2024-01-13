import "./App.css"
const TimeLine = (props) => {
  return (
    <div className="div-con">
      <h4 className="year">{props.year}</h4>
      <p>{props.event}.</p>
    </div>
  )
}

export default TimeLine