const Tags = ({value, disabled, toggle}) => {
  return ( 
    <div 
      onClick={() => toggle(value)}
      className={`
        ${disabled ? 'bg-orange-400' : ''}
        ${disabled ? 'text-white' : ''}
        py-1 
        px-2 
        border 
        rounded-full 
        cursor-pointer
      `}
      >
      {value}
    </div>
  );
}
 
export default Tags;