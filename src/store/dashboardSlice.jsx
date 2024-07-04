import { createSlice } from '@reduxjs/toolkit'


const recentAssessmentsData = []
const categories = []
const profile = {
    name: '',
    email: '',
    profilePic: ''

}
const subjects = []
const analyticsData = []
const leaderBoardData = []
const intialDashBoardData = {}


const intialAsessmentsSliceData = {
    profile,
    coursesData: [],
    recentAssessmentsData,
    categories,
    analyticsData,
    leaderBoardData,
    intialDashBoardData,
    subjects,
    
}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: intialAsessmentsSliceData,
    reducers: {

        setDashBoardData(state, action) {
            state.intialDashBoardData = action.payload
            console.log(state.intialDashBoardData)
            state.coursesData = action.payload.courses
            state.analyticsData = action.payload.analytics
            state.profile.name = action.payload.name
            state.profile.email = action.payload.email
            state.profile.profilePic = action.payload.profile_picture
            state.leaderBoardData = action.payload.leaderboard
            state.subjects = action.payload.recent_assessments.subjects
        },
        
    }
})

export default dashboardSlice;