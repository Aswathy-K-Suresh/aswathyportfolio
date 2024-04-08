import React from 'react'
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <>
    <Typewriter
      options={{
        strings: ["Full Stack Web Developer", "MEARN Stack Developer", "Asp.Net Developer", "Backend Developer", ".Net Core Developer", "API Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  </>
  )
}

export default Type