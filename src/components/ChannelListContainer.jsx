import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import HospitalIcon from '../Assets/hospital.png'
import LogoutIcon from '../Assets/logout.png'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const cookies=new Cookies();

const SideBar=({logout})=>(
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
           
                <img src={HospitalIcon} alt="Hospital" width="30" />
            </div>
        </div>
    

    <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
            <img src={LogoutIcon} alt="Logout" width="30" />
        </div>
    </div>
    </div>
)

const CompanyHeader=()=>(
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>

)
const  customChannelTeamFilter=(channels)=>{
    return channels.filter((channel)=>channel.type==="team"); 
}

const customChannelMessageFilter =(channels)=>{
    return channels.filter((channel)=>channel.type==="messaging");
}

export default function ChannelListContainer() {
    return (
        <div>
            <SideBar/>
            <CompanyHeader/>
            <customChannelTeamFilter/>
        </div>
    )
}
