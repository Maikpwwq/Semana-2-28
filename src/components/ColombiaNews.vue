<template>
        
    <div>
        <div class="row mt-md-5 mt-sm-5 mt-xs-5">
            <div class="col-lg-6 col-xs-12" v-for="(item,
            index) of news" :key="index" >
                <div class="d-flex justify-content-center align-items-center">
                    <div class="p-3">
                        <img :src="news.urlToImage" alt="news picture">
                            <div>
                                <h2>{{news.title}}</h2>
                            </div>
                        <div class="p-2">
                            <p>{{news.description}}</p>
                        </div>
                    </div>
                <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
            </div>
        </div>
    </div>
 


</template>

<script>
import axios from "axios";

export default {
  name: "SectionApi",
  data() {
    return {
      news: null,
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