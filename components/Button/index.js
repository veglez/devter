import StyledButton from './styles';

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>

      <style jsx>{StyledButton}</style>
    </>
  );
};

export default Button;
