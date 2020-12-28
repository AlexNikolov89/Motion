import React, { Fragment } from 'react'
import SearchIcon from '../../assets/svgs/search_icon.svg';
import {SearchContainer, LeftSide, Search, Input, RightSide,
        Liked, Friends, Follow} from '../../style/SearchBar'

const SearchBar = () => {
    return (
        <Fragment>
            <SearchContainer>
                <LeftSide>
                    <Search src={SearchIcon} />
                    <Input type='text' placeholder='Search Posts...' />
                </LeftSide>

                <RightSide>
                    <Liked>Liked</Liked>
                    <Friends>Friends</Friends>
                    <Follow>Follow</Follow>
                </RightSide>
            </SearchContainer>
        </Fragment>
    )
}

export default SearchBar
