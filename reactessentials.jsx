// dynamic values


{Component.map((item)=>(<Component items ={item}/>))}

// while you update a state using a state function you 
//shouldnt directly pass the exisiting state as a parameter
// instead pass a fucntion as best practice
// because the state update in react is usually rescheduled
// as rescheduling means time gap its not recommended



//STYLES....................................................................................


//lifting state up
//when we have an two compnents, that should share some value
//between them as a state then, we better go to their ancestor
//and share from there
//iuse camelcase


<p style={{color:'blue'}}>hi</p>

//css will be applied globally
// so use header.module.css and import it like object 
import classes from 'Header.module.css'
<p className={classes.paragraph}></p>


//not inline not seperate use custom components
npm install styled-components
//use styled.div and write css there and use it as cutom components


//for conditional styling
// send things as props and use in the styled.div
// for nested components usually we write only one in one component