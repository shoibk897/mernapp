import React from 'react';
import Header from './Header';
import MeetRoom from './pages/meetRoom';

function Layout() {
  return (
    <>
        <div className="container">
            <header >
                <Header></Header>
            </header>
            <main  >
                   <MeetRoom/>             
            </main>
        </div>
    </>
  )
}

export default Layout