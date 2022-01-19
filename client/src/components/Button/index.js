function Button({ onClick, buttonText }) {
  return (
    <div>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
}

export default Button;
