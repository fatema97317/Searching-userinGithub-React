
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [username, setUserName] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(username);

  useEffect(() => {
    if (!username) return;
    setLoading(true)
    fetch(`https://api.github.com/users/${username}`).then((res) => res.json()).
      then((data) => {
        setUserData(data);
        setLoading(false)
        console.log(data);

      })

  }, [username])

  return (
    <div className="container">
      <h2>Searching User in Github</h2>

      <input
        type='text'
        value={username}
        onChange={(e) => setUserName(e.target.value)} />

      {loading && <p>loading informations...</p>}

      {!loading && userData && (
        <div className='user-card'>
          <img
            src={userData.avatar_url}
            alt='avatar'
            width="100px"
          />

          <p>name : {userData.name}</p>
          <p>Followers :{userData.followers}</p>
          <p>number of repositories :{userData.public_repos}</p>
          <a href={userData.html_url} target='_blank'> See profile</a>
        </div>
      )

      }



    </div>
  );


}

export default App;
