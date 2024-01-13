import TimeLine from "./TimeLine";
import events from "./events.json"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  return (<div>
    <h1 className="header">TimeLine</h1>
    {events.map(event => {
      return <TimeLine year={event.year} event={event.event} key={event.year} />
    })
    }

  </div>)
}
export default App
