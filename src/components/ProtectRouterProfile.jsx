import { Navigate, useLocation, useParams } from 'react-router-dom'
import Profile from '../pages/Profile'

function ProtectRouterProfile() {
  const token = localStorage.getItem("token")
  const userId = useParams()
  const location = useLocation()

  if (!token) {
    return (
      <>
        <Profile />
        <Navigate to={`/profile/${userId.user}/product`} replace />
      </>
    )
  }

  return <>
    <Profile />
    <Navigate to={`${location.pathname}`} replace />
  </>
}

export default ProtectRouterProfile

/**
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Desktop from '../layout/Desktop'

function protectRouterDesktop() {
  const token = localStorage.getItem("token")
  const idUser = useParams()
  if (!token) {
    return <Navigate to={`/profile/${idUser.user}/product`} replace />
  }

  return <Navigate to={`/profile/${idUser.user}/desktop`} replace />
}

export default protectRouterDesktop
 */