const ProfileTitle = ({title}) => {
  return ( 
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-xl lg:text-2xl capitalize text-slate-500">
        {title}
      </h2>
      <hr />
    </div>
  );
}
 
export default ProfileTitle;