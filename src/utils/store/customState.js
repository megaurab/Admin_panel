import React, { useEffect } from "react";

function defaultStates(param) {
  let authState = {
    email_status: null,
    loading: false,
    server_response: null,
    role: "user",// or admin
    isAuthenticated: null,
    token: "",
  };

  return authState;
}

function initializeState() {
  const savedStates = localStorage.getItem("appState");

  if (!savedStates) {
    const defaultState = defaultStates();
    localStorage.setItem("appState", JSON.stringify(defaultState));
  }
  try {
    const postInitializedState = localStorage.getItem("appState");
    let fetchedState = JSON.parse(postInitializedState);

    return fetchedState;
  } catch (error) {
    return "Error parsing JSON from localStorage:";
  }
}

function dispatch(newState) {
  if (newState) {
    let oldState = initializeState();
    let updatedState = { ...oldState, ...newState };
    localStorage.setItem("appState", JSON.stringify(updatedState));

    return updatedState;
  }

  console.error("No new state provided.");
  return;
}

function selectStateKey(stateName, key) {
  try {
    const state = localStorage.getItem(stateName);

    if (!state) {
      console.warn(`State "${stateName}" not found in localStorage.`);
      return "state does not exist";
    }

    const parsedState = JSON.parse(state);

    if (key in parsedState) {
      return parsedState[key];
    } else {
      console.warn(`Key "${key}" not found in state "${stateName}".`);
      return "key not found please check typo";
    }
  } catch (error) {
    console.error("Error retrieving value from state:", error);
    return null;
  }
}

function resetState() {
  const defaultState = defaultStates();
  localStorage.setItem("appState", JSON.stringify(defaultState));
  return defaultState;
}

function spinnerDiv(state) {
  if (state) {
    return (
      <>
        <div
          className="animate-spin h-5 w-5 border-4 border-blue-500 border-t-transparent rounded-full"
          role="status"
        />
        <span className="text-blue-500 m-1">Loading...</span>
      </>
    );
  }
  return null;
}

function getAlertDiv(message) {
  if (message) {
    return (
      <>
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <h5>{`${message} 💬`}</h5>
        </div>
      </>
    );
  }
}

function useClearAlert(setMessages, timeout = 6000) {
  useEffect(() => {
    if (setMessages) {
      const timer = setTimeout(() => {
        setMessages(null);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [setMessages, timeout]);
}

export const customStateMethods = {
  initializeState,
  dispatch,
  selectStateKey,
  resetState,
  spinnerDiv,
  getAlertDiv,
  useClearAlert,
};
