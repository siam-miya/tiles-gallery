import { Spinner } from "@heroui/react"


const Loading = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <Spinner color="warning" size="lg" />
      <p className="text-gray-500 font-medium animate-pulse">Tiles Gallery Loading...</p>
    </div>
  )
}

export default Loading
