export default function Button({ className, children }) {
  return (
    <button className={`${className} px-6 rounded-md`}>{children}</button>
  )
}