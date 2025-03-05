"use client"
import { createContext, useContext, useState, ReactNode } from "react"
interface ClientContextType {
  clientId: string
  setClientId: (id: string) => void
}
const ClientContext = createContext<ClientContextType | undefined>(undefined)
export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [clientId, setClientId] = useState<string>("")
  return (
    <ClientContext.Provider value={{ clientId, setClientId }}>
      {children}
    </ClientContext.Provider>
  )
}
export const useClient = () => {
  const context = useContext(ClientContext)
  if (!context) {
    throw new Error("useClient должен использоваться внутри ClientProvider")
  }
  return context
}
