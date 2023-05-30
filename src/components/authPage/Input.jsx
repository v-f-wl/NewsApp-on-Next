'use client'

const Input = ({
  id,
    label,
    type,
    disabled,
    formatPrice,
    required,
    register,
    errors,
    pas
}) => {
  return ( 
    <div className="w-full relative">
            <input 
                id={id} 
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                autoComplete={pas || ''}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
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