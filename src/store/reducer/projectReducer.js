const projectReducer = (state = [], action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error", action.error);
            return state;
        case "FETCH_PROJECTS":
            return { ...state, projects: action.projects };
        case "FETCH_PROJECT_DETAILS":
            return { ...state, project: action.project };
        default:
            return state;
    }
};

export default projectReducer;