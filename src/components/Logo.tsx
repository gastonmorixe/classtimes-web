import * as React from "react"
import LOGO from "../assets/logo.svg"

interface ILogoProps {
  height?: number
}

export const Logo: React.FC<ILogoProps> = (props) => {
  const { height } = props
  return (
    <img src={LOGO} alt="ClassTimes Logo" title="ClassTimes" height={height} />
  )
}
