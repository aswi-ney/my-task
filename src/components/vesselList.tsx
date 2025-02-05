"use client"

import { useState } from "react"
import { Search, Filter, MoreVertical } from "lucide-react"
import type { Vessel } from "@/types/vessel"

const vesselData: Vessel[] = [
  {
    id: 1,
    vesselName: "MV.SS.KOU LUNG",
    voyNo: "24033",
    eta: "23.07.24 23:55",
    etb: "24.07.24",
    nextPort: "INUMUN",
    vesselOperator: "Uni Feeder",
    agent: "Uni Feeder",
    service: "PIC 01",
    loa: "193M",
    status: "Expected",
  },
  {
    id: 2,
    vesselName: "Vessel 2",
    voyNo: "Voy 2",
    eta: "2024-03-16",
    etb: "2024-03-17",
    nextPort: "Port 2",
    vesselOperator: "Operator 2",
    agent: "Agent 2",
    service: "Service 2",
    loa: "150m",
    status: "Expected",
  },
  {
  id: 3,
    vesselName: "Vessel 3",
    voyNo: "Voy 2",
    eta: "2024-03-16",
    etb: "2024-03-17",
    nextPort: "Port 2",
    vesselOperator: "Operator 2",
    agent: "Agent 2",
    service: "Service 2",
    loa: "150m",
    status: "Expected",
  },
  {
    id: 4,
      vesselName: "Vessel 4",
      voyNo: "Voy 2",
      eta: "2024-03-16",
      etb: "2024-03-17",
      nextPort: "Port 2",
      vesselOperator: "Operator 2",
      agent: "Agent 2",
      service: "Service 2",
      loa: "150m",
      status: "Expected",
    },
    {
      id: 5,
        vesselName: "Vessel 5",
        voyNo: "Voy 2",
        eta: "2024-03-16",
        etb: "2024-03-17",
        nextPort: "Port 2",
        vesselOperator: "Operator 2",
        agent: "Agent 2",
        service: "Service 2",
        loa: "150m",
        status: "Expected",
      },
      {
        id: 6,
          vesselName: "Vessel 6",
          voyNo: "Voy 2",
          eta: "2024-03-16",
          etb: "2024-03-17",
          nextPort: "Port 2",
          vesselOperator: "Operator 2",
          agent: "Agent 2",
          service: "Service 2",
          loa: "150m",
          status: "Expected",
        },
]

export function VesselList() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-y border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vessel Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Voy No
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETA</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ETB</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Port
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vessel Operator
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LOA</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vesselData.map((vessel) => (
                <tr key={vessel.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{vessel.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{vessel.vesselName}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.voyNo}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.eta}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.etb}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.nextPort}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.vesselOperator}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.agent}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.service}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{vessel.loa}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-50 text-yellow-600 border border-yellow-300">
                      {vessel.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t">
          <p className="text-sm text-gray-500">0 of 100 row(s) selected.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Rows per page:</span>
              <select className="border border-gray-200 rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
            <span className="text-sm text-gray-500">Page 1 of 10</span>
            <div className="flex gap-2">
              <button className="p-1 rounded border border-gray-200 hover:bg-gray-50">&lt;</button>
              <button className="p-1 rounded border border-gray-200 hover:bg-gray-50">&gt;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

