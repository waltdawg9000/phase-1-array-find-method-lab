// code your solution here
function superbowlWin(array) {
    const results = array.find(record => record.result === "W") 
    
    if (results === true) {
                 return results.year
     } else {
         return undefined
    }
 
}