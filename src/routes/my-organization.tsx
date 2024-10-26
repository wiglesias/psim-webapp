import api from "../services/api.ts"
import { useEffect, useState } from "react"

type ApiOrganizations = Awaited<ReturnType<typeof api.getMyOrganizations>>['organizations']

function MyOrganizations() {
  const [myOrganizations, setMyOrganizations] = useState<ApiOrganizations>([])
  useEffect(() => {
    api.getMyOrganizations().then(({ organizations }) => {
        setMyOrganizations(organizations)
    })
}, [])

  return (
    <>
      <h1>Select an organization</h1>
      {myOrganizations.map(org => <button key={org.id}>{org.name}</button>)}
    </>
  )
}

export default MyOrganizations