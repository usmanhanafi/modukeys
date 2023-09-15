const ButtonPrimary = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`py-2.5 px-8 font-medium text-md hover:bg-opacity-75 bg-${
        props.bg || "black"
      } ${props.className || ""}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
