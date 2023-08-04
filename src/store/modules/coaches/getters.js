export default {
  coaches(state) {
    return state.coaches;
  },
  haveCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
