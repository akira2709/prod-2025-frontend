import { Children } from "@/shared/models/chilren.js"
import "./global.css"
import { QueryProvider } from "@/shared/api/query-client"
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
       	</QueryProvider>
      </body>
    </html>
  )
}
export default RootDefault
