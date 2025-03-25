"use client";

interface MenuButtonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const MenuButton = ({open, setOpen}: MenuButtonProps) => {
  
  return (
    <div 
      className="flex flex-col gap-1 mr-2 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
      onClick={() => setOpen(!open)}
    >
      <div className={open ? "w-5 h-0.5 bg-black dark:bg-blue-500" : "w-5 h-0.5 bg-black dark:bg-blue-500"}></div>
      <div className={open ? "w-5 h-0.5 bg-black dark:bg-blue-500" : "w-5 h-0.5 bg-black dark:bg-blue-500"}></div>
      <div className={open ? "w-5 h-0.5 bg-black dark:bg-blue-500" : "w-5 h-0.5 bg-black dark:bg-blue-500"}></div>
    </div>
  )
}   

export default MenuButton