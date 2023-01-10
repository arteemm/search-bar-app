type Message = {
  message: string;
};

function ErrorMessage(props: Message) {
  return (
    <div className="error-message" data-testid="error-message">
      {props.message}
    </div>
  );
}

export default ErrorMessage;
