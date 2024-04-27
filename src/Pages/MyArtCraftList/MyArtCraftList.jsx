import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtCraftCard from "../../Components/MyArtCraftCard/MyArtCraftCard";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);

  const [userAddCraft, setUserAddCraft] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/artisans_email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAddCraft(data);
      });
  }, [user.email]);

  return (
    <div className="container mx-auto">
      <div>
        {userAddCraft.map((craftCard) => (
          <MyArtCraftCard
            key={craftCard._id}
            craftCard={craftCard}
            userAddCraft={userAddCraft}
            setUserAddCraft={setUserAddCraft}
          />
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
