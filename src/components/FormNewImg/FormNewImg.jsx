
import { getStorage, ref, uploadBytes} from "firebase/storage";

export const FormNewImg = (file) => {
const storage = getStorage();
const storageRef = ref(storage, 'fotos/some-child');

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log(snapshot);
});

}
