import { useRouter } from 'next/router'
import React from 'react'

function notFound() {
  const router = useRouter

  React.useEffect(() => {
    router.replace("/")
  })

  return null
}

export default notFound