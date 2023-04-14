import React, { useRef, useState, useEffect } from "react"
import { useRecorder } from "voice-recorder-react"

export default function VoiceRecorder(
  { time, stop, data, start, pause, resume, paused, recording } = useRecorder()
) {
  const audioRef = useRef(HTMLAudioElement)
  const [hasRecording, setHasRecording] = useState(false)

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }

  useEffect(() => {
    if (data.url && audioRef.current) {
      audioRef.current.src = data.url
    }
  }, [data.url])

  return (
    <div>
      <div id='controller'>
        <button
          onClick={() => {
            if (recording) {
              stop()
              setHasRecording(true)
            } else {
              start()
              setHasRecording(false)
            }
          }}
          style={{ margin: "10px" }}
        >
          {recording ? "Stop" : "Record"}
        </button>
        {recording && (
          <>
            <button
              onClick={() => {
                if (recording) {
                  if (paused) resume()
                  else pause()
                }
              }}
              style={{ margin: "10px" }}
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <p>
              {time.h}:{time.m}:{time.s}
            </p>
          </>
        )}

        {!recording && hasRecording && (
          <>
            <button onClick={togglePlay}>Play/Pause</button>
          </>
        )}

        <audio ref={audioRef} hidden />
      </div>
    </div>
  )
}
