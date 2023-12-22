
import { createContext, useState ,useEffect} from "react";




export const postContext = createContext(null);

function Post({ children }) {


    const [storedData, setStoredData] = useState(null);
  const [postDetails, setPostDetails] = useState("");
  return (
    <postContext.Provider value={{ postDetails, setPostDetails,storedData,setStoredData }}>
      {children}
    </postContext.Provider>
  );
}







export default Post;
