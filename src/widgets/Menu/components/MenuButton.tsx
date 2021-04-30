import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  margin-top:28px;
  border-radius: 8px;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
