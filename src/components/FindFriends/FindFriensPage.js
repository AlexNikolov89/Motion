import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import {Container} from '../../style/FindFriends'
import { useState } from 'react/cjs/react.development'
import FindFriends from './FindFriends'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {friendsAction} from '../../store/actions/friendsAction'
import Spinner from '../Spinner/Spinner'

const FindFriensPage = () => {
    const [friends, setFriends] = useState([])
    const dispatch = useDispatch();


    useEffect(() => {
      const fetchFriends = async () => {
        const data = await dispatch(friendsAction());
        setFriends(data);

        };
        fetchFriends()

    }, [])

    return (
        <Fragment>
          <Navbar />
          <Container>
          {friends ? friends.map(friend => <FindFriends friend={friend} key={friend.id} />
            ) : <Spinner />}
          </Container>  
        </Fragment>
    )
}

export default FindFriensPage
