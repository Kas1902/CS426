import React, {useRef, useState} from 'react';
import {Pressable, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

import style from './style';

const Search = () => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
  };
  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={value => handleSearch(value)}
      />
      <Pressable
        onPress={() => {
          alert(`You have search for ${search}`);
        }}
        style={style.searchIconContainer}>
        <FontAwesomeIcon
          icon={faSearch}
          color={'#FFF'}
          size={scaleFontSize(22)}
        />
      </Pressable>
    </Pressable>
  );
};

export default Search;
