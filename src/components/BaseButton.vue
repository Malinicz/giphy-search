<template>
  <styled-button> <slot name="icon" /> <slot name="label" /> </styled-button>
</template>

<script>
import styled from 'vue-styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 60px;
  color: ${({ theme }) => theme.colors.brightest};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default {
  components: {
    'styled-button': StyledButton
  }
};
</script>
