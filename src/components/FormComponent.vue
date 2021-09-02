<template>
    <div>
            <div class="form-group"   >
                <label >{{name}} <span  ><font-awesome-icon v-bind:class="validateClass" v-show="activatedfff" :icon="validateIcon" /></span>  </label>
                <input type="text" class="form-control" 
                v-bind:value="value"
                v-on:input="$emit('inputss', $event.target.value), $emit('dia')"
                >
                </div>
            </div>
</template>

<script>
export default {
    
    data: function () {
        return {
        count: 0,
        }
    },
    methods: {


    },
    computed: {

        validateClass(){
        // console.log(this, 'classsssssss');
        return{
            'text-danger': !this.valid,
            'text-success': this.valid

        }
        },
        validateIcon(){
        // console.log(this, 'classsssssss');
        return   this.valid ? "allergies" : 'user-secret'
        
        }

    },
    // props: ['name', "value", 'valid', 'pattern', 'activatedfff']
    props: {
        name: {
            type: String,
            default: 'FFF'
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
            type: RegExp,
        },
        activatedfff: {
            type: Boolean,
            default: false
        }
        }

}
</script>