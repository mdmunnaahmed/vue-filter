<template>
  
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="">First Name</label>
      <input v-model.trim="firstName" type="text" />
    </div>
    <div class="form-control">
      <label for="">Last Name</label>
      <input v-model.trim="lastName" type="text" />
    </div>
    <div class="form-control">
      <label for="">Rate</label>
      <input v-model.number="rate" type="number" />
    </div>
    <div class="form-control">
      <label for="">Description</label>
      <textarea
        v-model="description"
        name=""
        id=""
        cols="30"
        rows="6"
      ></textarea>
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <label for="">
          <span>Frontend</span>
          <input
            type="checkbox"
            v-model="areas"
            id="frontend"
            value="frontend"
          />
        </label>
        <label for="">
          <span>Backend</span>
          <input type="checkbox" v-model="areas" id="backend" value="backend" />
        </label>
        <label for="">
          <span>Career Advisory</span>
          <input type="checkbox" v-model="areas" id="career" value="career" />
        </label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: '',
      lastName: '',
      rate: '',
      areas: null,
      description: '',
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {

    },
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>


<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}
input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>