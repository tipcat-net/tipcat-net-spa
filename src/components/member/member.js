import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getMember } from './../../ducks/members/actions';
import { selectMembers, selectMembersLoading } from './../../ducks/members/selectors';

import Spinner from './../spinner';

import './member.css';

const Member = React.memo(() => {
  const put = useDispatch();
  const data = useSelector(selectMembers);
  const loading = useSelector(selectMembersLoading);
  
  const [ edit, setEdit ] = useState(false);
  const [ firstName, setFirstName ] = useState(data?.firstName || '');
  const [ lastName, setLastName ] = useState(data?.lastName || '');
  const [ email, setEmail ] = useState(data?.email || '');

  useEffect(() => {
    put(getMember());
  }, []);

  useEffect(() => {
    setFirstName(data?.firstName || '')
    setLastName(data?.lastName || '')
    setEmail(data?.email || '')
  }, [data]);

  const onResetForm = () => {
    setEdit(false);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
  }

  const onSubmitMember = (event) => {
    event.preventDefault();
    console.log('edit');
  }
  
  if(loading) {
    return <Spinner />
  }

  return (
    <>
      <form className="member-form" onSubmit={onSubmitMember}>
        <div className="member-form__item">
          <label htmlFor="firstName" className="member-form__label">firstName:{!edit?` ${firstName}`:null}</label>
          {
            edit?(
              <input 
                type="text" 
                className="member-form__input" 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} />
            ):null
          } 
        </div>
        <div className="member-form__item">
          <label htmlFor="lastName" className="member-form__label">lastName:{!edit?` ${lastName}`:null}</label>
          {
            edit?(
              <input 
                type="text" 
                className="member-form__input" 
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} />
            ):null
          }
        </div>
        <div className="member-form__item">
          <label htmlFor="email" className="member-form__label">email:{!edit?` ${email}`:null}</label>
          {
            edit?(
              <input 
                type="email" 
                className="member-form__input" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            ):null
          }
        </div>
        <div className="member-form__item">
          {
            edit?(
              <>
                <button type="button" onClick={onResetForm}>cancel</button>
                <button type="submit">Save</button>
              </>
            ):(
              <button type="button" onClick={() => setEdit(true)}>edit</button>
            )
          }
        </div>
      </form>
    </>
  );
});

export default Member;