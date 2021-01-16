import { getStocks } from './stocks';
import { getUserStocks } from './userStocks';

// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = user => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
// move all fetch requests to adapter class i.e. return Adapter.login(whatever arguments you need)
export const signUp = credentials => {
  const userInfo = {
    user: credentials
  }

  // Update names of object keys to snake case for backend
  userInfo.user["first_name"] = userInfo.user.["firstName"]
  delete userInfo.user.["firstName"]
  userInfo.user["last_name"] = userInfo.user.["lastName"]
  delete userInfo.user["lastName"]

  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setCurrentUser(json.data))
          dispatch(getStocks())
          dispatch(getUserStocks())
        }
      })
      .catch(json => console.log(json))
  }
}

export const login = credentials => {
  console.log("credentials are: ", credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setCurrentUser(json.data))
          dispatch(getStocks())
          dispatch(getUserStocks())
        }
      })
      .catch(json => console.log(json))
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          throw new Error(json.error)
        } else {
          dispatch(setCurrentUser(json.data))
          dispatch(getStocks())
          dispatch(getUserStocks())
          // DO I NEED THIS
          // history.push("/")
        }
      })
      // what is catch doing here?
      .catch(json => console.log(json))
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}
// import { getExercises } from './exercises';
// import { getDiaries } from './diaries';
// import { getMeals } from './meals';
// import { getFoods } from './foods';
//
// import { clearExercises } from './exercises';
// import { clearDiaries } from './diaries';
// import { clearMeals } from './meals';
// import { clearMealFoods } from './mealFoods';
// import { clearFoods } from './foods';
//
// // synchronous actions
//
//
// // aysnchronous actions
// const baseUrl = "http://localhost:3001/api/v1"
//
// export const login = (credentials, history) => {
//   return dispatch => {
//     // can abstract fetch requests into an adapter class and do something like - return Adapter.login(args) or Api.login(args)
//     return fetch(baseUrl + "/login", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(response => response.json())
//       .then(json => {
//         if (json.error) {
//           alert(json.error)
//         } else {
//           dispatch(setCurrentUser(json.data))
//           dispatch(getExercises())
//           dispatch(getDiaries())
//           dispatch(getMeals())
//           dispatch(getFoods())
//           history.push("/")
//         }
//       })
//       .catch(console.log())
//   }
// }
//
// export const signUp = (credentials, dailyCalorieGoal, dailyNutrientGoals, history) => {
//   let userInfo = {
//     user: credentials
//   }
//   userInfo.user.daily_calorie_goal = dailyCalorieGoal
//   userInfo.user.daily_fat_goal = dailyNutrientGoals.fat
//   userInfo.user.daily_saturated_fat_goal = dailyNutrientGoals.saturatedFat
//   userInfo.user.daily_polyunsaturated_fat_goal = dailyNutrientGoals.polyunsaturatedFat
//   userInfo.user.daily_monounsaturated_fat_goal = dailyNutrientGoals.monounsaturatedFat
//   userInfo.user.daily_carbohydrate_goal = dailyNutrientGoals.carbohydrate
//   userInfo.user.daily_sugar_goal = dailyNutrientGoals.sugar
//   userInfo.user.daily_protein_goal = dailyNutrientGoals.protein
//   userInfo.user.daily_vitamin_a_goal = dailyNutrientGoals.vitaminA
//   userInfo.user.daily_vitamin_c_goal = dailyNutrientGoals.vitaminC
//   userInfo.user.daily_vitamin_d_goal = dailyNutrientGoals.vitaminD
//   userInfo.user.daily_calcium_goal = dailyNutrientGoals.calcium
//   userInfo.user.daily_iron_goal = dailyNutrientGoals.iron
//
//   return dispatch => {
//     // can abstract fetch requests into an adapter class and do something like - return Adapter.login(args) or Api.login(args)
//     return fetch(baseUrl + "/signup", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(userInfo)
//     })
//       .then(response => response.json())
//       .then(json => {
//         if (json.error) {
//           if (json.error.includes("has already been taken")) {
//             alert("Username has already been taken")
//             console.log(json.error)
//           } else {
//             console.log(json.error)
//           }
//         } else {
//           dispatch(setCurrentUser(json.data))
//           dispatch(getExercises())
//           dispatch(getDiaries())
//           dispatch(getMeals())
//           dispatch(getFoods())
//           history.push("/")
//         }
//       })
//       .catch(console.log())
//   }
// }
//
//
// // clears the session and the store
// export const logout = () => {
//   return dispatch => {
//     // don't need to wait until fetch request resolves to log out a user, when a user clicks logout they should logout right away. call clearCurrentUser immediately
//     // optimistic => make the change to the frontend right away, don't wait for the backend
//     // pessimistic => hold on, make sure the server is running, the response we said works and the backend is all set before changing anything on the frontend and displaying anything to the user
//     dispatch(clearCurrentUser())
//     dispatch(clearExercises())
//     dispatch(clearDiaries())
//     dispatch(clearMeals())
//     dispatch(clearMealFoods())
//     dispatch(clearFoods())
//     return fetch(baseUrl + "/logout", {
//       credentials: "include",
//       method: "DELETE"
//     })
//   }
// }
