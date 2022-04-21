<script>
import CollapsibleItem from './CollapsibleItem.vue'
import TheWelcome from './TheWelcome.vue';
export default{
    data() {
        return {
            ExpandAbout:false
        };
    },
    methods: {
        switchBoolean: function () {
            console.log("switch boolean called! current value is:");
            this.ExpandAbout = !this.ExpandAbout;
        }
    },
    components: { CollapsibleItem }
}
</script>


<template>
    <div class="flex-body">

          <div class="hook">
            <h1 class="title"> The AM Keycloak Vision </h1>
            <p class="quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p>
                <a class="btn-request-integration" href="#/request-integration">
                    Request Keycloak Integration
                </a>
            </p>
            <!-- <a class="btn-request-integration" href="#/request-integration">
                Request Keycloak Integration
            </a> -->
            
            <hr size="" width="" color="">  
        </div>

        <div id="content">
            <div class="collapsible">
                <h3 class="title">About</h3>
                <ul class = "links">
                    <li v-on:click="this.ExpandAbout = false">Collapse All</li>
                    <li v-on:click="this.ExpandAbout = true">Expand All</li>
                </ul>
               
                <div class="list">
                    <CollapsibleItem :expandSection=ExpandAbout>
                    <template #question>Title</template>
                    <template #answer>
                        Vue’s
                        <a target="_blank" href="https://vuejs.org/">official documentation</a>
                        provides you with all information  need to get started.
                    </template>
                    </CollapsibleItem>
                    <CollapsibleItem :expandSection=ExpandAbout>
                        <template #question>Title</template>
                        <template #answer>
                            Vue’s
                            <a target="_blank" href="https://vuejs.org/">official documentation</a>
                            provides you with all information  need to get started.
                        </template>
                    </CollapsibleItem>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.flex-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    /* padding: 10px 0; */
}

.hook {
    /* background-color:red; */
    /* padding:10px; */
    /* min-width:-webkit-fill-available; */
    margin-bottom: 20px;;
}

.hook .title {
    /* background-color:greenyellow; */
    max-width:350px;
        color: #003366;

}

.hook .quote{
    /* background-color:aquamarine; */
    max-width:550px; 
}

.hook .btn-request-integration{
    background-color:#003366;
    color: white;
    padding: 7px 13px;
    border-radius: 3px;
    margin: 0 0 10px 0;
    border: none;
    font-size: 14px;
    text-decoration: none;
}

.hook .btn-request-integration:hover{
    background-color:#335372;
}

hr{
    color: #b2b2b2;
}


 .collapsible .title{
    font-size: large;
}
 .collapsible .links{
/* background: #b2b2b2; */
  padding: 0;
  display: flex;
  flex-wrap: wrap  
}
.collapsible .links li{
    /* background: yellow; */

    color: #003366;
    /* height: 25px; */
    /* line-height: 40px; */
    /* vertical-align: top; */
    font-weight: bold;
    font-size: 11px;
    margin: 0px 7px 0px 0px;
}


.collapsible .links li:hover{
    /* background: yellow; */
    text-decoration: underline;
}

 .collapsible .list {
    max-width:800px;
}

</style>