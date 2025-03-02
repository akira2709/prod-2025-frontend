import { Children } from "@/shared/models/chilren.js"
import "./global.css"
import { QueryProvider } from "@/shared/api/query-client"
import { Toaster } from "sonner"

export const metadata = {
  title: "prod-front",
  theme_color: "#000",
  icons: {},
}

const RootDefault = ({ children }: Children) => {
  return (
    <html lang={"en"} data-theme={"dark"}>
      <body>
        <QueryProvider>
          {children}
          <Toaster
            position={"top-right"}
            toastOptions={{
              style: {
                background: "var(--dark)",
              },
            }}
          />
        </QueryProvider>
      </body>
    </html>
  )
}
export default RootDefault
