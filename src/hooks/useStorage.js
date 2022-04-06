import {useState, useEffect} from "react";
import { projectStorage, projectFirestore, timeStamp } from "../firebase/config";

const useStorage = (file) =>{     
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);  
        const colletionRef = projectFirestore.collection('images')          
        storageRef.put(file).on('state_changed', (snap) => {
              let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;              
              setProgress(percentage);
          }, (error) => {
            setError(error);
          }, async () => {
              const url = await storageRef.getDownloadURL();
              const createdAt = timeStamp();
              setUrl(url);
              colletionRef.add({ url, createdAt });
          })
      }, [file]);

      return {progress, url, error};
}

export default useStorage;



