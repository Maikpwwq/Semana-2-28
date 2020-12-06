<template>
        <section class="page-section bg-light" id="news">
            <!-- News Grid 2 x 2 -->
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Noticias recientes</h2>
                    <h3 class="section-subheading text-muted">Descubra los ultimos acontecimientos.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-sm-0">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="" alt="" />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">{{Titulo}}</div>
                                <div class="portfolio-caption-subheading text-muted">{{Descripcion}}</div>
                            </div>
                        </div>
                    </div>                    
                </div>
        </div>

        <!-- Portfolio Modals-->
        <!-- Modal 1-->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="../assets/img/close-icon.svg" alt="Cerrar detalle" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Nombre de la Noticia</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="../assets/img/portfolio/01-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Threads</li>
                                        <li>Category: Illustration</li>
                                    </ul>
                                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                                        <i class="fas fa-times mr-1"></i>
                                        Cerrar Detalle de la Noticia
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>-->
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