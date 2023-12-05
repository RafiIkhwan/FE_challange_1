export default function Container({ children }) {
  return (
    <div className="sm:px-14 px-8 max-w-[1280px] w-full mx-auto box-border">
      {children}
    </div>
  )
}