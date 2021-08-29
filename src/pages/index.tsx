import React, { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components';
import Layout from '../components/layout'
// import { getSummonerInfo } from '../services';
import axios from 'axios';
import { API, HEADERS } from '../constants';

export default function Home() {
  const [name, setName] = useState('');

  const inputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const searchName = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name);
    axios.get(`${API}/summoner/v4/summoners/by-name/${name}?api_key=${'RGAPI-880c6544-c0b9-4fad-a6b4-346ff948d260'}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <Layout>
      <HomePage>
        <h2>랜딩 페이지!!!</h2>
        <form>
          <input type="text" value={name} onChange={inputName} style={{border: "1px solid red", padding: "10px"}} />
          <button type="submit" onClick={searchName} >소환사 검색!</button>
        </form>
      </HomePage>
    </Layout>
  )
}

const HomePage = styled.div`
  h2 {
    margin-bottom: 20px;
  }
`;
