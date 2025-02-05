export interface Vessel {
    id: number
    vesselName: string
    voyNo: string
    eta: string
    etb: string
    nextPort: string
    vesselOperator: string
    agent: string
    service: string
    loa: string
    status: "Expected" | "In Port" | "Departed"
  }
  
  