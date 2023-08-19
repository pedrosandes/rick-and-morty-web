export default function Information({label, value}: { label: string, value: string}) {
  return (
    <div className="py-3 mx-3 border-b-2">
      <p className="font-bold mb-1">{label}</p>
      <p className="text-sm text-gray-500">{value}</p>
    </div>
  )
}
