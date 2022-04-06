import {useState, useEffect} from "react";
import {projectFirestore} from "../firebase/config";

const useFirestore = (colection) =>{
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      const unsub = projectFirestore.collection(colection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap)=>{
        let documents = [];
        snap.forEach(doc => {
            documents.push({...doc.data(), id:doc.id});
        })
        setDocs(documents);
      });   
      
      return () => unsub();
    }, [colection])
    

    return {docs}
}

export default useFirestore;