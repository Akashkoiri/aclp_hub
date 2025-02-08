"use client"

import { DataTable } from "./dataTable"
import { useQuery } from "@tanstack/react-query"
import { getStudnets } from "@/server/students"


export default function Students() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["students"],
        queryFn: getStudnets
    })

    if (isLoading) return <div className="container m-auto mt-8 min-h-3.5"><span>Loading...</span></div>
    if (error) return <div className="container m-auto mt-8 min-h-3.5"><span>{error.message}</span></div>

    return (
        <div className="container m-auto mt-8 min-h-3.5">
            <DataTable data={data} />
        </div>

    )
}

