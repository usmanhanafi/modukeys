const ButtonPrimary = ({ children, ...props }) => {
  return (
    <button {...props} className="py-2.5 px-5 font-medium text-sm bg-black">
      {children}
    </button>
  );
};

export default ButtonPrimary;
