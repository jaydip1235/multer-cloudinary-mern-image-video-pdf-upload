import { Link } from "react-router-dom";
import VideoPlayer from "react-video-js-player"
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:5000/user`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="row">
      {users?.map((user) => (
        <div className="col-md-3 card me-3 mt-2 p-0 mb-2 d-flex" key={user._id}>
          <img src={user.avatar} alt="" width={"100%"} height={200} />
         
          <VideoPlayer src={user.video} width="720"
                    height="420"
          playBackRates={[0.5,1,1.25,1.5,2]}/>
      
          <a href={user.pdf} download>Click to download</a>
          <div className="p-2">
            <h3>{user.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
