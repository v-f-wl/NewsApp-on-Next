const Label = ({id, type, label, setValue, newValue}) => {

  const changeValue = (e) => {
    setValue(prev => {
        const data = {...prev}
        data[id] = e.target.value
        return data
    })
}
  return ( 
    <label className='flex flex-col gap-2'>
      <span className='text-lg font-semibold text-slate-500'>{label}</span>
      <input 
        value={newValue || ' '} 
        onChange={(e) => changeValue(e)} 
        id={id} type={type} 
        className='border w-[300px] p-2 rounded-lg outline-none'
      />
    </label>
  );
}
 
export default Label;