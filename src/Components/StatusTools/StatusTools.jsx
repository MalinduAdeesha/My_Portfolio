import React from 'react'
import vscode from '../Assets/icons8-visual-studio-code-48.png'
import intellij from '../Assets/icons8-intellij-idea-48.png'
import reactnative from '../Assets/icons8-react-native-50.png'
import vue from '../Assets/icons8-vue-js-64.png'
import postman from '../Assets/icons8-postman-is-the-only-complete-api-development-environment-24.png'
import figma from '../Assets/icons8-figma-48.png'
import xd from '../Assets/icons8-adobe-xd-48.png'
import bootstrap from '../Assets/icons8-bootstrap-48.png'
import opera from '../Assets/icons8-opera-48.png'
import github from '../Assets/icons8-github-64.png'
import vite from '../Assets/icons8-vite-48.png'

const StatusTools = () => {
  return (
    <div>
        <div className='grid items-center justify-center grid-cols-3 '>
            <img src={vscode} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={intellij} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={reactnative} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={vue} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={figma} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={xd} alt="" className='px-10 py-5 w-[130px] h-[100px]'/>
            <img src={bootstrap} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={postman} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={github}alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={opera} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
            <img src={vite} alt="" className='px-9 py-5 w-[130px] h-[100px]'/>
        </div>
    </div>
  )
}

export default StatusTools