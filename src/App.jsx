import React from "react"

import Recorder from "voice-recorder-react"
import VoiceRecorder from "./components/VoiceRecorder"

import Footer from "./ui/Footer"

const App = () => {
  return (
    <div>
      <div>
        <Recorder Render={VoiceRecorder} />
        <Footer />
      </div>
    </div>
  )
}

export default App
