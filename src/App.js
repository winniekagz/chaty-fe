import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css'
import {ChannelContainer ,ChannelListContainer} from './components'
const apiKey='fd6tmbut3xdf';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="App_wrapper">
       <Chat client={client} theme="team light">
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
