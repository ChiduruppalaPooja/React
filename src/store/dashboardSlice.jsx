import { createSlice } from '@reduxjs/toolkit'

const selectedSubject = 0
const recentAssessmentsData = []
const assessmentsData= {}
const isSorting = false
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
const semester = 1


const intialAsessmentsSliceData = {
    profile,
    assessmentsData: {},
    coursesData: [],
    recentAssessmentsData,
    categories,
    analyticsData,
    leaderBoardData,
    isSorting,
    semester,
    intialDashBoardData,
    subjects,
    selectedSubject
}
const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: intialAsessmentsSliceData,
    reducers: {

        setDashBoardData(state, action) {
            state.intialDashBoardData = action.payload
            state.coursesData = action.payload.courses
            state.analyticsData = action.payload.analytics
            state.profile.name = action.payload.name
            state.profile.email = action.payload.email
            state.profile.profilePic = action.payload.profile_picture
            state.leaderBoardData = action.payload.leaderboard
            state.subjects = action.payload.recent_assessments.subjects
            state.recentAssessmentsData = action.payload.recent_assessments
        },
        setSubject(state, action) {
            state.selectedSubject = action.payload
        },
        isClickedForSorting(state, action) {
            state.isSorting = action.payload
        },
       
        setAssessmentsData(state, action) {
            state.assessmentsData = action.payload
            console.log('actual data', action.payload);
        },
        setSemester(state, action) {
            state.semester = action.payload

        }
        
    }
})

export default dashboardSlice;