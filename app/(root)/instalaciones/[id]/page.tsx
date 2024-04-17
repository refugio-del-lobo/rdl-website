import React from "react"

const GalleryPage = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div>GalleryPage</div>
      <div>Params id: {params.id}</div>
    </>
  )
}

export default GalleryPage
