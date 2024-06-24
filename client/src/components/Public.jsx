import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import IssueList from './IssueList.jsx'

export default function Public(){

  const {getAllIssues, allIssues} = useContext(UserContext)

  useEffect(() => {
    getAllIssues()
  }, [])


  return (
    <div className="public">
      <h1>All Issues!</h1>
      <IssueList issues={allIssues}/>
    </div>
  )
}