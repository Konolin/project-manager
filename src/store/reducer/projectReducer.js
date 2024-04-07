const initState = {
    projects: [
        {id: '1', title: 'project 1', content: 'blah '},
        {id: '2', title: 'project 2', content: 'blah blah'},
        {id: '3', title: 'project 3', content: 'blah blah blah'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project);
    }
    return state;
};

export default projectReducer;