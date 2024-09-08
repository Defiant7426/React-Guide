
type CaloryDisplayProps = {
      calories: number,
      text: string
    }

export default function CaloryDisplay({calories, text}: CaloryDisplayProps) {
  return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className="font-black text-6xl text-lime-400">{calories}</span>
            {text}
        </p>
  )
}