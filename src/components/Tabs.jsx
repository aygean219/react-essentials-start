export default function Tab({ children, buttons, ButtonsContainer = "menu" }) {
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
