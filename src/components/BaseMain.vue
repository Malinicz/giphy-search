<template>
  <styled-main> <slot /> </styled-main>
</template>

<script>
import styled from 'vue-styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default {
  components: {
    'styled-main': StyledMain
  }
};
</script>
