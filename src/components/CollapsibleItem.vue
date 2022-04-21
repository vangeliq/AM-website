<script>
export default{
    props:['expandSection'],
    watch: {
        expandSection (val, oldVal) {
        if (val !== oldVal) {
            this.ExpandContent=this.expandSection
            }
        }
    },
    data() {
        return {
            ExpandContent: false,
            rotate:"rotate",
        };
    },
}
</script>

<template>
    <div class="question" v-on:click="this.ExpandContent = !this.ExpandContent">
      <p>
        <slot name="question" ></slot>
      </p>
      <p class="padding"></p>
    <img :class="ExpandContent && rotate" src="./Dropdown-Arrow.png" width="30">
    </div> 
    <div>
      <p class="answer" v-if="ExpandContent">
        <slot name="answer"></slot>
      </p>
      <p>
      </p>
    </div>
</template>





<style scoped>
.padding{
        visibility: hidden;
        flex-grow: 1;    
}

.question{
background-color: #b2b2b2;
padding: 5px 20px  5px 10px;
margin: 20px 0 0 0;
    display: flex;
        align-items: center;
}

.question:hover{
    cursor:pointer;
}


.question p{
    font-size: 15px;
    margin: 5px 0;
    font-weight: bold;

    
}
.rotate{
    transform: rotate(180deg);
}

.answer{
font-size: 15px;
background-color: #e2e2e2;
padding: 5px 20px 5px 10px;
}
</style>