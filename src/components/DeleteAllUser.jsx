import styled from 'styled-components'
import React from 'react'
// import { clearAllUsers } from '../store/slices/UserSlice'
import { clearAllUsers } from '../store/actions'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () =>{
    dispatch(clearAllUsers())
  }

  return (
      <Wrapper>
    <div>
        <button className='btn clear-btn' onClick={deleteUsers}>Delete All Users</button>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn{
  text-transform : capitalize;
  background-color : #db338a; 
  margin-top : 2rem;
}`

export default DeleteAllUser
