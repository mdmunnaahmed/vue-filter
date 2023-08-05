export default {
  registerCoach(context, data) {
    const coachData = {
      id: 'c2',
      firstName: data.first,
      lastName: data.last,
      rate: data.rate,
      areas: data.areas,
      descriptions: data.desc,
      hourlyRate: data.rate,
    };
    context.commit('registerCoach', coachData);
  },
};
