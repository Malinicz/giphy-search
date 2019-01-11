<template>
  <styled-section> <slot /> </styled-section>
</template>

<script>
import styled from 'vue-styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth}px;
`;

export default {
  components: {
    'styled-section': StyledSection
  }
};
</script>
