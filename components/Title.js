const Title = ({ label,classList, }) => {
  return (
    <h1 className={classList}  >
      {label}
    </h1>
  );
};

export default Title;
