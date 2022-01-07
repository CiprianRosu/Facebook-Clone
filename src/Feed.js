import React from 'react'
import "./Feed.css";
import StoryReel from"./StoryReel";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post 
                profilePic="https://www.christianberner.dk/globalassets/kontaktpersoner/profilepic.png?w=200&h=200&scale=both&mode=crop"
                message="wow it works"
                timestamp="this is timestamp"
                username="CipRosu"
                image="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg"
                />
            <Post 
                profilePic="https://www.christianberner.dk/globalassets/kontaktpersoner/profilepic.png?w=200&h=200&scale=both&mode=crop"
                message="wow it works"
                timestamp="this is timestamp"
                username="CipRosu"
                image="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg"
                />
                <Post 
                profilePic="https://www.christianberner.dk/globalassets/kontaktpersoner/profilepic.png?w=200&h=200&scale=both&mode=crop"
                message="wow it works"
                timestamp="this is timestamp"
                username="CipRosu"
                image="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/photos/term-bg-1-c98135712157fb21286eafd480f610f9.jpg"
                />
        </div>
    )
}

export default Feed
