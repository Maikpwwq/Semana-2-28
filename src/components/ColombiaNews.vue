<template>
    <div class="col-lg-12">
    <div class="col-6 col-xs-12 d-inline-block" v-for="(item,index) of news" :key="index" >
        <div class="d-flex justify-content-center align-items-center" >
            <div class="p-3 align-items-center w-50">
                <img class="w-100 rounded" width="304" :src="item.urlToImage" alt="imagen de noticia" >
                <span><b>Fecha: </b>{{item.publishedAt.replace('T', ' ').replace('Z', ' ')}}</span>
            </div>
            <div class = "p-2 w-50 justify-content-center">
                <h5>{{item.title}}</h5>
                <hr>
                <p class="h-50">
                    {{item.description}}
                </p>
            </div>
        </div>   
        <div class="d-flex container-fluid justify-content-end pb-2 mt-n2" >
            <a :href="item.url" target="_blank" class="btn btn-outline-info">Info</a>
        </div>   
    </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        name: "ColombiaNews",
        props: [''], 
        data() {
            return {
                news: null,
            };
        },
        mounted() {
            axios.get(
                "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-05&sortBy=publishedAt&apiKey=86f5fc18d0104238b72bf07b6e3814e9"
            )
            .then((response) => {
                (this.news = response.data.articles.slice(7,11)),
                console.log(this.news)
                })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
            
        },
    };
  },
  mounted() {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-05&sortBy=publishedAt&apiKey=86f5fc18d0104238b72bf07b6e3814e9"
      )
      .then((response) => (this.news = response.data.Search.slice(0, 4)));
  },
};
</script>