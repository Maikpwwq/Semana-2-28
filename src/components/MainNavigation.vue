<template>
    <div id="principal" class="navigationMenu">
        <h1> {{ msg }}</h1>
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="../assets/img/navbar-logo.svg" alt="" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span>Menu</span> 
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a href="#principal" class="nav-link js-scroll-trigger"> Inicio</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Servicios</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#news">Noticias</a></li>                        
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Miembros</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">Acerca de</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Bienvenido de nuevo!</div>
                <div class="masthead-heading text-uppercase">Luces bien!</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Explorar</a>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        name: "MainNavigation",
        props: {
            msg: String
        }
    };
</script>

<style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>