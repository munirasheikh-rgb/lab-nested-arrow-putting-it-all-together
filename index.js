 function createLoginTracker(userInfo){

let attemptCount = 0
 return ( passwordAttempt)=>{
  attemptCount++;
  

  if(passwordAttempt === userInfo.password){
    return "Login successful"
  }
  if(attemptCount > 3){
    return "Account locked due to too many failed login attempts"
  }
  return `Attempt ${attemptCount}: Login failed`
  
  
  

  
  
  
  
  
  }
 
  

 }

// const user={
//   username:"user 1",
//   password:"password 123"


// const login = createLoginTracker(user)

// console.log(login(1))//first log in attempt failed
// console.log(login("password 123"))//login with user password (successfull output)
// console.log(login(2)) // after 3 attempts account is locked


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};