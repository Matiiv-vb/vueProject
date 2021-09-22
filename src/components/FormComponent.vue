<template>
  <div>
    <!-- <h1
      class="animate__animated animate__flipInY"
      v-on:click="animateEl = !animateEl"
    >
      An animated element
    </h1>
    <transition
      mode="out-in"
      enter-active-class="animate__animated  animate__shakeY"
    >
      <h2 v-if="animateEl" key="1">New element animaation tr</h2>
      <h2 v-else key="2">New element animaation Else</h2>
    </transition>
 -->

    <slot name="sn"></slot>
    <div class="form-group">
      <label
        >{{ name }}
        </label>
        <p class="pClass">
          <transition
          mode="out-in"
          enter-active-class="animate__animated  animate__shakeY"
        >
          <div v-show="activatedfff">
            <transition
              mode="out-in"
              enter-active-class="animate__animated  animate__flipInY"
              enter-leave-class="animate__animated  animate__flipOutY"
            >
              <font-awesome-icon
                key="1"
                v-bind:class="validateClass"
                v-if="valid"
                :icon="validateIcon"
              />
              <font-awesome-icon
                key="2"
                v-bind:class="validateClass"
                v-else
                :icon="validateIcon"
              />
            </transition>
          </div>
        </transition>
        </p>
        
      
      <input
        type="text"
        class="form-control"
        v-bind:value="value"
        v-on:input="$emit('inputss', $event.target.value), $emit('dia')"
      />
    </div>
    <slot name="newSlot"></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0,
      animateEl: true
    };
  },
  methods: {},
  computed: {
    validateClass() {
      // console.log(this, 'classsssssss');
      return {
        "text-danger": !this.valid,
        "text-success": this.valid
      };
    },
    validateIcon() {
      // console.log(this, 'classsssssss');
      return this.valid ? "allergies" : "user-secret";
    }
  },
  // props: ['name', "value", 'valid', 'pattern', 'activatedfff']
  props: {
    name: {
      type: String,
      default: "FFF"
    },
    value: {
      type: String,
      default: "sss"
    },
    valid: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: RegExp
    },
    activatedfff: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang='scss'>

.pClass {
  display: inline-block;
}

/* .fade-enter-active {
  animation: fadeIn 2s;
}

.fade-leave-active {
  animation: fadeOut 2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
} */
</style>
