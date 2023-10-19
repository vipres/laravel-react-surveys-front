"use client"
import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import SurveyListItem from './SurveyListItem';


const Survey = () => {
    const {surveys} = useStateContext()
    //console.log(surveys);

    const onDeleteClick = (e) => {
        e.preventDefault()
        console.log('on Delete click')
    }
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {surveys.map((survey) => (
            <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
        ))}
    </div>
  )
}

export default Survey
