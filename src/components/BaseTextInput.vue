<template>
  <styled-text-input class="text-input" />
</template>

<script>
import styled from 'vue-styled-components';

export const StyledTextInput = styled.input`
  padding: 15px;
  width: 100%;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow};

  &:focus {
    z-index: 1;
  }
`;

export default {
  components: {
    'styled-text-input': StyledTextInput
  }
};
</script>
