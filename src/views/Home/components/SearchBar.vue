<template>
  <search-form>
    <search-input />
    <search-button>
      <template slot="label">
        Search
      </template>
    </search-button>
  </search-form>
</template>

<script>
import styled from 'vue-styled-components';
import BaseButton from '@/components/BaseButton';
import BaseTextInput from '@/components/BaseTextInput';

const SearchInput = styled(BaseTextInput)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: none;
`;

const SearchButton = styled(BaseButton)`
  width: 120px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: none;
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 600px;
  border-radius: ${({ theme }) => theme.borderRadius + 1}px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default {
  components: {
    'search-button': SearchButton,
    'search-form': SearchForm,
    'search-input': SearchInput
  }
};
</script>
