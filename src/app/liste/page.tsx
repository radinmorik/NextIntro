"use client"

const getList: any = async () => {
  const response: await fetch ('localhost:3000/api/liste')
  const myJson = await response.json()
  return myJson
}

export default function ResponsePage() {

  return (
    <div>
      <p>Liste = {getList}</p>
    </div>
  )
}