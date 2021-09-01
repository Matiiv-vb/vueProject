<template>
    <div>
            <div class="form-group"   >
                <label >{{name}} <span v-bind:class="validateClass" v-show="activatedfff" > !!! </span>  </label>
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
            'red': !this.valid
        }
        },

    },
    props: ['name', "value", 'valid', 'pattern', 'activatedfff']

}
</script>