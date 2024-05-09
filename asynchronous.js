//question 1
//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
async function logMessageWithDelay(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
  }
  logMessageWithDelay("Hello, world!", 1000);
 //question 2
 async function getUserData(userIds) {
    for (const userId of userIds) {
      const userData = await getUserData(userId);
      console.log(userData);
    }
  }
  
  const userIds = ['user1', 'user2', 'user3'];
  console.log(getUserData(userIds))
  
  //question 3
  async function performTask() {
    try {
      await performTask();
      console.log('Task completed successfully!');
    } catch (error) {
      console.error('An error occurred while performing the task:', error);
    }
  }
  performTask()

  //question4
  function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
      const random = Math.random()*10;
      if (random > failureProbability) {
        resolve(`${taskName} succeeded!`);
      } else {
        reject(`${taskName} failed!`);
      }
    });
  }
  console.log(unstableTask)
 