import React from "react"

import Recorder from "voice-recorder-react"
import VoiceRecorder from "./components/VoiceRecorder"

const App = () => {
  return (
    <div>
      <h1>Voice Recorder</h1>
      <div>
        <Recorder Render={VoiceRecorder} />
      </div>
    </div>
  )
}

export default App
