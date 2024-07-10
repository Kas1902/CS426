import React, {useState, useRef, useEffect} from 'react';
import {Text, TextInput, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

// Step 1: Add initialValue to the component's props
const InputWithLabel = ({label, initialValue, onChange, placeholder}) => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState(initialValue);

  useEffect(() => {
    setSearch(initialValue); // Update internal state when initialValue changes
  }, [initialValue]);

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    if (onChange) {
      onChange(searchValue);
    }
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <Text style={style.text}>{label}</Text>
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        placeholder={placeholder}
        // Step 3: Ensure the value prop is set to the search state variable
        value={search}
        // The onChangeText prop already updates the search state with user input
        onChangeText={handleSearch}
      />
    </Pressable>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputWithLabel;
