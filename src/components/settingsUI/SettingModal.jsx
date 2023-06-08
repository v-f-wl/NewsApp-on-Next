const SettingModal = ({children, isOpen}) => {
  return ( 
    <div 
      className={`
        ${isOpen ? 'flex' : 'hidden'}
        absolute 
      bg-slate-600 
        bg-opacity-50 
        inset-0 
        items-center 
        justify-center
      `}
    >
      {children}
    </div>
  );
}
 
export default SettingModal;