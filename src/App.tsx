import { Suspense } from "react"
import { Navigation } from "./navigation/Navigation"

export const App = () => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <Navigation />
    </Suspense>
  )
}
