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
      <!-- <p class="padding"></p> -->
    <img :class="ExpandContent && rotate" src="./Dropdown-Arrow.png" width="30">
    </div> 
    <div class = "answer">
      <p :class="ExpandContent? 'visible':'hidden'">
        <slot name="answer"></slot>
      </p>
    </div>
</template>





<style scoped>
.question{
    background-color: #EAEAEA;
    padding: 10px 20px;
    margin: 10px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.question:hover{
    cursor:pointer;
}


.question p{
    margin: 0;
    font-weight: bold;
}

.question img,
.question .rotate{
    transition: all 0.5s;
}

.question .rotate{
    transform: rotate(180deg);
}



.answer .visible , 
.answer .hidden {
background-color: #F5F5F5;
font-size: 15px;
transition: all 0.5s; 
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

}
/* this is for hidden to visible  */
.answer .visible {
    padding: 5px 20px 5px 10px;
    max-height: 500px;

}
/* this is for visible to hidden  */
.answer .hidden {
    padding: 0 10px;
    max-height:0;
    overflow: hidden;
}
</style>