export const CheckIcon = ({ variant }: { variant: "good" | "bad" }) => {
  const isGood = variant === "good"

  return (
    <span
      className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full font-montserrat text-[10px] font-black leading-none text-white sm:size-5 sm:text-xs ${
        isGood ? "bg-[#25a85a]" : "bg-[#e72733]"
      }`}
    >
      {isGood ? "✓" : "×"}
    </span>
  )
}