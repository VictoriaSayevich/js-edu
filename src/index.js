/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const time = 800, full_time = 800 + 500;
      if (knowsProgramming) {
        return Math.ceil(time/config[focus]);
      }
      return Math.ceil(full_time/config[focus]);
  };
  