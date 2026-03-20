import React from 'react'
import ResumeMain from './components/ResumeMain'
import Logo from '../../components/Logo';

const ResumePage = () => {
  return (
    <main className="resume-page-wrapper">
      <Logo />
      <ResumeMain />
      {/* Future components like <ResumeTips /> or <ResumeFooter /> go here */}
    </main>
  )
}

export default ResumePage