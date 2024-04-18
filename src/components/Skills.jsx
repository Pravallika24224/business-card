import React from 'react'
import IconsWithText from './IconsWithText'
import css from '../assets/skills/css.png'
import express_js from '../assets/skills/express_js.png'
import graphql from '../assets/skills/graphql.png'
import html from '../assets/skills/html.png'
import javascript from '../assets/skills/javascript.png'
import mongodb from '../assets/skills/mongodb.jpg'
import Next_js from '../assets/skills/Next_js.png'
import node_js from '../assets/skills/node_js.png'
import react_js from '../assets/skills/react_js.png'

const Skills = () => {
  return (
    <div>
      <p className='text-red-400 text-2xl mb-4'>Skills</p>

      <div className='flex flex-col text-center'>
        <div className='flex flex-row '>
          <IconsWithText icon={html} text="HTML" />
          <IconsWithText icon={css} text="CSS" />
          <IconsWithText icon={javascript} text="Javascript" />
        </div>
        <div className='flex flex-row'>
          <IconsWithText icon={react_js} text="ReactJs" />
          <IconsWithText icon={node_js} text="NodeJs" />
          <IconsWithText icon={Next_js} text="NextJs" />
        </div>
        <div className='flex flex-row'>
          <IconsWithText icon={mongodb} text="MongoDB" />
          <IconsWithText icon={graphql} text="Graphql" />
          <IconsWithText icon={express_js} text="ExpressJs" />
        </div>
      </div>
    </div>
  )
}

export default Skills