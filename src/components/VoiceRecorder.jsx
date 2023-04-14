import { Button } from "@material-tailwind/react"
import React, { useRef, useState, useEffect } from "react"
import { useRecorder } from "voice-recorder-react"

import Header from "../ui/Header"

import { HiMicrophone } from "react-icons/hi"

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
    <div className='mt-[50px] flex items-center justify-center'>
      <div className='bg-gray-100 px-[30px] w-[340px] h-[600px] rounded-md'>
        <Header />
        <Button
          className='w-full mt-10'
          onClick={() => {
            if (recording) {
              stop()
              setHasRecording(true)
            } else {
              start()
              setHasRecording(false)
            }
          }}
        >
          {recording ? "Stop" : "Start"}
        </Button>
        {recording && (
          <>
            <Button
              className='mt-5 mb-2'
              onClick={() => {
                if (recording) {
                  if (paused) resume()
                  else pause()
                }
              }}
            >
              {paused ? "Resume" : "Pause"}
            </Button>
            <p className='text-xl'>
              Record Time:
              <span className='ml-1[px] font-bold'>
                {time.h}:{time.m}:{time.s}
              </span>
            </p>
          </>
        )}

        {!recording && hasRecording && (
          <>
            <Button className='mt-5' onClick={togglePlay}>
              Play/Pause
            </Button>
          </>
        )}

        <audio ref={audioRef} hidden />
      </div>
    </div>
  )
}
