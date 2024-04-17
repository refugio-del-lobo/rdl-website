import React from 'react'

type Params = {
  params: {
    houseSectionId: string
  }
}

export default function HouseSectionPage({params: {houseSectionId}}: Params) {
  return (
    <>
    <div>HouseSectionPage</div>
    <div>{houseSectionId}</div>
    </>
  )
}

