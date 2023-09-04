"use client"
import { useState } from "react"
import SearchTarget from "@/components/search-target"
import GeneratedTable from "@/components/generated-table"
import { useSession } from "next-auth/react"

const HomePage = () => {
  const { data: session, status } = useSession()
  const [data, setData] = useState([])

  const getIndexOfK = (arr: number[][], k: number) => {
    for (let i = 0; i < arr.length; i++) {
      const index = arr[i].indexOf(k)
      if (index > -1) {
        return [i + 1, index + 1]
      }
    }
    return false
  }

  return (
    <div>
      <GeneratedTable data={data} setData={setData} />
      <SearchTarget
        onSearch={async (target: number, callback: any) => {
          const result = getIndexOfK(data, +target)
          const storeData = await fetch(
            "https://matrixapi.frackment.id/api/matrix",
            {
              method: "POST",
              body: {
                m: data,
                n: +target,
                result: result ? result.join(", ") : false,
              },
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user.token}`,
              },
            }
          )
          callback(result)
        }}
      />
    </div>
  )
}

export default HomePage
