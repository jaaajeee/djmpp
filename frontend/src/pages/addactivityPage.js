import React from 'react'
import AddActivities from '../components/exercise-form/add-exercise'
import Profile from '../components/profile'

export default function AddactivityPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 mt-2">
          <Profile />
        </div>
          <AddActivities />
        </div>
    </div>
  )
}
