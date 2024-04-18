import React from 'react'
import { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import gitHub from '../assets/skills/gitHub.png'
import linkedIn from '../assets/skills/linkedIn.png'
import phone from '../assets/skills/phone.png'


const Footer = () => {
  const [copyStatus, setCopyStatus] = useState(false)
  return (
    <div>
      <div className='flex'>
        <img className="object-scale-down h-6 w-16 cursor-pointer" src={linkedIn} alt="linkedin" onClick={(e) => {
          window.open(`https://www.linkedin.com/in/pravallika-pothireddy-219542228/`, "_blank")
          e.preventDefault();
        }} />
        <img className="object-scale-down h-6 w-16 cursor-pointer" src={gitHub} alt="github" onClick={(e) => {
          window.open(`https://github.com/Pravallika24224?tab=repositories`, "_blank")
          e.preventDefault();
        }} />
        <CopyToClipboard text="+91 9347945530"
          onCopy={() => setCopyStatus(true)}>
        <img className="object-scale-down h-6 w-16 cursor-pointer" src={phone} alt="phone"  />
        </CopyToClipboard>
      </div>
      {copyStatus &&
        <div className="bg-green-100 border border-green-400 text-green-700 px-2 py-1 rounded relative" role="alert">
          <span class="block sm:inline">Copied to clipboard</span>
          <span className="absolute top-0 bottom-0 right-0 px-2 py-1">
            <svg onClick={() => setCopyStatus(false)} className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
      }
    </div>
  )
}

export default Footer