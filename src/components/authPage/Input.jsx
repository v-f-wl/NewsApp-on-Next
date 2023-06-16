'use client'

const Input = ({
  id,
  label,
  type,
  formatPrice,
  pas,
  setValue,
}) => {

  const changeValue = (e) => {
    setValue(prev => {
      const data = { ...prev }
      data[id] = e.target.value
      return data
    })
  }
  return (
    <div className="w-full relative">
      <input
        id={id}
        placeholder=" "
        type={type}
        onChange={(e) => changeValue(e)}
        autoComplete={pas || ''}
        className={`
            peer
            w-full
            p-4
            pr-11
            pt-6
            font-light
            bg-white
            rounded-md
            outline-none
            border
            transition
            disabled:opacity-70
            disabled:cursor-not-allowed
            ${formatPrice ? 'pl-9' : 'pl-4'}
        `}
      />
      <label
        className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    ${formatPrice ? 'left-9' : 'left-4'}
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    text-zinc-400
                `}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;