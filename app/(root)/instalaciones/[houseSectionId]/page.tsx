import React from "react"

type Params = {
  params: {
    houseSectionId: string
  }
}

export function generateStaticParams() {
  return [
    { houseSectionId: "habitaciones" },
    { houseSectionId: "banos" },
    { houseSectionId: "livings" },
    { houseSectionId: "quincho" },
    { houseSectionId: "cocina" },
    { houseSectionId: "fogoneros" },
    { houseSectionId: "playita" },
    { houseSectionId: "invernadero" },
    { houseSectionId: "deck" },
    { houseSectionId: "zona-deportiva" },
    { houseSectionId: "matera" },
  ]
}

export default function HouseSectionPage({
  params: { houseSectionId },
}: Params) {
  return (
    <>
      <div>HouseSectionPage</div>
      <div>{houseSectionId}</div>
    </>
  )
}
