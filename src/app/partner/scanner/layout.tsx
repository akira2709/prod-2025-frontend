import { ClientProvider } from "@/shared/context"
export default function ScannerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientProvider>{children}</ClientProvider>
}
