import {addDoc, collection} from "firebase/firestore";
import db from "../../config/firebaseConfig.js";

export const createProject = (project) => {
    return async (dispatch, getState) => {
        addDoc(collection(db, "projects"), {
            ...project,
            authorFirstName: "Bob",
            authorLastName: "Dob",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: "CREATE_PROJECT", project});
        }).catch((error) => {
            dispatch({type: "CREATE_PROJECT_ERROR", error});
        });
    };
};